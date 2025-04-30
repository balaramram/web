import React from 'react'
import facebook from"../assets/svg/facebook.png"
import linkindin from "../assets/svg/linkedin.png"
import twitter from "../assets/svg/twitter.png"
import youtube from "../assets/svg/youtube.png"

import {Company,Subsidiaries,Programs,Support}   from '../constants';

export const Folder = () => {
    return (
        <div className=' bg-white'>
            <div className='grid grid-rows-5 grid-cols-2 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-5 lg:grid-rows-1 justify-center text-gray-800 p-20 '>
                <div>
                    <p className='text-lg lg:text-xl font-bold pb-5 text-black'>Company</p>
                    <div className='flex flex-col gap-'>
                        {Company.map((item)=><span className="text-sm lg:text-md hover:underline pb-2 lg:pb-3">{item.id}</span>)}
                    </div>
                </div>
                <div>
                    <p className='text-lg lg:text-xl font-bold pb-5 text-black'>Subsidiaries</p>
                    <div className='flex flex-col gap-'>
                        {Subsidiaries.map((item)=><span className="text-sm lg:text-md hover:underline pb-2 lg:pb-3">{item.id}</span>)}
                    </div>
                </div>
                <div>
                    <p className='text-lg lg:text-xl font-bold pb-5 text-black'>Programs</p>
                    <div className='flex flex-col gap-'>
                        {Programs.map((item)=><span className="text-sm lg:text-md hover:underline pb-2 lg:pb-3">{item.id}</span>)}
                    </div>
                </div>
                <div>
                    <p className='text-lg lg:text-xl font-bold pb-5  text-black'>Support</p>
                    <div className='flex flex-col gap-'>
                        {Support.map((item)=><span className="text-sm lg:text-md hover:underline pb-2 lg:pb-3">{item.id}</span>)}
                    </div>
                </div>
                <div>
                    <p className='text-center text-lg lg:text-xl font-bold pb-5 text-black'>Connect with us</p>
                    <div className='flex justify-center items-center gap-2'>
                        <img className="w-4 pt-1 cursor-pointer"src={twitter}/>
                        <img className="w-5 cursor-pointer"src={facebook}/>
                        <img className="w-5 pt-1 cursor-pointer"src={linkindin}/>
                        <img className="w-6 pt-1 cursor-pointer"src={youtube}/>
                    </div>
                </div>
            </div>
        </div>
        
    );
};