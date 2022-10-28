import React from 'react'
import NavLogin from './NavLogin'
import NavLogo from './NavLogo'
import NavMenu from './NavMenu'

export default function Nav() {
  return (
    <div className='nav'>
      <NavLogo />
      <NavMenu />
      <NavLogin />
    </div>
  )
}
