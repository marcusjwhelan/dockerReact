import React from 'react'
import MobileHeader from './Mobile_Header'
import Desktop_Header from './Desktop_Header'
import useMobile from '../hooks/useMobile'

function Header() {
  const mobile = useMobile()
  return (
    <div>
      {mobile ?
        <MobileHeader/>
        :
        <Desktop_Header/>
      }
    </div>
  )
}

export const Header_Comp = Header