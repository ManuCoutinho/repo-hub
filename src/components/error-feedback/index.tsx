import Image from 'next/image'
import notFoundImg from '@/assets/states/not-found.png'

export function ErrorFeedback({ term }: { term: string }) {
  return (
    <div className='text-center pt-44'>
      {term ? (
        <p className=' text-brand-primary heading-1'>&quot;{term}&quot;</p>
      ) : null}
      <h1 className='text-brand-grey-neutral heading-1'>
        Nenhum usuário encontrado
      </h1>
      <p className='text-brand-grey-neutral text-base'>
        Verifique se a escrita está correta ou tente novamente
      </p>
      <div className='size-full mt-12'>
        <Image
          src={notFoundImg}
          alt='ilustração contendo bonequinhos sendo sugados para um disco voador com detalhes verde claro'
          width={399}
          height={438}
          loading='lazy'
          className='mx-auto'
        />
      </div>
    </div>
  )
}
