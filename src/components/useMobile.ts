import {useEffect, useState} from 'react'

function useMobile(initMobile: boolean) {
  const [mobile, setMobile] = useState<boolean>(initMobile)
  useEffect(() => {
    window.addEventListener('resize', () => setMobile(window.innerWidth <= 840))
    return () => {
      window.removeEventListener('resise', () => setMobile(window.innerWidth <= 840))
    }
  }, [])
  return mobile
}
export default useMobile