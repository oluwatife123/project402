import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "../firebaseConfig";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { CartContext } from "./CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [otherProducts, setOtherProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.imageUrl || product.image,
    });
    alert(`${product.title} added to cart!`);
  };

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        setNotFound(false);

        const productDocRef = doc(db, "products", id);
        const productSnap = await getDoc(productDocRef);

        if (!productSnap.exists()) {
          setNotFound(true);
          setLoading(false);
          return;
        }

        setProduct({ id: productSnap.id, ...productSnap.data() });

        const productsCollection = collection(db, "products");
        const querySnapshot = await getDocs(productsCollection);

        const others = querySnapshot.docs
          .filter((doc) => doc.id !== id)
          .map((doc) => ({ id: doc.id, ...doc.data() }));

        setOtherProducts(others);
      } catch (error) {
        console.error("Error fetching product:", error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10">Loading product...</p>;
  }

  if (notFound) {
    return (
      <p className="text-center mt-10 text-red-500">
        Product not found
      </p>
    );
  }

  return (
    <div>
      <NavBar />
      <div className="max-w-6xl mx-auto p-4 sm:p-8">
        {/* Featured product */}
        <div className="mb-12 flex flex-col md:flex-row items-center md:items-start gap-8">
          <img
            src={product.imageUrl || product.image}
            alt={product.title}
            className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-lg"
          />
          <div className="flex-1 md:text-left lg:mt-20 md:mt-20">
            <h1 className="text-2xl text-center sm:text-3xl md:text-4xl font-bold mb-2">{product.title}</h1>
            <p className="text-lg sm:text-xl text-center mb-4 mt-2 text-gray-600">{product.description || product.title}</p>
            <button
              onClick={handleAddToCart}
              className="bg-[#8B653E] w-full text-white px-6 py-2 rounded hover:bg-[#623b14] transition"
            >
              Add to Cart
            </button>
            <p className="text-xl text-center sm:text-2xl font-semibold mt-6">
              Price - #{Number(product.price).toLocaleString()}
            </p>
          </div>
        </div>

        {/* Other products */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">More Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {otherProducts.length > 0 ? (
            otherProducts.map((prod) => (
              <Link
                key={prod.id}
                to={`/product/${prod.id}`}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer flex flex-col items-center p-2 sm:p-4"
              >
                <img
                  src={prod.imageUrl || prod.image}
                  alt={prod.title}
                  className="w-full h-32 sm:h-40 object-cover rounded-md"
                />
                <p className="mt-2 font-semibold text-center text-sm sm:text-base">{prod.title}</p>
                <p className="text-gray-700 text-center text-sm sm:text-base">
                  #{Number(prod.price).toLocaleString()}
                </p>
              </Link>
            ))
          ) : (
            <p>No other products available.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
