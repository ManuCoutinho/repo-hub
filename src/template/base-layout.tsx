'use client'

import Header from '@/components/header'
import { UserContextProvider } from '@/contexts/user-context'

export default function BaseLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <UserContextProvider>
      <div className='size-full'>
        <Header />
        {children}
      </div>
    </UserContextProvider>
  )
}
