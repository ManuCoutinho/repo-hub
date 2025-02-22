import { ForwardedRef, forwardRef } from 'react'
import { cm, Icon } from '@/ui'
import type { InputProps } from './types'
import { useMediaMobile } from '@/hooks/useMediaMobile'

const InputSearch = forwardRef(
  (
    { id, className, error, ...rest }: InputProps,
    ref?: ForwardedRef<HTMLInputElement>
  ) => {
    const isMobile = useMediaMobile()
    return (
      <div>
        <label htmlFor={id} className='sr-only'>
          Buscar
        </label>
        <div className={cm('relative ')}>
          <input
            type='text'
            inputMode='text'
            className={cm(
              'appearance-none block w-full px-4 rounded border border-brand-border-line bg-white py-2 placeholder:bg-white ',
              'placeholder:text-brand-placeholder placeholder:text-sm text-sm',
              'focus:outline-transparent focus:ring focus:ring-brand-primary-light',
              className
            )}
            aria-errormessage=''
            aria-invalid={!!error}
            id={id}
            ref={ref}
            {...rest}
          />
          <span className='flex items-center absolute inset-y-0 end-4'>
            <Icon
              name='search'
              size={isMobile ? 'sm' : 'md'}
              className='text-brand-placeholder'
            />
          </span>
        </div>
      </div>
    )
  }
)

InputSearch.displayName = 'InputSearch'
export default InputSearch
