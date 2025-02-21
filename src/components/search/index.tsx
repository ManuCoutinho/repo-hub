import Image from 'next/image'
import searchImg from '@/assets/states/search.png'
export function Search(): JSX.Element {
  return (
    <div className='text-center pt-44'>
      <h1 className='text-brand-grey-neutral heading-1'>
        Procure pelo Nome ou Nome de Usuário
      </h1>
      <p className='text-brand-grey-neutral text-base'>
        Encontre os repositórios de algum usuário digitando no campo acima
      </p>
      <div className='size-full mt-12'>
        <Image
          src={searchImg}
          alt='ilustração contendo uma mulher segurando uma lupa em busca de pessoas'
          width={230}
          height={257}
          loading='lazy'
          className='mx-auto'
        />
      </div>
    </div>
  )
}
