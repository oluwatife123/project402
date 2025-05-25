import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-2 text-center text-[#8B653E]">medu</h2>
        <p className="text-3xl mb-4 text-center">Welcome to medu</p>

        {error && (
          <p className="mb-4 text-red-600 text-center">{error}</p>
        )}

        <label className="block mb-2 font-semibold">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="block mb-2 font-semibold">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <i
            className={`pi ${showPassword ? "pi-eye-slash" : "pi-eye"} absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer`}
            onClick={() => setShowPassword(!showPassword)}
          ></i>
        </div>

        <button
          type="submit"
          className="w-full bg-[#8B653E] text-white py-2 rounded hover:bg-[#623b14] transition mt-6"
        >
          Sign Up
        </button>
        <p className="text-center mt-4">Already have an account? <Link to="/login" className="text-[#8B653E]">login</Link></p>
      </form>
    </div>
  );
}
