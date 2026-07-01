import { NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabaseAdmin'

function checkAdminKey(request: Request) {
  const key = request.headers.get('x-admin-key')
  return key === process.env.ADMIN_ACCESS_KEY
}

export async function GET(request: Request) {
  if (!checkAdminKey(request)) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })
  }
  try {
    const supabase = getSupabaseAdmin()
    const { data, error } = await supabase
      .from('photoyum_leads')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return NextResponse.json({ leads: data })
  } catch (err) {
    console.error('[admin/leads]', err)
    return NextResponse.json({ error: 'Failed to fetch leads.' }, { status: 500 })
  }
}
