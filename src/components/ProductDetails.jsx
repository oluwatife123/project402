import React from "react";
import { useParams, Link } from "react-router-dom";
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
import Footer from "./Footer";
import NavBar from "./NavBar";

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

export default function ProductDetails() {
  const { id } = useParams();

  // Find product by id
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <p className="text-center mt-10 text-red-500">Product not found</p>
    );
  }

  const otherProducts = products.filter((p) => p.id !== id);

  const addToCart = () => {
    alert(`Added ${product.title} to cart!`);
  };

  return (
    <div>
      <NavBar />
      <div className="max-w-6xl mx-auto p-4 sm:p-8">
        {/* Featured product */}
        <div className="mb-12 flex flex-col md:flex-row items-center md:items-start gap-8">
          <img
            src={product.image}
            alt={product.title}
            className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-lg"
          />
          <div className="flex-1  md:text-left lg:mt-20 md:mt-20">
            <h1 className="text-2xl text-center sm:text-3xl md:text-4xl font-bold mb-2">{product.title}</h1>
            <p className="text-lg sm:text-xl text-center mb-4 mt-2 text-gray-600">{product.title}</p>
            <button
              onClick={addToCart}
              className="bg-[#8B653E] w-full text-white px-6 py-2 rounded hover:bg-[#623b14] transition"
            >
              Add to Cart
            </button>
            <p className="text-xl text-center sm:text-2xl font-semibold mt-6">
            Price-
              #{product.price.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Other products */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">More Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {otherProducts.map((prod) => (
            <Link
              key={prod.id}
              to={`/product/${prod.id}`}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer flex flex-col items-center p-2 sm:p-4"
            >
              <img
                src={prod.image}
                alt={prod.title}
                className="w-full h-32 sm:h-40 object-cover rounded-md"
              />
              <p className="mt-2 font-semibold text-center text-sm sm:text-base">{prod.title}</p>
              <p className="text-gray-700 text-center text-sm sm:text-base">
                #{prod.price.toLocaleString()}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
