import { NextRequest, NextResponse } from 'next/server'
import { AxiosError } from 'axios'
import { getUser, getUserRepos, getUserStarred } from '@/services'
import type { Repository } from '@/types'

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
    const favs = await getUserStarred()
    if (reposRes?.data && favs) {
      const repos = reposRes?.data?.map((repo: Repository) => {
        return {
          ...repo,
          favorite: favs.some((fav) => fav.id === repo.id)
        }
      })
      const response = {
        user: userRes?.data,
        repos
      }
      return new NextResponse(JSON.stringify(response), { status: 200 })
    }
    return new NextResponse(JSON.stringify({ data: 'data not found' }), {
      status: 404
    })
  } catch (error) {
    if (error instanceof AxiosError) {
      return new NextResponse(error.message, { status: error.status })
    }
  }
}
