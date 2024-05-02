import React from 'react'
// import './AuthBannerStyles.css'
import { FaStar } from "react-icons/fa";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import { useNavigate } from 'react-router-dom';
const AuthBanner = () => {
    const navigate = useNavigate();
    const ratings = [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    return (
        <div className='auth_banner_container flex-col gap-[30px]'>
            <div className='flex justify-between w-[100%] '>
                <div className='w-[132px] h-[30px]' onClick={() => { navigate('dashboard') }}>
                    <img alt='' src='https://framerusercontent.com/images/ZtNJM6UJgu0YPxCAQKIZMBGn7lo.png?scale-down-to=512'
                        className='min-w-[132px] w-[100%] cursor-pointer'
                    />
                </div>
                <div className='flex gap-[30px] h-[28.5px] items-center'>
                    <p className='font-appFont  text-appText text-[14px] font-[700] opacity-[0.95] apps '>apps@itgeeks.com</p>
                    <button className='outline-none  bg-none font-appFont text-[#1e1e2f] opacity-[0.95] font-[500] text-[14px] pb-[1px] border-b-[1px] border-[black] send'>Send A Message</button>

                </div>

            </div>
            <div className='flex flex-col gap-[40px]'>
                <div className='pt-[9px]'>
                    <h1 className='text-[65px] leading-[1.3em] font-[400] font-appFont cursor-pointer' style={{fontFamily:"Manrope, sans-serif", marginTop:'-28px',color:"#1E1E2F"}}>Every Project Start With a Plan.</h1>
                </div>
                <div>

                    <div className="overflow-x-hidden flex gap-[30px] font-appFont slider_auto">
                        {ratings.map((ele, index) => {
                            return (
                                <div className=" p-[30px] marques-content animate-marquee whitespace-nowrap w-[503px] flex flex-col gap-[15px] justify-center items-center cursor-pointer "
                                    style={{ backgroundColor: " rgb(247, 247, 245)", borderRadius: "15px", height: "min-content", }} key={index}>

                                    <div className='w-[100%] flex justify-center'>
                                        <div className='flex gap-[10px] text-[14px]'>
                                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                        </div>
                                    </div>
                                    <div className='flex justify-center text-center'>
                                        <p className='text-center text-[14px] tracking-[0.1px] w-[443px] font-appContent'
                                            style={{ color: "rgb(30, 30, 47)", whiteSpace: "pre-wrap", wordBreak: "break-word", wordWrap: "break-word",fontFamily:"'Poppins', sans-serif" }}>
                                            SiteSyncPro proves to be an excellent product,
                                            offering an effective method to cultivate a
                                            devoted brand community and boost recurring sales!
                                        </p>
                                    </div>
                                    <span className="mx-4 text-[14.5px] text-appText block font-[700] text-center Alex" >Alex A</span>
                                </div>
                            )
                        })};


                    </div>


                </div>
            </div>

        </div >
    )
}

export default AuthBanner

