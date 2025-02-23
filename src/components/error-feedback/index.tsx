import Image from 'next/image'
import notFoundImg from '@/assets/states/not-found.png'
import { useMediaMobile } from '@/hooks/useMediaMobile'
import { UserForm } from '../user-form'

export function ErrorFeedback({ term }: { term: string }) {
  const isMobile = useMediaMobile()
  return (
    <div className='main-container text-center'>
      {isMobile ? <UserForm /> : null}
      {term ? (
        <p
          data-testid='searched-name'
          className='text-brand-primary heading-1 mt-6 md:mt-0'
        >
          &quot;{term}&quot;
        </p>
      ) : null}
      <h1 className='text-brand-grey-neutral text-base md:text-[21px] md:leading-8 font-semibold'>
        Nenhum usuário encontrado
      </h1>
      <p className='text-brand-grey-neutral text-sm md:text-base mt-2 md:mt-0'>
        Verifique se a escrita está correta ou tente novamente
      </p>
      <div className='size-full mt-12'>
        <Image
          src={notFoundImg}
          alt='ilustração contendo bonequinhos sendo sugados para um disco voador com detalhes verde claro'
          width={399}
          height={438}
          loading='lazy'
          hidden={isMobile}
          aria-hidden={isMobile}
          className='mx-auto invisible md:visible'
        />
      </div>
    </div>
  )
}
