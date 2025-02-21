import * as IconList from '@/assets/icons'

export interface IconType
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  name: keyof typeof IconList
  size?: 'sm' | 'md' | 'lg' | 'xl'
}
