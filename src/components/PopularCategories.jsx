import React from 'react'
import benz from '../assets/benz.jpg'
import build from '../assets/build.jpg'
import cards from '../assets/cards.jpg'
import generator from '../assets/generator.jpg'
import iphones from '../assets/iphones.jpg'
import laptop from '../assets/laptop.jpg'
import camry from '../assets/camry.jpg'
import mansion from '../assets/mansion.jpg'
import illustration from '../assets/pic.jpg'

export default function PopularCategories() {
  return (
    <div className="w-[100%] py-8 lg:p-0 bg-[#F5F5F5] flex flex-col justify-center items-center">
    <div className='w-[80%] '>
        {/* header  */}
        <p className='text-3xl font-bold py-5'>Products</p>
    
    <div className=''>
    <div className='py-2 flex flex-col justify-center items-center '>  
        {/* marketplace */}
    <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3'>
        {/* 1 */}
        <div className=' md:flex md:flex-col justify-center items-center bg-white shadow-md rounded-lg'>
            {/* images */}
            <img src={benz} alt="#" />
            <p className='font-normal text-center mt-4'>home for sale</p>
        </div>
            {/* 2 */}
        <div className=' md:flex md:flex-col justify-center items-center bg-white shadow-md rounded-lg'>
            {/* images */}
            <img src={build} alt="#" />
            <p className='font-normal text-center mt-4'>home for sale</p>
        </div>
            {/* 3 */}
        <div className=' md:flex md:flex-col justify-center items-center bg-white shadow-md rounded-lg'>
            {/* images */}
            <img src={cards} alt="#" />
            <p className='font-normal text-center mt-4'>home for sale</p>
        </div>
            {/* 4 */}
        <div className=' md:flex md:flex-col justify-center items-center bg-white shadow-md rounded-lg'>
            {/* images */}
            <img src={generator} alt="#" />
            <p className='font-normal text-center mt-4'>home for sale</p>
        </div>
            {/* 5 */}
        <div className=' md:flex md:flex-col justify-center items-center bg-white shadow-md rounded-lg'>
            {/* images */}
            <img src={iphones} alt="#" />
            <p className='font-normal text-center mt-4'>home for sale</p>
        </div>
            {/* 6 */}
        <div className=' md:flex md:flex-col justify-center items-center bg-white shadow-md rounded-lg'>
            {/* images */}
            <img src={laptop} alt="#" />
            <p className='font-normal text-center mt-4'>home for sale</p>
        </div>

    </div>
    </div>
    {/* part 2  */}
    <div className='hidden md:flex lg:flex flex-col justify-center items-center '>  
        {/* marketplace */}
    <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3'>
        {/* 1 */}
        <div className=' md:flex md:flex-col justify-center items-center bg-white shadow-md rounded-lg'>
            {/* images */}
            <img src={laptop} alt="#" />
            <p className='font-normal text-center mt-4'>home for sale</p>
        </div>
            {/* 2 */}
        <div className=' md:flex md:flex-col justify-center items-center bg-white shadow-md rounded-lg'>
            {/* images */}
            <img src={iphones} alt="#" />
            <p className='font-normal text-center mt-4'>home for sale</p>
        </div>
            {/* 3 */}
        <div className=' md:flex md:flex-col justify-center items-center bg-white shadow-md rounded-lg'>
            {/* images */}
            <img src={camry} alt="#" />
            <p className='font-normal text-center mt-4'>home for sale</p>
        </div>
            {/* 4 */}
        <div className=' md:flex md:flex-col justify-center items-center bg-white shadow-md rounded-lg'>
            {/* images */}
            <img src={cards} alt="#" />
            <p className='font-normal text-center mt-4'>home for sale</p>
        </div>
            {/* 5 */}
        <div className=' md:flex md:flex-col justify-center items-center bg-white shadow-md rounded-lg'>
            {/* images */}
            <img src={build} alt="#" />
            <p className='font-normal text-center mt-4'>home for sale</p>
        </div>
            {/* 6 */}
        <div className=' md:flex md:flex-col justify-center items-center bg-white shadow-md rounded-lg'>
            {/* images */}
            <img src={mansion} alt="#" />
            <p className='font-normal text-center mt-4'>home for sale</p>
        </div>

        </div>

    </div>
    </div>
    </div>
    </div>
  )
}
