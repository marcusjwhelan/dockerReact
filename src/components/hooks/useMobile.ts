import {useEffect, useState} from 'react'

function useMobile() {
  const [mobile, setMobile] = useState<boolean>(window.innerWidth <= 840)
  useEffect(() => {
    window.addEventListener('resize', () => setMobile(window.innerWidth <= 840))
    return () => {
      window.removeEventListener('resise', () => setMobile(window.innerWidth <= 840))
    }
  }, [])
  return mobile
}
export default useMobile