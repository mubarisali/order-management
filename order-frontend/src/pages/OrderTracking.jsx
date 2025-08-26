import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { CartContext } from "../contexts/CartContext";
import { FaCheckCircle, FaHourglassHalf, FaUtensils } from "react-icons/fa";

export default function OrderTracking() {
  const { orders } = useContext(CartContext);
  const navigate = useNavigate();

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return <FaCheckCircle style={{ color: "green", marginRight: 6 }} />;
      case "in progress":
        return <FaHourglassHalf style={{ color: "orange", marginRight: 6 }} />;
      default:
        return <FaUtensils style={{ color: "blue", marginRight: 6 }} />;
    }
  };

  return (
    <Layout>
      <h1 style={{ textAlign: "center", marginBottom: 20 }}>📦 Order Tracking</h1>

      {/* Back to Dashboard Button */}
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <button
          onClick={() => navigate("/dashboard")}
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "8px 16px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          ⬅ Back to Dashboard
        </button>
      </div>

      {orders.length === 0 ? (
        <p style={{ textAlign: "center" }}>No orders placed yet.</p>
      ) : (
        <div style={{ display: "grid", gap: "20px" }}>
          {orders.map((order) => {
            // calculate grand total
            const grandTotal = order.items.reduce(
              (sum, i) => sum + i.price * i.quantity,
              0
            );

            return (
              <div
                key={order.id}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  padding: "16px",
                  boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
                  backgroundColor: "#fff",
                }}
              >
                <h3 style={{ marginBottom: 10 }}>🆔 Order #{order.id}</h3>
                <p>
                  <strong>Type:</strong> {order.type}
                </p>
                <p>
                  <strong>Status:</strong> {getStatusIcon(order.status)}{" "}
                  {order.status}
                </p>
                <p>
                  <strong>Date & Time:</strong> {order.date}
                </p>

                {/* Items Table */}
                <div style={{ marginTop: 15 }}>
                  <h4>🛒 Items</h4>
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                      <tr style={{ backgroundColor: "#f9f9f9" }}>
                        <th style={{ padding: "6px", border: "1px solid #ddd" }}>Name</th>
                        <th style={{ padding: "6px", border: "1px solid #ddd" }}>Portion</th>
                        <th style={{ padding: "6px", border: "1px solid #ddd" }}>Quantity</th>
                        <th style={{ padding: "6px", border: "1px solid #ddd" }}>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.items.map((i, idx) => (
                        <tr key={idx}>
                          <td style={{ padding: "6px", border: "1px solid #ddd" }}>{i.name}</td>
                          <td style={{ padding: "6px", border: "1px solid #ddd" }}>{i.portion}</td>
                          <td style={{ padding: "6px", border: "1px solid #ddd" }}>{i.quantity}</td>
                          <td style={{ padding: "6px", border: "1px solid #ddd" }}>
                            ₹{i.price * i.quantity}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {/* Grand Total */}
                  <h3
                    style={{
                      textAlign: "right",
                      marginTop: 15,
                      color: "darkgreen",
                    }}
                  >
                    Grand Total: ₹{grandTotal}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Layout>
  );
}
