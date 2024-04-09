import React from 'react'
import MainMenu from '../menu/MainMenu'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../menu/Dashboard'
import Partner from '../menu/Partner'


function ProtectedRoute() {
  return (
    <div>
        <Routes>
            <Route path='menu' element={<MainMenu/> }>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='partners' element={<Partner/>}/>
             </Route>
            
       
        </Routes>
    

    </div>
  )
}

export default ProtectedRoute
