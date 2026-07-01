import { NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabaseAdmin'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      source,
      name,
      email,
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

    const supabase = getSupabaseAdmin()
    const { error } = await supabase.from('photoyum_leads').insert([
      {
        source: source || 'form',
        name: name.trim(),
        email: email.trim().toLowerCase(),
        brand_name: brand_name?.trim() || null,
        product_listing_url: product_listing_url?.trim() || null,
        product_photo_url: product_photo_url?.trim() || null,
        product_count: product_count || null,
        package_interest: package_interest || null,
        improvement_notes: improvement_notes?.trim() || null,
        chat_transcript: chat_transcript || null,
        status: 'new',
      },
    ])

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[leads/create]', err)
    return NextResponse.json({ error: 'Failed to save lead.' }, { status: 500 })
  }
}
