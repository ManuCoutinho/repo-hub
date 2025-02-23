import { isValid } from '@/utils/validate-string'

describe('isValid function', () => {
  it('return false for a null value', () => {
    const test = isValid(null)
    expect(test).toBeFalsy()
  })
  it('should return true for a valid string', () => {
    const test = isValid('string')
    expect(test).toBeTruthy()
  })
  it('should return false for a empty string', () => {
    const test = isValid('  ')
    expect(test).toBeFalsy()
  })
})
