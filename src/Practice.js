import React from "react";

function Practice() {
  return (
    <div>
      <div className="bg-[#CFE8D2] flex justify-between items-center pl-[20px] pr-[20px] text-transform[uppercase]">
        <div>
          <img
            className="w-[30px] h-[30px]"
            src="https://images.unsplash.com/photo-1573261289561-d584b9e07feb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29jb251dCUyMHRyZWV8ZW58MHx8MHx8fDA%3D"
            alt="/"
          />
        </div>

        <span className="text-[#DD968F]">Our story</span>
        <span className="text-[#DD968F]">Menus</span>
        <span className="text-[#DD968F]">Location</span>
        <span className="text-[#DD968F]">Reserve</span>
        <span className="text-[#DD968F]">marketplace</span>
        <span className="text-[#DD968F]">Order takeout</span>
        <span className="text-[#DD968F]">gift cards</span>
        <span className="text-[#DD968F]">eat the city</span>
      </div>
      <div className="bg-[black]  w-[350px]  py-4 pl-4 pr-4  absolute top-20 left-20">
        <div className=" bg-[tranparent]  text-[#ffffffd0] flex justify-center items-center flex-col ">
          <h1>chubby's marketplace</h1>
          <p className="text-[14px]">
            bright that chubby's magic home with all of our home made sauces,
            spices and homemade cocktail to make your life eaiser which is sign of symbol to brighter 
          </p>
          <button>shop now</button>
        </div>
      </div>
    </div>
  );
}

export default Practice;
