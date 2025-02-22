import { usePathname, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
import { useUserContext } from '@/hooks/useUserContext'
import { getUserData } from './get-data.service'
import { useCallback } from 'react'

export function useForm() {
  const { push } = useRouter()
  const pathname = usePathname()
  const { setData, value, setValue, setError, clear } = useUserContext()
  const debouncedValue = useDebouncedCallback(async (value) => {
    if (value) {
      console.log('🦩', value)
      pathname === '/favorites' && push('/', { scroll: true })
      try {
        setError(false)
        const data = await getUserData(value)
        if (data) {
          setData(data)
        } else {
          setError(true)
        }
      } catch (error) {
        clear()
        setError(!!error)
      }
    }
  }, 1000)

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
      debouncedValue(e.target.value)
    },
    [debouncedValue, setValue]
  )

  return { value, onChange }
}
