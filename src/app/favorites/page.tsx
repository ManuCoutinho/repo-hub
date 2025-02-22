import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { ReposCard } from '@/components/repos-card'
import { getUserStarred } from '@/services'

export default async function FavoritesPage() {
  const data = await getUserStarred()

  if (data) {
    return (
      <Suspense fallback={<p>...loading</p>}>
        <section className='w-full max-w-4xl mx-auto space-y-6 md:mt-6 px-5 py-6 md:p-0'>
          <h1 className='heading-1 md:text-brand-primary md:text-center'>
            Meus favoritos
          </h1>
          <div className='w-full flex flex-col gap-4'>
            {data?.map((repo) => (
              <ReposCard key={repo.id} repo={repo} starred />
            ))}
          </div>
        </section>
      </Suspense>
    )
  }
  return notFound()
}
