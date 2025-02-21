import { isValid } from './validate-string'

export function normalizeString(value: string | null | undefined) {
  if (isValid(value)) {
    return value!.replace(/[^\w-][^a-zA-Z0-9]/g, '')
  }
}
