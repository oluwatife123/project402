import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebaseConfig";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

export default function PopularCategories() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const productsCollection = collection(db, "products");
        // Order by createdAt descending so newest products show first
        const q = query(productsCollection, orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const productsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsList);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="w-full py-8 mb-2 bg-[#F5F5F5] flex flex-col justify-center items-center">
      <div className="w-[90%] sm:w-[80%]">
        <p className="text-2xl sm:text-3xl font-semibold py-5 text-center sm:text-left">
          Available Products
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.length > 0 ? (
            products.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="flex flex-col justify-center items-center bg-white shadow-md rounded-lg cursor-pointer hover:shadow-lg transition-shadow p-2 sm:p-4"
              >
                <img
                  src={product.imageUrl || product.image} // fallback to your old static image if any
                  alt={product.title}
                  className="w-full h-28 sm:h-32 object-cover rounded-md"
                />
                <p className="font-semibold text-center mt-2 sm:mt-4 text-sm sm:text-base">
                  {product.title}
                </p>
                <p className="text-center text-[#8B653E] font-medium text-sm sm:text-base mt-1">
                  #{Number(product.price).toLocaleString()}
                </p>
              </Link>
            ))
          ) : (
            <p className="text-center col-span-full">No products available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
