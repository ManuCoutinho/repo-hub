'use client'
import { InputSearch } from '@/ui'
import { useForm } from './useForm'

export function UserForm() {
  const { value, onChange } = useForm()

  return (
    <form className='md:px-6 py-6 md:py-5 w-full max-w-2xl'>
      <InputSearch
        id='search'
        placeholder='Buscar usuário'
        value={value}
        onChange={onChange}
      />
    </form>
  )
}
