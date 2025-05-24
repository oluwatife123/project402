import React from 'react'
import card from '../assets/card.jpg'

export default function LandinPage() {
  return (
    // main container
    <div className='w-[100%] py-8 lg:py-0 md:h-screen lg:h-screen flex flex-col justify-center items-center bg-[#F5F5F5]'>
        <div className='w-[80%] h-[80%] md:flex md:flex-col justify-center items-center bg-white shadow-md rounded-lg'>
        <div className='lg:flex'>
       {/* Image  */}
       <img src={card} className='md:w-[60%] lg:w-[60%] h-full rounded-lg' alt="card" />
       {/* title  */}
       <div className=''>
        <p className='text-[3rem] font-bold text-center h-full md:mt-16 p-2'>
            <i className='text-[#8B653E] font-normal'>Medu</i> Is The Best Platform To Sell Anything.
        </p>

       </div>
       </div>
       </div>

    </div>
  )
}
