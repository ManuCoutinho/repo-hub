export function isValid(value: string | null | undefined) {
  if (value == null) return false
  if (value.trim() === '') false
  return true
}
