'use client'
import { useEffect, useState } from 'react'

export function useMediaMobile() {
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  function resizeListener() {
    if (window.innerWidth <= 780) {
      setIsTouchDevice(true)
    } else {
      setIsTouchDevice(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', resizeListener)

    return () => window.removeEventListener('resize', resizeListener)
  }, [])

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true)
    }
  }, [])

  useEffect(() => {
    const regex =
      /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
    if (regex.test(navigator.userAgent)) {
      setIsTouchDevice(true)
    }
  }, [])

  useEffect(() => {
    if (window.innerWidth <= 640) {
      setIsTouchDevice(true)
    }
  }, [])

  return isTouchDevice
}
