'use server'
import { AxiosError } from 'axios'
import { clientInstance, ApiException } from '@/lib'
import { revalidateTag } from 'next/cache'

export default async function putRepoStar(repo: string): Promise<void> {
  if (!repo) throw new ApiException('Missing required param [user][repo]', 400)
  try {
    await clientInstance.put(`/user/starred/${repo}`)
    revalidateTag('update-star')
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new ApiException(error.message, error.status as number)
    }
  }
}
