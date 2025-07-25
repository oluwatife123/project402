import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Register from "./auths/RegisterPage";
import ProductDetails from "./components/ProductDetails";
import Login from "./auths/LoginPage";
import ProtectedRoute from "./pages/ProtectedRoute";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import Cart from "./pages/Cart"; // ✅ NEW
import Report from "./components/Report"; // ✅ NEW
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route
        path="/product/:id"
        element={
          <ProtectedRoute>
            <ProductDetails />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add-product"
        element={
          <ProtectedRoute>
            <AddProduct />
          </ProtectedRoute>
        }
      />
      <Route
        path="/edit-product/:id"
        element={
          <ProtectedRoute>
            <EditProduct />
          </ProtectedRoute>
        }
      />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} /> 
      <Route path="/report" element={<Report />} /> 
    </Routes>
  );
}
