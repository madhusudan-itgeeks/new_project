import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
  const [spnieer,setspineer]=useState(false)
  const navigate = useNavigate()
  return (
    <>
      <div className='auth-main-container' style={{alignItems:"center"}}>
        <div className='heading-container'>
          <h2 className='heading' >Recover Password</h2>
          <p className='sec-heading' style={{ fontsize: "15px" }}>Take another step in your mobile journey!</p>
        </div>
        <div className='form-container'>
          <div className='input-container'>
            <input type='text' placeholder='Eamil' className='input' />
          </div>
          <div className='btn-container'>
          {spnieer === true ?
              <div>
                <div className="w-6 h-6 rounded-full animate-spin
               border-4 border-solid border-[black] border-t-transparent"></div>
              </div> : <div>
                <div className="w-6 h-6 "></div>
              </div>}
            <div className='hover-div'>
              <button className='submit-btn'>Send Link</button>
              <button className='submit-btn1'>Send Link</button>
            </div>
          </div>
        </div>
        <div className='footer-contanier'>
          <p className='heading1' onClick={() => navigate("/login")}>Log In </p>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword
