
// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import Layout from "../components/Layout";
// import { CartContext } from "../contexts/CartContext";

// export default function SalesReport() {
//   const { orders, user } = useContext(CartContext); // assume user has { role: "admin" | "user" }
//   const navigate = useNavigate();

//   // Restrict access
//   if (!user || user.role !== "admin") {
//     return (
//       <Layout>
//         <h2 style={{ textAlign: "center", color: "red" }}>⛔ Access Denied</h2>
//         <p style={{ textAlign: "center" }}>
//           Only admins can view the Sales Report.
//         </p>
//         <div style={{ textAlign: "center" }}>
//           <button
//             onClick={() => navigate("/dashboard")}
//             style={{
//               marginTop: "10px",
//               padding: "8px 16px",
//               backgroundColor: "#007bff",
//               color: "white",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//             }}
//           >
//             ⬅ Back to Dashboard
//           </button>
//         </div>
//       </Layout>
//     );
//   }

//   // Calculate sales total
//   const today = new Date().toLocaleDateString();
//   const todayOrders = orders.filter((o) => o.date.includes(today));
//   const totalSales = todayOrders.reduce(
//     (sum, order) =>
//       sum + order.items.reduce((s, i) => s + i.price * i.quantity, 0),
//     0
//   );

//   return (
//     <Layout>
//       <h1 style={{ textAlign: "center" }}>📊 Daily Sales Report</h1>
//       <h3 style={{ textAlign: "center" }}>Date: {today}</h3>
//       <h2 style={{ textAlign: "center", color: "#4caf50" }}>
//         💰 Total Sales: ₹{totalSales}
//       </h2>

//       <table
//         style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}
//       >
//         <thead>
//           <tr style={{ backgroundColor: "#f2f2f2" }}>
//             <th>Order ID</th>
//             <th>Customer</th>
//             <th>Total Amount</th>
//           </tr>
//         </thead>
//         <tbody>
//           {todayOrders.map((order) => {
//             const total = order.items.reduce(
//               (s, i) => s + i.price * i.quantity,
//               0
//             );
//             return (
//               <tr key={order.id}>
//                 <td>{order.id}</td>
//                 <td>{order.customer || "Guest"}</td>
//                 <td>₹{total}</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>

//       {/* ✅ Back Button for Admin */}
//       <div style={{ textAlign: "center", marginTop: "20px" }}>
//         <button
//           onClick={() => navigate("/dashboard")}
//           style={{
//             padding: "10px 20px",
//             backgroundColor: "#007bff",
//             color: "white",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//           }}
//         >
//           ⬅ Back to Dashboard
//         </button>
//       </div>
//     </Layout>
//   );
// }


import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { CartContext } from "../contexts/CartContext";

export default function SalesReport() {
  const { orders, user } = useContext(CartContext); // assume user has { role: "admin" | "user" }
  const navigate = useNavigate();

  // Restrict access
  if (!user || user.role !== "admin") {
    return (
      <Layout>
        <h2 style={{ textAlign: "center", color: "red" }}>⛔ Access Denied</h2>
        <p style={{ textAlign: "center" }}>
          Only admins can view the Sales Report.
        </p>
        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => navigate("/dashboard")}
            style={{
              marginTop: "10px",
              padding: "8px 16px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            ⬅ Back to Dashboard
          </button>
        </div>
      </Layout>
    );
  }

  // Calculate sales total
  const today = new Date().toLocaleDateString();
  const todayOrders = orders.filter((o) => o.date.includes(today));
  const totalSales = todayOrders.reduce(
    (sum, order) =>
      sum + order.items.reduce((s, i) => s + i.price * i.quantity, 0),
    0
  );

  return (
    <Layout>
      <h1 style={{ textAlign: "center" }}>📊 Daily Sales Report</h1>
      <h3 style={{ textAlign: "center" }}>📅 Date: {today}</h3>
      <h2 style={{ textAlign: "center", color: "#4caf50" }}>
        💰 Total Sales: ₹{totalSales}
      </h2>

      {/* Styled Table */}
      <div
        style={{
          marginTop: "20px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#007bff", color: "white" }}>
              <th style={{ padding: "12px" }}>🆔 Order ID</th>
              <th style={{ padding: "12px" }}>👤 Customer</th>
              <th style={{ padding: "12px" }}>💵 Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {todayOrders.length > 0 ? (
              todayOrders.map((order, idx) => {
                const total = order.items.reduce(
                  (s, i) => s + i.price * i.quantity,
                  0
                );
                return (
                  <tr
                    key={order.id}
                    style={{
                      backgroundColor: idx % 2 === 0 ? "#f9f9f9" : "#ffffff",
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    <td style={{ padding: "12px", textAlign: "center" }}>
                      #{order.id}
                    </td>
                    <td style={{ padding: "12px", textAlign: "center" }}>
                      {order.customer || "👥 Guest"}
                    </td>
                    <td
                      style={{
                        padding: "12px",
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "#28a745",
                      }}
                    >
                      ₹{total}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td
                  colSpan="3"
                  style={{
                    textAlign: "center",
                    padding: "20px",
                    color: "gray",
                  }}
                >
                  ❌ No orders for today
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ✅ Back Button for Admin */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={() => navigate("/dashboard")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
          }}
        >
          ⬅ Back to Dashboard
        </button>
      </div>
    </Layout>
  );
}
