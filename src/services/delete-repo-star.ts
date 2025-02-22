'use server'
import { revalidateTag } from 'next/cache'
import { AxiosError } from 'axios'
import { clientInstance, ApiException } from '@/lib'

export default async function deleteRepoStar(repo: string): Promise<void> {
  if (!repo) throw new ApiException('Missing required param [user][repo]', 400)
  try {
    await clientInstance.delete(`/user/starred/${repo}`)
    revalidateTag('update-star')
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new ApiException(error.message, error.status as number)
    }
  }
}
