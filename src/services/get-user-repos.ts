'use server'
import { AxiosError } from 'axios'
import { clientInstance, ApiException } from '@/lib'

export default async function getUserRepos(user: string) {
  if (!user) throw new ApiException('User is required', 400)
  try {
    const res = await clientInstance.get(`/users/${user}/repos`)

    return res
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new ApiException(error.message, error.status as number)
    }
  }
}
