import { ReposCard } from '@/components/repos-card'
import { UserCard } from '@/components/user-card'
import { UserData } from '@/types'

export function UserView(data: Readonly<UserData>) {
  return (
    <div className='size-full p-6 grid grid-cols-12 gap-12 '>
      <UserCard user={data.user} />

      <div className='w-full col-span-7'>
        <h1 className='heading-1 text-brand-primary mb-4'>Repositórios</h1>
        {data?.repos?.map((repo) => <ReposCard key={repo.id} repo={repo} />)}
      </div>
    </div>
  )
}
