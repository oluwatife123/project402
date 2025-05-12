import React from 'react'
import illustration from '../assets/illustration.jpg'

export default function LandinPage() {
  return (
    // main container
    <div className='w-[100%] py-8 lg:py-0 md:h-screen lg:h-screen flex flex-col justify-center items-center bg-[#F5F5F5]'>
        <div className='w-[80%] h-[80%] md:flex md:flex-col justify-center items-center bg-white shadow-md rounded-lg'>
        <div className='lg:flex'>
       {/* Image  */}
       <img src={illustration} className='' alt="Illustration" />
       {/* title  */}
       <div className=''>
        <p className='text-[2.3rem] font-bold text-center mt-16'>
            <i className='text-[#195FA4] font-normal'>Medu</i> Is The Best Platform To Sell Anything.
        </p>

       </div>
       </div>
       </div>

    </div>
  )
}
