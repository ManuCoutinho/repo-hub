import { getUser, getUserRepos } from '@/services'
import { AxiosError } from 'axios'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ user: string }> }
) {
  if (req.method !== 'GET') {
    return new NextResponse(JSON.stringify({ data: 'method not allowed' }), {
      status: 405
    })
  }
  const user = (await params).user

  if (!user) {
    return new NextResponse(JSON.stringify({ data: '[user] is required' }), {
      status: 400
    })
  }
  try {
    const userRes = await getUser(user)
    const reposRes = await getUserRepos(user)

    const response = {
      user: userRes?.data,
      repos: reposRes?.data
    }
    return new NextResponse(JSON.stringify(response), { status: 200 })
  } catch (error) {
    if (error instanceof AxiosError) {
      return new NextResponse(error.message, { status: error.status })
    }
  }
}
