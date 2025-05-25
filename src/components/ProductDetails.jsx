import React from "react";
import { useParams, Link } from "react-router-dom";
import benz from "../assets/benz.jpg";
import build from "../assets/build.jpg";
import cards from "../assets/cards.jpg";
import generator from "../assets/generator.jpg";
import iphones from "../assets/iphones.jpg";
import laptop from "../assets/laptop.jpg";
import camry from "../assets/camry.jpg";
import mansion from "../assets/mansion.jpg";
import Footer from "./Footer";
import NavBar from "./NavBar";

const products = {
  benz: {
    name: "Mercedes Benz",
    title: "Luxury Car",
    price: 550000,
    image: benz,
  },
  build: {
    name: "Home Build Kit",
    title: "Home Building Kit",
    price: 2502300,
    image: build,
  },
  cards: {
    name: "Credit Cards Set",
    title: "Credit Cards Collection",
    price: 150142456,
    image: cards,
  },
  generator: {
    name: "Power Generator",
    title: "Reliable Generator",
    price: 1200245,
    image: generator,
  },
  iphones: {
    name: "iPhone 14 Pro",
    title: "Latest iPhone",
    price: 1200245,
    image: iphones,
  },
  laptop: {
    name: "Gaming Laptop",
    title: "High Performance Laptop",
    price: 30004235,
    image: laptop,
  },
  camry: {
    name: "Toyota Camry",
    title: "Reliable Car",
    price: 24000356,
    image: camry,
  },
  mansion: {
    name: "Luxury Mansion",
    title: "Exclusive Mansion",
    price: 5000000,
    image: mansion,
  },
};

export default function ProductDetails() {
  const { id } = useParams();
  const product = products[id];

  if (!product)
    return (
      <p className="text-center mt-10 text-red-500">Product not found</p>
    );

  const otherProducts = Object.entries(products).filter(([key]) => key !== id);

  const addToCart = () => {
    alert(`Added ${product.name} to cart!`);
  };

  return (
    <div>
      <NavBar />
      <div className="max-w-6xl mx-auto p-8">
        {/* Featured product with image left, details right */}
        <div className="mb-12 flex flex-col md:flex-row items-center md:items-start gap-8">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-md max-h-[400px] object-cover rounded-lg shadow-lg"
          />
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
            <p className="text-xl mb-4 text-gray-600">{product.title}</p>
            <p className="text-2xl font-semibold mb-6">
              #{product.price.toLocaleString()}
            </p>
            <button
              onClick={addToCart}
              className="bg-[#8B653E] text-white px-6 py-2 rounded hover:bg-[#623b14] transition"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Other products */}
        <h2 className="text-2xl font-semibold mb-6">More Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {otherProducts.map(([key, prod]) => (
            <Link
              key={key}
              to={`/product/${key}`}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer flex flex-col items-center p-4"
            >
              <img
                src={prod.image}
                alt={prod.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <p className="mt-4 font-semibold text-center">{prod.name}</p>
              <p className="text-gray-700 text-center">
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
