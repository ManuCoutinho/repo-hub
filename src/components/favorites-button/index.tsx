'use client'
import { useRouter } from 'next/navigation'
import { cm, Icon } from '@/ui'
import { useMediaMobile } from '@/hooks/useMediaMobile'

export function FavoritesButton({ active }: { active: boolean }) {
  const isMobile = useMediaMobile()
  const { push } = useRouter()
  if (!isMobile) {
    return (
      <button
        aria-label='navigate to favorites'
        onClick={() => push('/favorites')}
        className='text-white bg-brand-primary focus:ring-brand-primary-light font-medium text-sm hover:bg-brand-primary-dark transition-colors focus-within:ring-brand-primary-light h-20 w-36 p-6 flex items-center gap-2 justify-center'
      >
        <Icon name='heart' />
        Favoritos
      </button>
    )
  }

  return (
    <button
      aria-label='navigate to favorites'
      onClick={() => push('/favorites')}
      className={cm('w-full flex items-center justify-center', {
        'bg-brand-primary text-white': active,
        'bg-white text-brand-grey-neutral': !active
      })}
    >
      <Icon name='heartSolid' />
    </button>
  )
}
