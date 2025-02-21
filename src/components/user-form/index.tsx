'use client'
import { useDebouncedCallback } from 'use-debounce'
import { InputSearch } from '@/ui'
import { useUserContext } from '@/hooks/useUserContext'
import { getUserData } from './get-data.service'

export function UserForm() {
  const { setData, value, setValue, setError } = useUserContext()
  const debouncedValue = useDebouncedCallback(async (value) => {
    if (value) {
      try {
        setError(false)
        const data = await getUserData(value)
        console.log('🦩', data)
        if (data) {
          setData(data)
        } else {
          setError(true)
        }
      } catch (error) {
        setError(!!error)
      }
    }
  }, 1000)

  return (
    <form className='px-6 py-5 w-full max-w-2xl'>
      <InputSearch
        id='search'
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          debouncedValue(e.target.value)
        }}
      />
    </form>
  )
}
