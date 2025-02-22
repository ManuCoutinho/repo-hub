import { ReposCard } from '@/components/repos-card'
import { UserCard } from '@/components/user-card'
import { UserForm } from '@/components/user-form'
import { useMediaMobile } from '@/hooks/useMediaMobile'
import { cm } from '@/ui'
import { UserData } from '@/types'

export function UserView(data: Readonly<UserData>) {
  const isMobile = useMediaMobile()
  return (
    <div
      className={cm(
        'size-full p-6 flex flex-col gap-4',
        'md:grid md:grid-cols-10 md:gap-12'
      )}
    >
      {isMobile ? <UserForm /> : null}
      <UserCard user={data.user} />
      <div className='w-full col-span-7'>
        <h1 className='heading-1 text-brand-primary mb-4'>Repositórios</h1>
        {data?.repos?.map((repo) => (
          <ReposCard key={repo.id} repo={repo} starred={repo.favorite} />
        ))}
      </div>
    </div>
  )
}
