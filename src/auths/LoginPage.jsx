
import React, { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";
import { useNavigate,Link } from "react-router-dom";

export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate("/dashboard");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

  return (
    // <div className="min-h-screen flex items-center justify-center bg-gray-100">
    //   <form
    //     onSubmit={handleLogin}
    //     className="bg-white p-8 rounded shadow-md w-full max-w-sm"
    //   >
    //     <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

    //     {error && (
    //       <p className="mb-4 text-red-600 text-center">{error}</p>
    //     )}

    //     <label className="block mb-2 font-semibold">Email</label>
    //     <input
    //       type="email"
    //       required
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //       className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
    //     />

    //     <label className="block mb-2 font-semibold">Password</label>
    //     <input
    //       type="password"
    //       required
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       className="w-full border border-gray-300 rounded px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
    //     />

    //     <button
    //       type="submit"
    //       className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
    //     >
    //       Login
    //     </button>
    //   </form>
    // </div>

   <div className="flex items-center justify-center">
    <p className="text-center text-[red] mb-6">ERROR 404!!! lOGIN NOT ALLOWED FOR USER YET,WEBSITE UNDER CONTRUCTION!!!!</p>
    <Link to="/" className="text-center mt-10 text-[blue]"> Press here to go back</Link>
    

   </div>

  );
}
