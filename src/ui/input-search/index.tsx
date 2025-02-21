import { ForwardedRef, forwardRef } from 'react'
import { cm, Icon } from '@/ui'
import type { InputProps } from './types'

const InputSearch = forwardRef(
  (
    { id, className, error, ...rest }: InputProps,
    ref?: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div
        className={cm(
          'px-4 inline-flex rounded border border-brand-border-line focus:ring-brand-border-line peer bg-white w-full py-2'
        )}
      >
        <label htmlFor={id} className='sr-only'>
          Buscar usuário
        </label>
        <input
          type='text'
          placeholder='Buscar usuário'
          inputMode='text'
          className={cm(
            'w-full outline-none border-none placeholder:text-brand-placeholder placeholder:text-sm text-sm bg-white placeholder:bg-inherit',
            className
          )}
          aria-errormessage=''
          aria-invalid={!!error}
          id={id}
          ref={ref}
          {...rest}
        />
        <Icon name='search' className='text-brand-placeholder' />
      </div>
    )
  }
)

InputSearch.displayName = 'InputSearch'
export default InputSearch
