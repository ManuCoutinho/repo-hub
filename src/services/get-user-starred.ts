'use server'
import { AxiosError } from 'axios'
import { clientInstance, ApiException } from '@/lib'
import type { Repository } from '@/types'

export default async function getUserStarred(): Promise<
  Repository[] | undefined
> {
  try {
    const res = await clientInstance.get(`/user/starred`)

    return res.data
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new ApiException(error.message, error.status as number)
    }
  }
}
