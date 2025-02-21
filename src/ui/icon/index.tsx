import * as IconList from '@/assets/icons'
import { parseSize } from './parse-size'
import { cm } from '../utils/class-merge'
import type { IconType } from './types'

export function Icon({ name, size = 'md', className, ...rest }: IconType) {
  const IconSelected = IconList[name]

  return (
    <i {...rest} className={cm('z-0 block', className)}>
      <IconSelected size={parseSize(size)} />
    </i>
  )
}

export type Icons = keyof typeof IconList
