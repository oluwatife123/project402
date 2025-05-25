import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebaseConfig"; // your firebase config
import { useAuthState } from "react-firebase-hooks/auth";

export default function ProtectedRoute({ children }) {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    // Optionally show loading spinner while auth state is loading
    return <p>Loading...</p>;
  }

  if (!user) {
    // User not logged in, redirect to login
    return <Navigate to="/login" replace />;
  }

  // User is logged in, render the child component
  return children;
}
