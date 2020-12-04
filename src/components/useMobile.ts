import {useEffect, useState} from 'react'

const useMobile = (initMobile: boolean) => {
  const [mobile, setMobile] = useState<boolean>(initMobile)
  useEffect(() => {
    setMobile(window.innerWidth <= 840)
  })
  return mobile
}
export default useMobile