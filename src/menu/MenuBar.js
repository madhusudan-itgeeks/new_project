import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { TbHeartHandshake } from "react-icons/tb";
import { GrStatusUnknown } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import  "./menu.css"
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function MenuBar() {
    const navigate=useNavigate()
  return (
    <div className='menu'>
        <div className='header'>
            <div>
            <img src='https://framerusercontent.com/images/ZtNJM6UJgu0YPxCAQKIZMBGn7lo.png?scale-down-to=512'/>
            </div>
         
            <div className="notification-btn-container">
                    <div className="btn-container" style={{ width: 'min-content' ,cursor:'pointer'}}>
                        <div  className="hover-div" style={{ width: 'min-content' }}>
                            <button className="submit-btn" type="submit">
                             Log out
                            </button>
                            <button className="submit-btn1" type="submit">
                             Log out
                            </button>
                        </div>
                    </div>
                </div>

        </div>
        <div style={{display:"flex",gap:'15px'}}>
    <div className='main-menu'>
        <div className='inside-menu' onClick={()=>navigate('dashboard')}>
            <span><IoHomeOutline/></span>
            <p>Home</p>
        </div>
        <div className='inside-menu' onClick={()=>navigate('partners')}>
            <span><TbHeartHandshake/></span>
            <p>Partners</p>
        </div>
        <div className='inside-menu'>
            <span><GrStatusUnknown/></span>
            <p>App Status</p>
        </div>
        <div className='inside-menu'>
            <span><CgProfile/></span>
            <p>Profile</p>
        </div>
    </div>
    <Outlet/>
    </div>
    </div>
  )
}

export default MenuBar
