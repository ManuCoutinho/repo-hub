'use client'
import { useUserContext } from '@/hooks/useUserContext'
import { SearchView } from '@/views/Search'
import { UserView } from '@/views/User'

export default function Home() {
  const { data, error } = useUserContext()
  if (data && !error) {
    return <UserView {...data} />
  }
  return (
    <main className='w-full grid place-content-center'>
      <SearchView />
    </main>
  )
}
