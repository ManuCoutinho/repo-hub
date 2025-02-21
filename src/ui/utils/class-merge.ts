import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cm(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
