import { normalizeString } from '@/utils/normalize-string'

describe('Normalize string function', () => {
  it('should remove all special characters from a string', () => {
    const test = normalizeString('jane@doe*')
    expect(test).toBe('janedoe')
  })

  it('should remove all special characters from a string', () => {
    const test = normalizeString('john12+')
    expect(test).toBe('john12')
  })
})
