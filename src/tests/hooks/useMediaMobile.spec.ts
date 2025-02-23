import { act } from 'react'
import { fireEvent, renderHook } from '@testing-library/react'
import { useMediaMobile } from '@/hooks/useMediaMobile'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const customGlobal = global as any
describe('useMediaMobileHook', () => {
  it('should return true for screens with less than 640px', () => {
    customGlobal.innerWidth = 540
    const { result } = renderHook(() => useMediaMobile())
    expect(result.current).toBeTruthy()
  })

  it('should return false for screens with greater than 640px', () => {
    customGlobal.innerWidth = 768
    const { result } = renderHook(() => useMediaMobile())
    expect(result.current).toBeFalsy()
  })

  it('should start by returning true and then change to false after resize event', () => {
    customGlobal.innerWidth = 540
    const { result } = renderHook(() => useMediaMobile())
    expect(result.current).toBeTruthy()

    act(() => {
      customGlobal.innerWidth = 1040

      fireEvent.resize(customGlobal, new Event('resize'))
    })

    expect(result.current).toBeFalsy()
  })
  it('should start by returning false and then change to true after resize event', () => {
    customGlobal.innerWidth = 1240
    const { result } = renderHook(() => useMediaMobile())

    expect(result.current).toBeFalsy()

    act(() => {
      customGlobal.innerWidth = 620

      fireEvent.resize(customGlobal, new Event('resize'))
    })
    expect(result.current).toBeTruthy()
  })
})
