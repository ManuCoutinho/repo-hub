export function parseSize(size: 'sm' | 'md' | 'lg' | 'xl') {
  const fromTo = {
    sm: 16,
    md: 24,
    lg: 32,
    xl: 40
  }
  return fromTo[size]
}
