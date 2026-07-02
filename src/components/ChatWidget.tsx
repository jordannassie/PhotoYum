'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

const SUPPORT_AVATAR_URL =
  'https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/People/c50c40f7-9056-4db0-898b-4ee268d10e53.png'

const PACKAGE_OPTIONS = [
  'Product Image Package — $500',
  'Image + Video Package — $700',
  'Bulk pricing',
  'Not sure yet',
]

const PRODUCT_COUNT_OPTIONS = [
  '1 product',
  '2–3 products',
  '4–10 products',
  '10+ products',
]

interface Message {
  role: 'bot' | 'user'
  text: string
}

interface Answers {
  name: string
  email: string
  brand_name: string
  product_listing_url: string
  product_photo_url: string
  product_count: string
  package_interest: string
  improvement_notes: string
}

type StepDef = {
  key: keyof Answers
  question: string | ((a: Answers) => string)
  type?: 'buttons'
  options?: readonly string[]
}

const STEPS: StepDef[] = [
  { key: 'name',                question: "Hey! I'm here to help. What's your name?" },
  { key: 'email',               question: (a: Answers) => `Nice to meet you, ${a.name}! What's your email address?` },
  { key: 'brand_name',          question: "What's your brand name?" },
  { key: 'product_listing_url', question: 'Do you have an Amazon listing URL? (Paste it below, or type "skip")' },
  { key: 'product_photo_url',   question: 'Do you have product photos? Paste a Dropbox, Google Drive, or website link. (Or type "skip")' },
  { key: 'product_count',       question: 'How many products do you need images for?', type: 'buttons', options: PRODUCT_COUNT_OPTIONS },
  { key: 'package_interest',    question: 'Which package interests you?', type: 'buttons', options: PACKAGE_OPTIONS },
  { key: 'improvement_notes',   question: "Last one — what would you like improved or created? Describe your current images or what you're going for." },
]

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(0)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [answers, setAnswers] = useState<Answers>({
    name: '', email: '', brand_name: '', product_listing_url: '',
    product_photo_url: '', product_count: '', package_interest: '', improvement_notes: '',
  })
  const [status, setStatus] = useState<'chat' | 'submitting' | 'done' | 'error'>('chat')
  const [started, setStarted] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const addBot = (text: string) => {
    setMessages((prev) => [...prev, { role: 'bot', text }])
  }

  const startChat = () => {
    setStarted(true)
    const firstQ = STEPS[0].question
    addBot(typeof firstQ === 'function' ? firstQ(answers) : firstQ)
  }

  const advanceStep = (newAnswers: Answers, nextStep: number) => {
    if (nextStep >= STEPS.length) {
      submitLead(newAnswers)
      return
    }
    const q = STEPS[nextStep].question
    setTimeout(() => addBot(typeof q === 'function' ? q(newAnswers) : q), 300)
    setStep(nextStep)
  }

  const handleInput = (value: string) => {
    if (!value.trim()) return
    const currentStep = STEPS[step]
    const userVal = value.trim()
    const skipVal = userVal.toLowerCase() === 'skip' ? '' : userVal

    // Validate email
    if (currentStep.key === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userVal)) {
      addBot("Hmm, that doesn't look like a valid email. Could you try again?")
      setInput('')
      return
    }

    const newAnswers = { ...answers, [currentStep.key]: skipVal }
    setAnswers(newAnswers)
    setMessages((prev) => [...prev, { role: 'user', text: userVal }])
    setInput('')
    advanceStep(newAnswers, step + 1)
  }

  const submitLead = async (finalAnswers: Answers) => {
    setStatus('submitting')
    addBot("Thanks! Just a second while we save your info...")

    const transcript = messages
      .map((m) => `${m.role === 'bot' ? 'PhotoYum' : 'You'}: ${m.text}`)
      .join('\n')

    try {
      const res = await fetch('/api/leads/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'chat',
          ...finalAnswers,
          chat_transcript: transcript,
        }),
      })
      if (!res.ok) throw new Error('Submit failed')
      setStatus('done')
      setTimeout(() => addBot("We got your info. We'll follow up within 24 hours. 🎉"), 400)
    } catch {
      setStatus('error')
      addBot("Oops — something went wrong saving your info. Please try the form below or email us directly.")
    }
  }

  const currentStepDef = STEPS[step]
  const isButtonStep = status === 'chat' && currentStepDef && 'type' in currentStepDef && currentStepDef.type === 'buttons'
  const isLastStep = step === STEPS.length - 1
  const isDone = status === 'done' || status === 'error'

  return (
    <>
      {/* Floating button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {!open && (
          <div className="bg-[#111827] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg opacity-90 pointer-events-none animate-fade-in">
            Need help?
          </div>
        )}
        <button
          onClick={() => {
            setOpen(!open)
            if (!started && !open) setTimeout(startChat, 400)
          }}
          className="w-14 h-14 rounded-full bg-[#1476ff] hover:bg-[#1060d4] shadow-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95"
          aria-label="Chat with us"
        >
          {open ? (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
            </svg>
          )}
        </button>
      </div>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[340px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
          style={{ height: '480px' }}>

          {/* Header */}
          <div className="bg-[#1476ff] px-4 py-3 flex items-center gap-3 flex-shrink-0">
            <Image
              src={SUPPORT_AVATAR_URL}
              alt="PhotoYum support"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md flex-shrink-0"
            />
            <div className="flex-1">
              <div className="text-white font-bold text-sm">PhotoYum</div>
              <div className="text-white/70 text-xs">Typically replies in minutes</div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.length === 0 && !started && (
              <div className="text-center text-sm text-gray-400 mt-6">
                <div className="w-12 h-12 rounded-full bg-[#1476ff]/10 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-[#1476ff]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                  </svg>
                </div>
                <p>Chat with us to get started</p>
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'bot' && (
                  <Image
                    src={SUPPORT_AVATAR_URL}
                    alt="PhotoYum support"
                    width={44}
                    height={44}
                    className="w-11 h-11 rounded-full object-cover shadow-sm mr-2 mt-0.5 flex-shrink-0"
                  />
                )}
                <div className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-[#1476ff] text-white rounded-tr-sm'
                    : 'bg-gray-100 text-[#111827] rounded-tl-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {status === 'submitting' && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-2.5">
                  <div className="flex gap-1 items-center">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick reply buttons */}
          {isButtonStep && (
            <div className="px-4 pb-2 flex flex-wrap gap-2 flex-shrink-0">
              {currentStepDef.options?.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleInput(opt)}
                  className="text-xs bg-[#1476ff]/10 text-[#1476ff] hover:bg-[#1476ff]/20 px-3 py-1.5 rounded-full font-medium transition border border-[#1476ff]/20"
                >
                  {opt}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          {!isDone && !isButtonStep && (
            <div className="px-4 pb-4 pt-2 flex-shrink-0 border-t border-gray-100">
              <div className="flex gap-2">
                {isLastStep ? (
                  <textarea
                    ref={inputRef as React.RefObject<HTMLTextAreaElement>}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleInput(input) }
                    }}
                    placeholder="Type your message..."
                    rows={2}
                    className="flex-1 px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1476ff]/30 focus:border-[#1476ff] transition resize-none"
                  />
                ) : (
                  <input
                    ref={inputRef as React.RefObject<HTMLInputElement>}
                    type={currentStepDef?.key === 'email' ? 'email' : 'text'}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleInput(input) }}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1476ff]/30 focus:border-[#1476ff] transition"
                  />
                )}
                <button
                  onClick={() => handleInput(input)}
                  disabled={!input.trim()}
                  className="w-9 h-9 rounded-xl bg-[#1476ff] hover:bg-[#1060d4] disabled:opacity-40 text-white flex items-center justify-center transition flex-shrink-0 self-end"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {isDone && (
            <div className="px-4 pb-4 pt-2 flex-shrink-0 border-t border-gray-100">
              <button
                onClick={() => { setOpen(false) }}
                className="w-full bg-[#FF9900] hover:bg-[#e68900] text-white font-bold text-sm py-2.5 rounded-xl transition"
              >
                Close Chat
              </button>
            </div>
          )}
        </div>
      )}
    </>
  )
}
