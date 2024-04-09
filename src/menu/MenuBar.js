import {useState} from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { TbHeartHandshake } from "react-icons/tb";
import { GrStatusUnknown } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import  "./menu.css"
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';


function MenuBar() {
    const [showModal, setShowModal] = useState(false);
    const handleLogout = () => {

        sessionStorage.clear('token');

        navigate('/');
    };

    const handleConfirmLogout = () => {
        handleLogout();
        setShowModal(false);
    };
    const handleCancelLogout = () => {
        setShowModal(false);
    };
    const navigate=useNavigate()
  return (
    <div className='menu'>
        <div className='header'>
            <div>
            <img src='https://framerusercontent.com/images/ZtNJM6UJgu0YPxCAQKIZMBGn7lo.png?scale-down-to=512'/>
            </div>
         
            <div className="notification-btn-container1">
                    <div className="btn-container1" style={{ width: 'min-content' ,cursor:'pointer'}}>
                        <div  className="hover-div1" style={{ width: 'min-content' }} onClick={() => setShowModal(true)}>
                            <button className="submit-btn2" type="submit">
                             Log out
                            </button>
                            <button className="submit-btn3" type="submit">
                             Log out
                            </button>
                        </div>
                    </div>
                </div>
                {showModal && (
                        <div className="modal">
                            <div className="modal-content">
                                <p>Are you sure you want to logout?</p>
                                <button onClick={handleConfirmLogout}>Yes</button>
                                <button onClick={handleCancelLogout}>Cancel</button>
                            </div>
                        </div>
                    )}

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
