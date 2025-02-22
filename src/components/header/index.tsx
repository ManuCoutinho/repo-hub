import { UserForm } from '../user-form'

import { FavoritesButton } from '../favorites-button'

export default function Header() {
  return (
    <header className='w-full border border-transparent border-b-brand-border-line flex justify-between items-center overflow-hidden invisible md:visible'>
      <UserForm />
      <div className=''>
        <FavoritesButton active={false} />
      </div>
    </header>
  )
}
