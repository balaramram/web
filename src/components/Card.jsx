
import React from 'react'


import {cad} from "../constants"




const Card = () => {
  return (
    <>
    <div className='flex justify-center'>
        <section className='bg-amber-400 w-100'>
             <div className='px-10 pt-10 pb-5'>
                 <div>
                    {cad.map((item)=><img className='w-max h-max' src={item.img} />)}
                 </div>
                 <div>
                    {cad.map((item)=><span className='flex text-center justify-center pt-2 font-mono font-bold text-lg'>{item.dis}</span>)}
                 </div>
             </div>
        </section>
    </div>
    </>
  );
};

export default Card

// {cad.map((item)=>(<img key={item.id} className='w-100 h-100' src={item.img}/>))}

