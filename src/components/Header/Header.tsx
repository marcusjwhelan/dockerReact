import React from 'react'
import {MobileHeader_Comp} from './Mobile_Header'
import {DesktopHeader_Comp} from './Desktop_Header'
import useMobile from '../useMobile'

function Header() {
  const mobile = useMobile()
  return (
    <div>
      {mobile ?
        <MobileHeader_Comp/>
        :
        <DesktopHeader_Comp/>
      }
    </div>
  )
}

export const Header_Comp = Header