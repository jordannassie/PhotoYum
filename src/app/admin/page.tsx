'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const LOGO = 'https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/logo/Logo-PhotoYum-black.png'

type Status = 'new' | 'contacted' | 'interested' | 'closed' | 'not a fit'

interface Lead {
  id: string
  created_at: string
  source: string
  name: string
  email: string
  brand_name: string | null
  product_listing_url: string | null
  product_photo_url: string | null
  product_count: string | null
  package_interest: string | null
  improvement_notes: string | null
  chat_transcript: string | null
  coupon_code: string | null
  coupon_discount: number | null
  status: Status
  admin_notes: string | null
  last_followed_up_at: string | null
}

const STATUS_COLORS: Record<Status, string> = {
  new: 'bg-blue-100 text-blue-700',
  contacted: 'bg-yellow-100 text-yellow-700',
  interested: 'bg-green-100 text-green-700',
  closed: 'bg-gray-100 text-gray-600',
  'not a fit': 'bg-red-100 text-red-600',
}

const STATUS_OPTIONS: Status[] = ['new', 'contacted', 'interested', 'closed', 'not a fit']

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

/* ─── Login Screen ─── */
function LoginScreen({ onLogin }: { onLogin: (key: string) => void }) {
  const [key, setKey] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ accessKey: key }),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Invalid key')
      onLogin(key)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid access key')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#F0F4FA] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 w-full max-w-sm">
        <div className="text-center mb-8">
          <Link href="/">
            <Image src={LOGO} alt="PhotoYum" width={140} height={36} className="mx-auto mb-4 h-9 w-auto object-contain hover:opacity-75 transition-opacity" />
          </Link>
          <h1 className="text-xl font-bold text-[#111827]">Admin Access</h1>
          <p className="text-sm text-gray-500 mt-1">Enter your access key to continue</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="Access key"
            autoFocus
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1476ff]/30 focus:border-[#1476ff] transition"
          />
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={loading || !key}
            className="w-full bg-[#1476ff] hover:bg-[#1060d4] disabled:opacity-50 text-white font-bold py-3 rounded-xl transition flex items-center justify-center gap-2"
          >
            {loading ? (
              <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
            ) : null}
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

/* ─── Lead Row / Card ─── */
function LeadCard({
  lead,
  adminKey,
  onUpdate,
}: {
  lead: Lead
  adminKey: string
  onUpdate: (id: string, updates: Partial<Lead>) => void
}) {
  const [expanded, setExpanded] = useState(false)
  const [notes, setNotes] = useState(lead.admin_notes || '')
  const [savingNotes, setSavingNotes] = useState(false)
  const [copied, setCopied] = useState(false)

  const patch = useCallback(
    async (updates: Record<string, unknown>) => {
      const res = await fetch('/api/admin/leads/update', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'x-admin-key': adminKey },
        body: JSON.stringify({ id: lead.id, ...updates }),
      })
      if (!res.ok) throw new Error('Update failed')
    },
    [lead.id, adminKey]
  )

  const handleStatusChange = async (newStatus: Status) => {
    try {
      await patch({ status: newStatus })
      onUpdate(lead.id, { status: newStatus })
    } catch {
      alert('Failed to update status')
    }
  }

  const handleSaveNotes = async () => {
    setSavingNotes(true)
    try {
      await patch({ admin_notes: notes })
      onUpdate(lead.id, { admin_notes: notes })
    } catch {
      alert('Failed to save notes')
    } finally {
      setSavingNotes(false)
    }
  }

  const handleFollowUp = async () => {
    try {
      const now = new Date().toISOString()
      await patch({ mark_followed_up: true })
      onUpdate(lead.id, { last_followed_up_at: now })
    } catch {
      alert('Failed to mark follow-up')
    }
  }

  const copyEmail = () => {
    navigator.clipboard.writeText(lead.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Header row */}
      <div
        className="px-5 py-4 flex flex-wrap items-center gap-3 cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        {/* Avatar */}
        <div className="w-9 h-9 rounded-full bg-[#1476ff]/10 text-[#1476ff] flex items-center justify-center font-bold text-sm flex-shrink-0">
          {lead.name?.[0]?.toUpperCase() || '?'}
        </div>

        {/* Name + email */}
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-sm text-[#111827] truncate">{lead.name}</div>
          <div className="text-xs text-gray-500 truncate">{lead.email}</div>
        </div>

        {/* Brand */}
        {lead.brand_name && (
          <div className="hidden sm:block text-xs text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full truncate max-w-[120px]">
            {lead.brand_name}
          </div>
        )}

        {/* Package */}
        {lead.package_interest && (
          <div className="hidden md:block text-xs text-[#1476ff] bg-[#1476ff]/10 px-2.5 py-1 rounded-full truncate max-w-[160px]">
            {lead.package_interest}
          </div>
        )}

        {/* Source badge */}
        <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide flex-shrink-0 ${lead.source === 'chat' ? 'bg-purple-100 text-purple-700' : 'bg-[#FF9900]/15 text-[#e68900]'}`}>
          {lead.source}
        </span>

        {/* Status */}
        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase flex-shrink-0 ${STATUS_COLORS[lead.status as Status] || STATUS_COLORS.new}`}>
          {lead.status}
        </span>

        {/* Date */}
        <div className="hidden lg:block text-xs text-gray-400 flex-shrink-0">{formatDate(lead.created_at)}</div>

        {/* Chevron */}
        <svg className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Expanded detail */}
      {expanded && (
        <div className="border-t border-gray-100 px-5 py-5 space-y-5">
          {/* Info grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: 'Name', value: lead.name },
              { label: 'Email', value: lead.email },
              { label: 'Brand', value: lead.brand_name },
              { label: 'Product Count', value: lead.product_count },
              { label: 'Package Interest', value: lead.package_interest },
              { label: 'Coupon Code', value: lead.coupon_code || 'None' },
              { label: 'Discount', value: lead.coupon_code ? `${lead.coupon_discount}%` : null },
              { label: 'Source', value: lead.source },
              { label: 'Submitted', value: formatDate(lead.created_at) },
              { label: 'Last Followed Up', value: lead.last_followed_up_at ? formatDate(lead.last_followed_up_at) : '—' },
            ].map(({ label, value }) => value && (
              <div key={label}>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-0.5">{label}</div>
                <div className={`text-sm ${label === 'Coupon Code' && lead.coupon_code ? 'text-[#16A34A] font-bold' : 'text-[#111827]'}`}>{value}</div>
              </div>
            ))}
          </div>

          {/* URLs */}
          <div className="flex flex-wrap gap-2">
            {lead.product_listing_url && (
              <a href={lead.product_listing_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs bg-[#1476ff]/10 text-[#1476ff] hover:bg-[#1476ff]/20 px-3 py-1.5 rounded-lg font-medium transition-colors">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                Open Listing
              </a>
            )}
            {lead.product_photo_url && (
              <a href={lead.product_photo_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs bg-gray-100 text-gray-700 hover:bg-gray-200 px-3 py-1.5 rounded-lg font-medium transition-colors">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                View Photos
              </a>
            )}
            <button onClick={copyEmail} className="inline-flex items-center gap-1.5 text-xs bg-gray-100 text-gray-700 hover:bg-gray-200 px-3 py-1.5 rounded-lg font-medium transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
              {copied ? 'Copied!' : 'Copy Email'}
            </button>
            <button onClick={handleFollowUp} className="inline-flex items-center gap-1.5 text-xs bg-[#FF9900]/15 text-[#e68900] hover:bg-[#FF9900]/25 px-3 py-1.5 rounded-lg font-medium transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Mark Followed Up
            </button>
          </div>

          {/* Improvement notes */}
          {lead.improvement_notes && (
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-1">What They Want Improved</div>
              <p className="text-sm text-gray-700 bg-gray-50 rounded-xl px-4 py-3 leading-relaxed">{lead.improvement_notes}</p>
            </div>
          )}

          {/* Chat transcript */}
          {lead.chat_transcript && (
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-1">Chat Transcript</div>
              <pre className="text-xs text-gray-700 bg-gray-50 rounded-xl px-4 py-3 leading-relaxed whitespace-pre-wrap font-sans max-h-40 overflow-y-auto">{lead.chat_transcript}</pre>
            </div>
          )}

          {/* Status + Notes row */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-1.5">Update Status</div>
              <select
                value={lead.status}
                onChange={(e) => handleStatusChange(e.target.value as Status)}
                className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1476ff]/30 focus:border-[#1476ff] transition bg-white"
              >
                {STATUS_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-1.5">Admin Notes</div>
              <div className="flex gap-2">
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={2}
                  placeholder="Add notes..."
                  className="flex-1 px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1476ff]/30 focus:border-[#1476ff] transition resize-none"
                />
                <button
                  onClick={handleSaveNotes}
                  disabled={savingNotes}
                  className="bg-[#1476ff] hover:bg-[#1060d4] disabled:opacity-50 text-white text-xs font-bold px-3 rounded-xl transition self-end py-2"
                >
                  {savingNotes ? '...' : 'Save'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

/* ─── Main Admin Dashboard ─── */
function Dashboard({ adminKey, onLogout }: { adminKey: string; onLogout: () => void }) {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [filter, setFilter] = useState<'all' | Status>('all')

  const fetchLeads = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/admin/leads', { headers: { 'x-admin-key': adminKey } })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error)
      setLeads(json.leads || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load leads')
    } finally {
      setLoading(false)
    }
  }, [adminKey])

  useEffect(() => { fetchLeads() }, [fetchLeads])

  const handleUpdate = (id: string, updates: Partial<Lead>) => {
    setLeads((prev) => prev.map((l) => l.id === id ? { ...l, ...updates } : l))
  }

  const counts = {
    total: leads.length,
    new: leads.filter((l) => l.status === 'new').length,
    contacted: leads.filter((l) => l.status === 'contacted').length,
    interested: leads.filter((l) => l.status === 'interested').length,
    closed: leads.filter((l) => l.status === 'closed').length,
  }

  const filtered = filter === 'all' ? leads : leads.filter((l) => l.status === filter)

  return (
    <div className="min-h-screen bg-[#F0F4FA]">
      {/* Top nav */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src={LOGO} alt="PhotoYum" width={120} height={30} className="h-7 w-auto object-contain" />
            <span className="text-xs font-bold bg-[#1476ff]/10 text-[#1476ff] px-2 py-0.5 rounded-full uppercase tracking-wider">Admin</span>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={fetchLeads} className="text-xs text-gray-500 hover:text-gray-700 transition flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              Refresh
            </button>
            <button onClick={onLogout} className="text-xs text-gray-500 hover:text-red-600 transition">Logout</button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Total Leads', value: counts.total, color: 'text-[#111827]' },
            { label: 'New', value: counts.new, color: 'text-[#1476ff]' },
            { label: 'Contacted', value: counts.contacted, color: 'text-yellow-600' },
            { label: 'Closed', value: counts.closed, color: 'text-emerald-600' },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
              <div className={`text-3xl font-extrabold ${s.color}`}>{s.value}</div>
              <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2">
          {(['all', ...STATUS_OPTIONS] as const).map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-full capitalize transition ${filter === s ? 'bg-[#1476ff] text-white' : 'bg-white border border-gray-200 text-gray-600 hover:border-[#1476ff] hover:text-[#1476ff]'}`}
            >
              {s === 'all' ? `All (${counts.total})` : s}
            </button>
          ))}
        </div>

        {/* Leads */}
        {loading ? (
          <div className="flex items-center justify-center py-20 text-gray-400">
            <svg className="animate-spin w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
            Loading leads...
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 rounded-xl px-5 py-4 text-sm text-red-700">{error}</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400 text-sm">No leads found.</div>
        ) : (
          <div className="space-y-3">
            {filtered.map((lead) => (
              <LeadCard key={lead.id} lead={lead} adminKey={adminKey} onUpdate={handleUpdate} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

/* ─── Page ─── */
export default function AdminPage() {
  const [adminKey, setAdminKey] = useState<string | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('photoyum_admin_key')
    if (stored) setAdminKey(stored)
  }, [])

  const handleLogin = (key: string) => {
    localStorage.setItem('photoyum_admin_key', key)
    setAdminKey(key)
  }

  const handleLogout = () => {
    localStorage.removeItem('photoyum_admin_key')
    setAdminKey(null)
  }

  if (!adminKey) return <LoginScreen onLogin={handleLogin} />
  return <Dashboard adminKey={adminKey} onLogout={handleLogout} />
}
