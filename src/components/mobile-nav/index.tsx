import { usePathname } from 'next/navigation'
import { cm } from '@/ui'
import { FavoritesButton } from '../favorites-button'
import { UserButton } from '../user-button'

export function MobileNav() {
  const pathname = usePathname()
  return (
    <footer
      className={cm(
        'w-full h-[69px] flex p-0 gap-0 fixed bottom-0 left-0 shadow-2xl bg-white '
      )}
    >
      <UserButton active={pathname === '/'} />
      <FavoritesButton active={pathname === '/favorites'} />
    </footer>
  )
}
