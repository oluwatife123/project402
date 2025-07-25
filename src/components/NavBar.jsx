import React, { useEffect, useState, useContext } from "react";
import "primeicons/primeicons.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { CartContext } from "./CartContext"; // 🛒 Import Cart Context
import { FiShoppingCart } from "react-icons/fi"; // 🛒 Icon from react-icons

export default function NavBar() {
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0); // 🧮 Total item count

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <div className="w-full px-4 py-3 bg-white shadow-md flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0">
      {/* Logo */}
      <Link to="/" className="text-[#8B653E] font-semibold text-2xl md:text-3xl">
        medu
      </Link>

      {/* Center content */}
      <form
        onSubmit={handleSearch}
        className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto md:flex-1 md:justify-center"
      >
        <div className="flex items-center gap-2 text-[#8B653E]">
          <i className="pi pi-map-marker"></i>
          <p className="text-sm sm:text-base">Nigeria</p>
        </div>

        <div className="relative w-full sm:w-[250px] md:w-[300px]">
          <input
            type="text"
            placeholder="Search for things..."
            className="w-full border border-gray-300 rounded-md p-2 pr-10 text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <i className="pi pi-search absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm"></i>
        </div>

        <button
          type="submit"
          className="bg-[#8B653E] text-white px-4 py-2 rounded-md text-sm"
        >
          Search
        </button>
      </form>

      {/* Right content */}
      <div className="flex items-center justify-end gap-4 w-full md:w-auto">
        {/* 🛒 Cart Icon with Badge */}
        <Link to="/cart" className="relative text-[#8B653E]">
          <FiShoppingCart className="text-2xl" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          )}
        </Link>

        {user ? (
          <>
            <p className="text-[#8B653E] text-md font-medium">
              <i className="font-bold">User:</i> {user.displayName || user.email}
            </p>

            <Link
              to="/add-product"
              className="bg-green-600 text-white px-4 py-2 rounded-md text-sm"
            >
              Add Product
            </Link>

            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-md text-sm"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="flex items-center gap-2 cursor-pointer text-[#8B653E] text-sm"
            >
              <i className="pi pi-user"></i>
              <p>Log In</p>
            </Link>
            <Link
              to="/register"
              className="bg-[#8B653E] text-white px-4 py-2 rounded-md text-sm"
            >
              Start to sell
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
