import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db, auth } from "../firebaseConfig"; 
import { collection, getDocs, query, orderBy, doc, deleteDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth"; 

export default function PopularCategories() {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null); 
  const navigate = useNavigate();

  // Track user auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe(); // Cleanup listener
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const productsCollection = collection(db, "products");
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

  const handleDelete = async (productId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "products", productId));
      // Update UI immediately after deletion
      setProducts((prev) => prev.filter((product) => product.id !== productId));
      alert("Product deleted successfully.");
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product. Please try again.");
    }
  };

  return (
    <div className="w-full py-8 mb-2 bg-[#F5F5F5] flex flex-col justify-center items-center">
      <div className="w-[90%] sm:w-[80%]">
        <p className="text-2xl sm:text-3xl font-semibold py-5 text-center sm:text-left">
          Available Products
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col justify-center items-center bg-white shadow-md rounded-lg p-2 sm:p-4 relative"
              >
                <Link
                  to={`/product/${product.id}`}
                  className="flex flex-col justify-center items-center cursor-pointer"
                >
                  <img
                    src={product.imageUrl || product.image}
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

                {/* Buttons only visible when logged in */}
                {user && (
                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={() => navigate(`/edit-product/${product.id}`)}
                      className="bg-[#8B653E] text-white px-3 py-1 rounded hover:bg-[#7d5228] transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-center col-span-full">No products available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
