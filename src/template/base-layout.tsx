'use client'

import Header from '@/components/header'
import { MobileNav } from '@/components/mobile-nav'
import { UserContextProvider } from '@/contexts/user-context'
import { useMediaMobile } from '@/hooks/useMediaMobile'

export default function BaseLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const isMobile = useMediaMobile()
  if (!isMobile) {
    return (
      <UserContextProvider>
        <div className='size-full'>
          <Header />
          {children}
        </div>
      </UserContextProvider>
    )
  }
  return (
    <UserContextProvider>
      <div className='size-full pb-14'>
        {children}
        <MobileNav />
      </div>
    </UserContextProvider>
  )
}
