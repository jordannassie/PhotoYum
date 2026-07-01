import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { accessKey } = await request.json()
    const validKey = process.env.ADMIN_ACCESS_KEY
    if (!validKey) {
      return NextResponse.json({ error: 'Admin access not configured.' }, { status: 500 })
    }
    if (accessKey !== validKey) {
      return NextResponse.json({ error: 'Invalid access key.' }, { status: 401 })
    }
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Bad request.' }, { status: 400 })
  }
}
