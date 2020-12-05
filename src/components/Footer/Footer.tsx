import React from 'react'
import MobileFooter from './Mobile_Footer'
import DesktopFooter from './Dekstop_Footer'
import useMobile from '../useMobile'

function Footer() {
  const mobile = useMobile()
  return (
    <div>
      {mobile ?
        <MobileFooter/>
        :
        <DesktopFooter/>
      }
    </div>
  )
}
export default Footer