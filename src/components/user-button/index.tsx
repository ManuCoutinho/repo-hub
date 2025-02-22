'use client'
import { useRouter } from 'next/navigation'
import { cm, Icon } from '@/ui'

export function UserButton({ active }: { active: boolean }) {
  const { push } = useRouter()

  return (
    <button
      aria-label='navigate to user page'
      onClick={() => push('/')}
      className={cm('w-full flex items-center justify-center', {
        'bg-brand-primary text-white': active,
        'bg-white text-brand-grey-neutral': !active
      })}
    >
      <Icon name='user' />
    </button>
  )
}
