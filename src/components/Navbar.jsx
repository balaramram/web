import React from "react";
import { navData,homeData } from "../constants";


export const Navbar = () => {
    return (

        <div className="flex justify-center mt-5 bg-amber-400">
            <div className="flex items-center gap-35 md:gap-10 lg:gap-20 xl:gap-80">
               <div>
                    {homeData.map((item)=>(<img className="w-20 " src={item.logo}/>))}
               </div>
               <div className="flex gap-10 ">
                  <div className=" text-white pt-2 text-xs lg:text-sm hidden md:block">
                      {navData.map((item)=><span className="hover:underline ps-8">{item.title}</span>)}
                   </div>
                  <div className="flex items-center gap-2 xl:gap-8">
                       <div>{homeData.map((item)=>(<img className="w-7" src={item.search}/>))}</div>
                       <div>{homeData.map((item)=>(<img className="w-8 md:w-10" src={item.ham}/>))}</div>
                  </div>
               </div>
            </div>
        </div>
    );
};