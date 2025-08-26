import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { CartContext } from "../contexts/CartContext";
import { FaShoppingCart, FaUtensils, FaBox } from "react-icons/fa";

export default function Orders() {
  const navigate = useNavigate();
  const { cart, placeOrder } = useContext(CartContext);
  const [orderType, setOrderType] = useState("");
  const [currentDateTime, setCurrentDateTime] = useState("");

  // Correct total amount calculation with quantity
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const formatted = now.toLocaleString("en-IN", {
        weekday: "long",  // Monday, Tuesday...
        year: "numeric",
        month: "long",    // August
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setCurrentDateTime(formatted);
    }, 1000);

    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  const handlePlaceOrder = () => {
    if (!orderType) return alert("Select Takeaway or Dine-in!");
    const success = placeOrder(orderType);
    if (success) {
      alert(`Order placed! Type: ${orderType}`);
      navigate("/order-tracking");
    }
  };

  return (
    <Layout>
      <h1 style={{ textAlign: "center", marginBottom: "10px" }}>🧾 Order Bill</h1>
      <p style={{ textAlign: "center", color: "#555", marginBottom: "20px" }}>
        📅 {currentDateTime}
      </p>

      {/* Order type selection */}
      <div
        style={{
          marginBottom: 20,
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <label
          style={{
            padding: "10px 20px",
            border: orderType === "Takeaway" ? "2px solid #007bff" : "1px solid #ccc",
            borderRadius: "10px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FaBox /> Takeaway
          <input
            type="radio"
            name="orderType"
            value="Takeaway"
            checked={orderType === "Takeaway"}
            onChange={(e) => setOrderType(e.target.value)}
            style={{ display: "none" }}
          />
        </label>

        <label
          style={{
            padding: "10px 20px",
            border: orderType === "Dine-in" ? "2px solid #007bff" : "1px solid #ccc",
            borderRadius: "10px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FaUtensils /> Dine-in
          <input
            type="radio"
            name="orderType"
            value="Dine-in"
            checked={orderType === "Dine-in"}
            onChange={(e) => setOrderType(e.target.value)}
            style={{ display: "none" }}
          />
        </label>
      </div>

      {/* Bill Table */}
      <div
        style={{
          maxWidth: "700px",
          margin: "auto",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          backgroundColor: "#fff",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#f8f9fa" }}>
              <th style={{ padding: "10px", textAlign: "left" }}>Item</th>
              <th style={{ padding: "10px" }}>Portion</th>
              <th style={{ padding: "10px" }}>Qty</th>
              <th style={{ padding: "10px", textAlign: "right" }}>Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.length === 0 ? (
              <tr>
                <td colSpan={4} style={{ textAlign: "center", padding: "20px" }}>
                  <FaShoppingCart size={20} /> No items added yet.
                </td>
              </tr>
            ) : (
              cart.map((item, idx) => (
                <tr
                  key={idx}
                  style={{
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <td style={{ padding: "10px" }}>{item.name}</td>
                  <td style={{ padding: "10px", textAlign: "center" }}>{item.portion}</td>
                  <td style={{ padding: "10px", textAlign: "center" }}>{item.quantity}</td>
                  <td style={{ padding: "10px", textAlign: "right" }}>
                    ₹{item.price * item.quantity}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Total */}
        <h3
          style={{
            textAlign: "right",
            marginTop: "20px",
            color: "#007bff",
          }}
        >
          Total: ₹{totalAmount}
        </h3>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 15,
            marginTop: 25,
          }}
        >
          <button
            onClick={() => navigate("/menu")}
            style={{
              padding: "10px 15px",
              border: "none",
              borderRadius: "8px",
              background: "#6c757d",
              color: "white",
              cursor: "pointer",
            }}
          >
            ← Add More Items
          </button>
          <button
            onClick={handlePlaceOrder}
            style={{
              padding: "10px 15px",
              border: "none",
              borderRadius: "8px",
              background: "#28a745",
              color: "white",
              cursor: "pointer",
            }}
          >
            ✅ Place Order
          </button>
        </div>
      </div>
    </Layout>
  );
}
