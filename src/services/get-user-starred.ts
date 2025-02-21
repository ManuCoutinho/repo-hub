'use server'
import { AxiosError } from 'axios'
import { clientInstance, ApiException } from '@/lib'

export default async function getUserStarred() {
  try {
    const res = await clientInstance.get(`/users/starred`)

    return res
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new ApiException(error.message, error.status as number)
    }
  }
}
