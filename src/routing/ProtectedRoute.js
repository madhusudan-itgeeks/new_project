import React from 'react'
import MainMenu from '../menu/MainMenu'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../menu/Dashboard'
import Partner from '../menu/Partner'
import { Login } from '../components/auth/Login'


function ProtectedRoute() {
  return (
    <div>
        <Routes>
            <Route path='menu' element={<MainMenu/> }>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='partners' element={<Partner/>}/>
             </Route>

             <Route path='/' element={<Login/>}/>
            
       
        </Routes>
    

    </div>
  )
}

export default ProtectedRoute
