
import React from 'react'
import Slider from 'react-slick';
// npm install react-slick --save
// npm install slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {data} from "../constants"
import { navData,homeData } from "../constants";

const HeroSection = () => {


  const settings = {
    dots: true,
    infinite:false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false, 
  }

  
  return (
    <div>
      <div className='relative'>
      <Slider {...settings}>
           <div className='relative'>
           {data.map((item)=><span><img className='w-fit' src={item.img_2}/></span>)}
           <div class="absolute inset-30 text-white font-bold flex flex-col justify-center">
             <p className='text-8xl'>Don't just eat,</p>
             <p className='text-8xl'>burger-ate</p>
             <p className='text-xl pt-5 flex flex-col'>Burgers are proof that<span>sometimes the simplest things are the most extraordinary</span></p>
             <button className='mt-5 border border-white px-10 py-2 w-max'>READ MORE</button>
           </div>
           </div>
           <div className='relative'>
           {data.map((item)=><span><img className='w-fit' src={item.img_3}/></span>)}
           <div class="absolute top-40 right-60 text-white font-bold flex flex-col justify-center">
              <p className='flex flex-col text-7xl'>According to<span>chemistry,</span><span>alcohol is a</span><span>solution.</span></p>
              <p className='text-xl pt-5 flex flex-col'>Burgers bring people together,<span>creating moments of shared happiness and satisfaction.</span></p>
              <button className='mt-5 border border-white px-10 py-2 w-max'>READ MORE</button>
           </div>
           </div>
           <div className='relative'>
           {data.map((item)=><span><img className='w-fit' src={item.img_4}/></span>)}
           <div class="absolute top-50 right-60 text-white font-bold flex flex-col justify-center">
            <p className='flex flex-col text-7xl'>Coffee first,<span>adulting second.</span></p>
            <p className='text-xl pt-5 flex flex-col'>A cup of coffee is a reminder<span>that even the darkest moments can be filled with warmth and light.</span></p>
            <button className='mt-5 border border-white px-10 py-2 w-max'>READ MORE</button>
           </div>
           </div>
           <div className='relative'>
           {data.map((item)=><span><img className='w-fit' src={item.img_5}/></span>)}
           <div class="absolute inset-30 text-white font-bold flex flex-col justify-center">
            <p className='text-7xl flex flex-col'>Sip in a new<span>perspective.</span></p>
            <p className='text-xl flex flex-col pt-5'>I'm on a no-gummy bear or juice diet, and my body feels like<span>it's dying on the inside.</span></p>
            <button className='mt-5 border border-white px-10 py-2 w-max'>READ MORE</button>
           </div>
           </div>
      </Slider>
      
    </div>
    




    <div className="absolute inset-0 flex justify-center mt-5 bg-a h-max ">
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
    </div>
  )
}

export default HeroSection


{/* <div className="flex justify-center mt-5 bg-amber-400">
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
        </div> */}