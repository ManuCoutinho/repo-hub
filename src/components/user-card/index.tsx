import type { User } from '@/types'
import Image from 'next/image'

export function UserCard({ user }: { user: Readonly<User> }) {
  return (
    <div className='w-full h-fit col-span-3 flex flex-col gap-6 p-10 justify-center items-center border border-brand-border-line rounded mx-auto'>
      <div className='size-[200px] rounded-full border border-brand-border-line overflow-hidden'>
        <Image
          src={user.avatar_url}
          alt={`github avatar de ${user.name}`}
          width={200}
          height={200}
          loading='lazy'
        />
      </div>
      <div className='text-center mx-auto'>
        <h3 className='heading-1'>{user.name}</h3>
        <small className='text-sm text-brand-grey-dark'>@{user.login}</small>
        <p className='text-sm text-brand-grey-dark'>{user.bio}</p>
      </div>
    </div>
  )
}
