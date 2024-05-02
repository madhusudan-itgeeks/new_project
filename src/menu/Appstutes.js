import React from 'react'
import "../menu/Appstutes.css"
import { AiFillAndroid } from "react-icons/ai";
import { FaApple } from "react-icons/fa";


const Appstutes = () => {
    const Data = [
        {
          id: "1",
          state: "Design",
          status: true,
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>,
        },
        {
          id: "2",
          state: "App Details",
          status: true,
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>,
        },
        {
          id: "3",
          state: "Processing (Build your app)",
          status:  false,
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>,
        },
        {
          id: "4",
          state: "Uploading on store",
          status: false,
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>,
        },
        {
          id: "5",
          state: "in review in store",
          status: false,
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>,
        },
        {
          id: "6",
          state: "Live on store",
          status: false,
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>,
        },
      ];
  return (
    <>
     <div className='h-full  '>
 <div>
 <table>
   
   <thead>
     <tr>
       <th scope="col">shop name</th>
       
     </tr>
   </thead>
   <tbody>
  
     <tr>
       <th scope="row">checkoutitg	</th>
      </tr>
   </tbody>
  
 </table>
 </div>

    
          </div>
        <div className=' w-full flex-row flex gap-[25px] '>
        <div className='flex flex-col gap-[10px]'>
         <div className="bg-[#f6e4d7] h-[60px]  flex  text-center items-center   rounded-[5px]">
              <button className="py-[15px] w-][39px] px-[20px] text-center justify-center font-appFont font-bold text-[20px] text-[#1e1e2f] h-[39px] flex items-center gap-[10px] cursor-pointer ">
                <AiFillAndroid /> Link for android
              </button>
            </div>
            <div className="bg-[#f2facb] w-fit h-[70px] rounded-[5px] flex items-center">
              <button className="w-full py-[15px] px-[20px] text-center justify-center font-appFont font-bold text-[20px] text-[#1e1e2f] h-[39px] flex items-center gap-[10px] cursor-pointer ">
                <FaApple /> Link for IOS
              </button>
            </div>
         </div>
        <div className='w-full  gap-4'>
            <div className='flex w-full  items-center  '>
         {Data?.map((obj, idx) => {
                    return (
                      <div key={idx} className="w-full">
                        <div className="flex gap-2 w-[100%] relative flex-col justify-center text-center items-center">
                          {obj.status === true && (
                            <div
                              className="border-2 absolute top-6 border-[#ddf186] right-0"
                              style={{ width: "100%" }}
                            >
                              <div
                                className=" "
                                style={{
                                  width: "100%",
                                  transition: "width 4500ms linear 0s",
                                }}
                              ></div>
                            </div>
                          ) }

                          <div className="z-10 flex flex-col gap-[15px]">   
                            {obj.status ? (
                              <div className="flex flex-col justify-center items-center bg-[#ddf186] w-[50px] h-[50px]  rounded-[50%]">
                                <div className="text-[#1e1e2f]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                              </div>
                            ) : (
                              <p className="p-[10px] bg-white w-[50px] border rounded-[50%] font-appContent font-normal text-[#1e1e2f]">
                                {idx + 1}
                              </p>
                            )}
                          </div>
                          <p className=" font-normal text-[16px] text-[#1e1e2f]">
                            {obj?.state}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                  </div>
            
                
            </div>
        </div>
 

         </>
  )
}

export default Appstutes
