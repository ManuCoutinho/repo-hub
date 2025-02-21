'use server'
import { AxiosError } from 'axios'
import { clientInstance, ApiException } from '@/lib'

export default async function getUser(user: string) {
  if (!user) throw new ApiException('User is required', 400)
  try {
    const res = await clientInstance.get(`/users/${user}`)

    return res
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new ApiException(error.message, error.status as number)
    }
  }
}
