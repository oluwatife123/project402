import React from 'react';
import { Link } from 'react-router-dom';
import toyhouse from '../assets/toyhouse.jpg';
import airjordan from '../assets/airjordan.jpg';
import samsungs8 from '../assets/samsungs8.jpg';
import laptop from '../assets/laptop.jpg';
import cards from '../assets/cards.jpg';
import toyota from '../assets/toyota.jpg';
import toyhou from '../assets/toyhou.jpg';
import cream from '../assets/cream.jpg';
import tele from '../assets/tele.jpg';
import fridge from '../assets/fridge.jpg';
import generator from '../assets/generator.jpg';
import watch from '../assets/watch.jpg';

const products = [
  { id: 'toyhouse', title: 'House', price: 15000, image: toyhouse },
  { id: 'airjordan', title: 'Air Jordan', price: 15000, image: airjordan },
  { id: 'samsungs8', title: 'Samsung S8', price: 250000, image: samsungs8 },
  { id: 'laptop', title: 'Laptop Computer', price: 250000, image: laptop },
  { id: 'cards', title: 'Gucci Bag', price: 40000, image: cards },
  { id: 'toyota', title: 'Toyota Camry', price: 3500000, image: toyota },
  { id: 'toyhou', title: 'House', price: 15000, image: toyhou },
  { id: 'cream', title: 'Cerave Package', price: 70000, image: cream },
  { id: 'tele', title: 'LG television', price: 300000, image: tele },
  { id: 'fridge', title: 'LG Fridge', price: 150000, image: fridge },
  { id: 'generator2', title: 'Sumec Generator', price: 200000, image: generator },
  { id: 'watch', title: 'Casio Watch', price: 30000, image: watch },
];

export default function PopularCategories() {
  return (
    <div className="w-full py-8 mb-2 bg-[#F5F5F5] flex flex-col justify-center items-center">
      <div className="w-[90%] sm:w-[80%]">
        <p className="text-2xl sm:text-3xl font-semibold py-5 text-center sm:text-left">Available Products</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="flex flex-col justify-center items-center bg-white shadow-md rounded-lg cursor-pointer hover:shadow-lg transition-shadow p-2 sm:p-4"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-28 sm:h-32 object-cover rounded-md"
              />
              <p className="font-semibold text-center mt-2 sm:mt-4 text-sm sm:text-base">
                {product.title}
              </p>
              <p className="text-center text-[#8B653E] font-medium text-sm sm:text-base mt-1">
                #{product.price.toLocaleString()}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
