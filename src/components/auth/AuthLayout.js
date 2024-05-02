import React from 'react'

import AuthBanner from './AuthBanner'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className='flex gap-[30px] ' style={{padding:'30px'}} >
      <AuthBanner/>
      <Outlet/>
    </div>
  )
}

export default AuthLayout
