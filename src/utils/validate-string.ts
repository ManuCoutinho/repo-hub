export function isValid(value: string | null | undefined) {
  if (value == null) return false
  if (value.trim() === '') return false
  return true
}
