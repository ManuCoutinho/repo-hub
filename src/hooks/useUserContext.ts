import { useContext } from 'react'
import { UserContext } from '@/contexts/user-context'

export function useUserContext() {
  const context = useContext(UserContext)
  if (!context)
    throw new Error(
      'User Context needs to be involved in the respective provider'
    )
  return context
}
