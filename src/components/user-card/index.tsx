import type { User } from '@/types'
import { cm } from '@/ui'
import Image from 'next/image'

export function UserCard({ user }: { user: Readonly<User> }) {
  return (
    <div
      className={cm(
        'border border-brand-border-line rounded p-4  space-y-2 h-fit w-full',
        'md:col-span-3 md:space-y-0 md:p-10'
      )}
    >
      <div
        className={cm(
          'flex flex-row gap-2 md:mx-auto',
          ' md:flex-col md:gap-6 md:justify-center md:items-center'
        )}
      >
        <div className='size-12 md:size-[200px] rounded-full border border-brand-border-line overflow-hidden'>
          <Image
            src={user.avatar_url}
            alt={`github avatar de ${user.name}`}
            width={200}
            height={200}
            loading='lazy'
          />
        </div>
        <div className='md:text-center md:mx-auto md:mb-6'>
          <h3 className='font-semibold text-lg md:heading-1'>{user.name}</h3>
          <small className='text-sm text-brand-grey-dark'>@{user.login}</small>
        </div>
      </div>
      <div
        role='separator'
        className='w-full h-[1px] bg-brand-border-line md:invisible'
      />
      <p className='text-xs text-pretty md:text-sm md:text-center text-brand-grey-dark'>
        {user.bio}
      </p>
    </div>
  )
}
