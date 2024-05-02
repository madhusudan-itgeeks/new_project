import React, { useState } from 'react'
import { SignUpValid } from './valid'
import { useNavigate } from 'react-router'
import { Toaster } from 'react-hot-toast'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useFormik } from 'formik'
const SignUp = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const apiKey = process.env.REACT_APP_SIGNUP_KEY;

  const [spnieer, setspineer] = useState(false);

  const navigate = useNavigate()
  const { values, handleChange, handleSubmit, handleBlur, errors, touched, } = useFormik({
    initialValues: {
      "first_name": "",
      "last_name": "",
      "email": "",
      "mobile": "",
      "password": "",
      "confirm_password": "",
    },
    validationSchema: SignUpValid,
    onSubmit: (values) => {
      setspineer(true)
      axios.post(`${apiUrl}${apiKey}` ? `${apiUrl}${apiKey}` : null, values)
        .then((res) => {
          setspineer(false)
          localStorage.setItem("UserData", res.config.data)
          toast.success(res?.data?.message)
          setTimeout(() => {
            navigate("/storedetails")
          }, 1000);

        }).catch((error) => {

          if (error?.response?.status === 400) {
            toast.error(error?.response?.data?.message)
            setspineer(false)
          }
          else if (error?.response?.status === 404) {
            toast.error("Network Error retry")
            setspineer(false)
          } else if (error) {
            setspineer(false)
            toast.error(error.message)
          }
        })
    }
  })
  return (
    <>
      <Toaster />
      <div className='auth-main-container' >
        <div className='heading-container'>
          <h2 className='heading'>Sign Up</h2>
          <p className='sec-heading' style={{ fontsize: "14px" }}>Take another step in your mobile journey!</p>
        </div>
        <form className='form-container'>
          <div className='inner-container'>
            <div className='input-container'>
              <input className='input'
                type='text'
                name='first_name'
                placeholder='First Name'
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={25}
              />
              {errors.first_name && touched.first_name ? (<p style={{ color: '#ff474c', margin: "0", fontSize: "12px" }}> First Name is required</p>) : null}
            </div>
            <div className='input-container'>
              <div className='input-container'>
                <input className='input'
                  type='text'
                  name='last_name'
                  placeholder='Last Name'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  maxLength={25}
                />
                {errors.last_name && touched.last_name ? (<p style={{ color: '#ff474c', margin: "0", fontSize: "12px" }}> Last Name is required</p>) : null}

              </div>
            </div>
          </div>
          <div className='inner-container'>
            <div className='input-container'>
              <div className='input-container'>
                <input className='input'
                  type='text'
                  name='email'
                  placeholder='Email '
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (<p style={{ color: '#ff474c', margin: "0", fontSize: "12px" }}> Email must be valid</p>) : null}

              </div>
            </div>
            <div className='input-container'>
              <div className='input-container'>
                <input className='input'
                  type='text'
                  name='mobile'
                  placeholder='Phone Number '
                  onChange={handleChange}
                  onBlur={handleBlur}
                  maxLength={10}
                />
                {errors.mobile && touched.mobile ? (<p style={{ color: '#ff474c', margin: "0", fontSize: "12px" }}>Phone Number is required</p>) : null}

              </div>
            </div>
          </div>
          <div className='inner-container'>
            <div className='input-container'>
              <div className='input-container'>
                <input
                  className='input'
                  type='password'
                  name='password'
                  placeholder='Password '
                  onChange={handleChange}
                  onBlur={handleBlur}
                  maxLength={16}
                />
                {errors.password && touched.password ? (<p style={{ color: '#ff474c', margin: "0", fontSize: "12px" }}>Az@12 & atleast 8 character</p>) : null}

              </div>
            </div>
            <div className='input-container'>
              <div className='input-container'>
                <input className='input'
                  type='password'
                  name='confirm_password'
                  placeholder='Confrim Password '
                  onChange={handleChange}
                  onBlur={handleBlur}
                  maxLength={16}
                />
                {errors.confirm_password && touched.confirm_password ? (<p style={{ color: '#ff474c', margin: "0", fontSize: "12px" }}>Password MisMatch</p>) : null}

              </div>
            </div>
          </div>
          <div className='btn-container' onClick={handleSubmit}>
            {spnieer === true ?
              <div>
                <div className="w-6 h-6 rounded-full animate-spin
               border-4 border-solid border-[black] border-t-transparent"></div>
              </div> : <div>
                <div className="w-6 h-6 "></div>
              </div>}
            <div className='hover-div'>
              <button className='submit-btn' type='submit'>Next</button>
              <button className='submit-btn1' type='submit'>Next</button>
            </div>
          </div>
        </form>
        <div className='footer-contanier'>
          <p className='heading1' onClick={() => navigate("/login")} >Login</p>
          <p className='heading1' onClick={() => navigate("/forgotpassword")} >Forgot Password ?</p>

        </div>
      </div>
    </>
  )
}

export default SignUp
