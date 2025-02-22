import { useCallback } from 'react'
import { useUserContext } from './useUserContext'
import { putRepoStar, deleteRepoStar } from '@/services'

export function useStarRepo(repo: string, starred: boolean) {
  const { fetchData } = useUserContext()
  const toggleStarRepo = useCallback(async () => {
    try {
      if (starred) {
        await deleteRepoStar(repo)
      }
      if (!starred) {
        await putRepoStar(repo)
      }
      fetchData()
    } catch (error) {
      //show some feedback to user
      // like a toast
      console.error(error)
    }
  }, [starred, repo, fetchData])

  return { toggleStarRepo }
}
