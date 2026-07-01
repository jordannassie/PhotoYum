import { NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabaseAdmin'

function checkAdminKey(request: Request) {
  const key = request.headers.get('x-admin-key')
  return key === process.env.ADMIN_ACCESS_KEY
}

export async function PATCH(request: Request) {
  if (!checkAdminKey(request)) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })
  }
  try {
    const { id, status, admin_notes, mark_followed_up } = await request.json()
    if (!id) {
      return NextResponse.json({ error: 'Lead ID required.' }, { status: 400 })
    }

    const updates: Record<string, unknown> = {}
    if (status !== undefined) updates.status = status
    if (admin_notes !== undefined) updates.admin_notes = admin_notes
    if (mark_followed_up) updates.last_followed_up_at = new Date().toISOString()

    const supabase = getSupabaseAdmin()
    const { error } = await supabase
      .from('photoyum_leads')
      .update(updates)
      .eq('id', id)

    if (error) throw error
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[admin/leads/update]', err)
    return NextResponse.json({ error: 'Failed to update lead.' }, { status: 500 })
  }
}
