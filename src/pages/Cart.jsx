import React, { useContext } from "react";
import { Link } from "react-router-dom";  // <-- Import Link here
import { CartContext } from "../components/CartContext";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // Optional: Report generation logic (e.g., download or view summary)
  const handleReport = () => {
    const reportContent = cart
      .map(
        (item) =>
          `Product: ${item.title}\nQuantity: ${item.qty}\nPrice: ₦${item.price}\n\n`
      )
      .join("") + `TOTAL: ₦${Number(total).toLocaleString()}`;

    const blob = new Blob([reportContent], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "cart_report.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <NavBar />
      <div className="max-w-6xl mx-auto p-4 sm:p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
        {cart.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow p-4 rounded-lg flex justify-between items-center"
              >
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p>Quantity: {item.qty}</p>
                  <p>Price: ₦{Number(item.price).toLocaleString()}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Total */}
            <div className="text-xl font-bold text-right mt-6">
              Total: ₦{Number(total).toLocaleString()}
            </div>

            {/* Report Button */}
            <div className="text-right mt-4">
              <button
                onClick={handleReport}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                Generate Report
              </button>
            </div>

            {/* Link to Report page */}
            <div className="mt-4 text-right">
              <Link
                to="/report"
                className="text-blue-600 hover:underline font-medium"
              >
                Check Report
              </Link>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
