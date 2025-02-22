import { usePathname, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
import { useUserContext } from '@/hooks/useUserContext'
import { useCallback } from 'react'

export function useForm() {
  const { push } = useRouter()
  const pathname = usePathname()
  const { fetchData, value, setValue } = useUserContext()

  const debouncedValue = useDebouncedCallback(async (value) => {
    if (value) {
      pathname === '/favorites' && push('/', { scroll: true })
      fetchData()
    }
  }, 1000)

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
      debouncedValue(e.target.value)
    },
    [debouncedValue, setValue]
  )

  return { value, onChange, fetchUserData: fetchData }
}
