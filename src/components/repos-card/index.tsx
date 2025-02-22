'use client'
import { useTransition } from 'react'
import dayjs from 'dayjs'
import { cm, Icon } from '@/ui'
import { mapLangColor } from './map-color'
import { RepoCardProps } from './type'
import { useStarRepo } from '@/hooks/useStarRepo'

export function ReposCard({ repo, starred }: Readonly<RepoCardProps>) {
  const [isPending, onAction] = useTransition()
  const { toggleStarRepo } = useStarRepo(repo.full_name, starred)
  const color = mapLangColor(repo.language)
  const updatedAt = dayjs(repo.updated_at ?? repo.created_at).format(
    'DD MMM YYYY'
  )

  const icon = () => {
    if (isPending) return 'loading'
    return starred ? 'heartSolid' : 'heart'
  }
  return (
    <div
      className={cm('w-full p-4 border border-brand-border-line rounded mb-4')}
    >
      <div className='w-full flex items-center justify-between'>
        <p className='font-semibold text-brand-grey-neutral text-lg mb-[6px]'>
          {repo.name}
        </p>
        <button
          onClick={() => onAction(() => toggleStarRepo())}
          disabled={isPending}
          aria-busy={isPending}
          aria-label='toggle star repo'
          className={cm(
            'size-10 rounded-full ',
            'focus:ring focus:ring-brand-primary-light transition-all hover:brightness-90 disabled:pointer-events-none',
            'grid place-content-center',
            {
              'text-brand-primary border border-brand-primary bg-transparent':
                starred,
              'text-brand-placeholder, bg-brand-white-matte': !starred,
              'animate-spin': isPending
            }
          )}
        >
          <Icon name={icon()} size='sm' />
        </button>
      </div>
      <p className='text-sm text-brand-placeholder'>{repo.description}</p>
      <div className='inline-flex gap-6 items-center text-xs mt-4'>
        {repo.language ? (
          <div className='inline-flex gap-2 items-center'>
            <span
              id='lang-dot'
              style={{ backgroundColor: color ? color : 'inherit' }}
              className={cm('size-4 rounded-full')}
            />
            <span>{repo.language}</span>
          </div>
        ) : null}
        <span>
          Updated on{' '}
          <time dateTime={repo.updated_at.toString()}>{updatedAt}</time>
        </span>
      </div>
    </div>
  )
}
