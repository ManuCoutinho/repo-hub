import { Icon } from '@/ui'
import { UserForm } from '../user-form'
import { useRouter } from 'next/navigation'

export default function Header() {
  const { push } = useRouter()
  return (
    <header className='w-full border border-transparent border-b-brand-border-line flex justify-between items-center overflow-hidden'>
      <UserForm />
      <div className=''>
        <button
          onClick={() => push('/favorites')}
          className='text-white bg-brand-primary focus:ring-brand-primary-light font-medium text-sm hover:bg-brand-primary-dark transition-colors focus-within:ring-brand-primary-light h-20 w-36 p-6 flex items-center gap-2 justify-center'
        >
          <Icon name='heart' />
          Favoritos
        </button>
      </div>
    </header>
  )
}
