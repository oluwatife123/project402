import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Report() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const productsSnapshot = await getDocs(collection(db, "products"));
        const productList = productsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productList);
      } catch (error) {
        console.error("Error fetching report data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="max-w-6xl mx-auto p-4 sm:p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Product Report</h1>
        {loading ? (
          <p className="text-center">Loading report...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-md">
              <thead className="bg-[#8B653E] text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Product Name</th>
                  <th className="py-3 px-4 text-left">Price (₦)</th>
                  <th className="py-3 px-4 text-left">Description</th>
                  <th className="py-3 px-4 text-left">Date Added</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr
                    key={product.id}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="py-2 px-4">{product.title}</td>
                    <td className="py-2 px-4">#{Number(product.price).toLocaleString()}</td>
                    <td className="py-2 px-4">{product.description || "N/A"}</td>
                    <td className="py-2 px-4">
                      {product.createdAt?.toDate
                        ? new Date(product.createdAt.toDate()).toLocaleDateString()
                        : "N/A"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
