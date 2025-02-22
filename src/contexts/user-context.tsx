import { createContext, useEffect, useState } from 'react'
import type { UserContextType, UserData } from '@/types'

const INITIAL_STATE = {
  setData: () => null,
  data: null,
  clear: () => null,
  error: false,
  value: '',
  setValue: () => '',
  setError: () => false
} satisfies UserContextType

export const UserContext = createContext<UserContextType>(INITIAL_STATE)
export function UserContextProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [userData, setUserData] = useState<UserData | null>(null)
  const [searchError, setSearchError] = useState(false)
  const [value, setValue] = useState('')
  function clear() {
    setUserData(null)
  }

  function setData(data: UserData) {
    if (data) {
      setUserData(data)
    }
    return
  }
  useEffect(() => {
    if (value === '') {
      clear()
    }
  }, [value])

  return (
    <UserContext.Provider
      value={{
        setData,
        clear,
        data: userData,
        value,
        setValue,
        setError: setSearchError,
        error: searchError
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
