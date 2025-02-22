'use server'
import { AxiosError } from 'axios'
import { ApiException } from '@/lib'
import type { Repository } from '@/types'

const token = process.env.GH_SECRET

export default async function getUserStarred(): Promise<
  Repository[] | undefined
> {
  try {
    const res = await fetch(`${process.env.API_URL}/user/starred`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28'
      },
      next: {
        tags: ['update-star']
      }
    })
    const data = res.json()
    return data
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new ApiException(error.message, error.status as number)
    }
  }
}
