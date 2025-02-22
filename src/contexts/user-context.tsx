import { createContext, useCallback, useEffect, useState } from 'react'
import type { UserContextType, UserData } from '@/types'
import { getUserData } from '@/services'

const INITIAL_STATE = {
  data: null,
  error: false,
  value: '',
  setValue: () => ''
}

export const UserContext = createContext<UserContextType>(
  INITIAL_STATE as unknown as UserContextType
)
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

  const fetchUserData = useCallback(async () => {
    try {
      setSearchError(false)
      const data = await getUserData(value)
      if (data) {
        setData(data)
      } else {
        setSearchError(true)
      }
    } catch (error) {
      clear()
      setSearchError(!!error)
    }
  }, [value])

  return (
    <UserContext.Provider
      value={{
        fetchData: fetchUserData,
        data: userData,
        value,
        setValue,
        error: searchError
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
