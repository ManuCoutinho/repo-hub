import { isValid } from './validate-string'

export function normalizeString(value: string | null | undefined) {
  if (isValid(value)) {
    //remove all special char, except -
    return value!.replace(/[^a-zA-Z0-9-]/g, '')
  }
}
