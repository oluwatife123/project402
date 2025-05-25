import React from 'react';
import { Link } from 'react-router-dom';
import benz from '../assets/benz.jpg';
import build from '../assets/build.jpg';
import cards from '../assets/cards.jpg';
import generator from '../assets/generator.jpg';
import iphones from '../assets/iphones.jpg';
import laptop from '../assets/laptop.jpg';
import camry from '../assets/camry.jpg';
import mansion from '../assets/mansion.jpg';

const products = [
  { id: 'benz', title: 'Mercedes Benz Car', price: 45000, image: benz },
  { id: 'build', title: 'Construction Building', price: 120000, image: build },
  { id: 'cards', title: 'Playing Cards Set', price: 15, image: cards },
  { id: 'generator', title: 'Power Generator', price: 750, image: generator },
  { id: 'iphones', title: 'Apple iPhone', price: 999, image: iphones },
  { id: 'laptop', title: 'Laptop Computer', price: 1500, image: laptop },
  { id: 'camry', title: 'Toyota Camry Car', price: 30000, image: camry },
  { id: 'mansion', title: 'Luxury Mansion', price: 950000, image: mansion },
];

export default function PopularCategories() {
  return (
    <div className="w-[100%] py-8 lg:p-0 mb-2 bg-[#F5F5F5] flex flex-col justify-center items-center">
      <div className='w-[80%]'>
        <p className='text-3xl font-bold py-5'>Products</p>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3'>
          {products.map(product => (
            <Link 
              key={product.id} 
              to={`/product/${product.id}`} 
              className='md:flex md:flex-col justify-center items-center bg-white shadow-md rounded-lg cursor-pointer hover:shadow-lg transition-shadow p-4'
            >
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-32 object-cover rounded-md"
              />
              <p className='font-semibold text-center mt-4'>{product.title}</p>
              <p className='text-center text-[#8B653E] font-medium mt-1'>#{product.price.toLocaleString()}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
