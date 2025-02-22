import Image from 'next/image'
import searchImg from '@/assets/states/search.png'
import { useMediaMobile } from '@/hooks/useMediaMobile'
import { UserForm } from '../user-form'

export function Search() {
  const isMobile = useMediaMobile()
  return (
    <div className='main-container'>
      <h1 className='text-brand-grey-neutral heading-1 mb-2 md:mb-0'>
        Procure pelo Nome ou Nome de Usuário
      </h1>
      <p className='text-brand-grey-neutral text-base'>
        Encontre os repositórios de algum usuário digitando no campo acima
      </p>
      <div className='size-full md:mt-12 '>
        {isMobile ? (
          <UserForm />
        ) : (
          <Image
            src={searchImg}
            alt='ilustração contendo uma mulher segurando uma lupa em busca de pessoas'
            width={230}
            height={257}
              className='mx-auto invisible md:visible'
              loading='lazy'
            />
        )}
      </div>
    </div>
  )
}
