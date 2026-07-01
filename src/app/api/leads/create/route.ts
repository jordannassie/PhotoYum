import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

function getInsertClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url) {
    throw new Error('NEXT_PUBLIC_SUPABASE_URL is not set')
  }

  const key = serviceKey || anonKey
  if (!key) {
    throw new Error('No Supabase key available. Set SUPABASE_SERVICE_ROLE_KEY or NEXT_PUBLIC_SUPABASE_ANON_KEY.')
  }

  console.log(`[leads/create] Using ${serviceKey ? 'service role' : 'anon'} key`)
  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log('[leads/create] Received payload:', JSON.stringify({
      ...body,
      email: body.email ? body.email.substring(0, 4) + '***' : undefined,
    }))

    const {
      source,
      name,
      email,
      phone,
      brand_name,
      product_listing_url,
      product_photo_url,
      product_count,
      package_interest,
      improvement_notes,
      chat_transcript,
    } = body

    if (!name?.trim()) {
      return NextResponse.json({ error: 'Name is required.' }, { status: 400 })
    }
    if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'A valid email is required.' }, { status: 400 })
    }

    const supabase = getInsertClient()

    const record = {
      source: source || 'form',
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || null,
      brand_name: brand_name?.trim() || null,
      product_listing_url: product_listing_url?.trim() || null,
      product_photo_url: product_photo_url?.trim() || null,
      product_count: product_count || null,
      package_interest: package_interest || null,
      improvement_notes: improvement_notes?.trim() || null,
      chat_transcript: chat_transcript || null,
      status: 'new',
    }

    console.log('[leads/create] Inserting record with columns:', Object.keys(record).join(', '))

    const { data, error } = await supabase
      .from('photoyum_leads')
      .insert([record])
      .select()

    if (error) {
      console.error('[leads/create] Supabase insert error:', {
        message: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint,
      })
      return NextResponse.json(
        {
          error: 'Database insert failed.',
          supabase_error: error.message,
          supabase_code: error.code,
          hint: error.hint || null,
        },
        { status: 500 }
      )
    }

    console.log('[leads/create] Insert successful, id:', data?.[0]?.id)
    return NextResponse.json({ success: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('[leads/create] Unexpected error:', message)
    return NextResponse.json(
      { error: 'Unexpected server error.', details: message },
      { status: 500 }
    )
  }
}
