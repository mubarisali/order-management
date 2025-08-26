import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section style={{ textAlign: "center", padding: "40px" }}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
          alt="Food Icon"
          style={{ width: "120px", marginBottom: "20px" }}
        />
        <h2>Welcome to FoodExpress</h2>
        <p style={{ maxWidth: "600px", margin: "10px auto" }}>
          At <strong>FoodExpress</strong>, we make food ordering easy and
          efficient. Manage customers, track products, and keep your orders
          organized — all in one place!
        </p>
        <Link to="/login">
          <button
            style={{
              padding: "12px 24px",
              background: "#ff5722",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "20px",
            }}
          >
            🚀 Get Started
          </button>
        </Link>
      </section>

      {/* Features Section */}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          padding: "30px",
        }}
      >
        {/* Product Catalog First */}
        <div style={{ width: "250px", textAlign: "center" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2921/2921822.png"
            alt="Product Icon"
            style={{ width: "80px", marginBottom: "10px" }}
          />
          <h3>Menu</h3>
          <p>Our menu updated and organized. Easily add and track your food</p>
        </div>

        {/* Daily Sales Report (Admin Only) */}
        <div style={{ width: "250px", textAlign: "center" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
            alt="Sales Report Icon"
            style={{ width: "80px", marginBottom: "10px" }}
          />
          <h3>Daily Sales Report</h3>
          <p>View daily revenue and order statistics (Admin only).</p>
        </div>

        {/* Order Tracking Third */}
        <div style={{ width: "250px", textAlign: "center" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/151/151902.png"
            alt="Orders Icon"
            style={{ width: "80px", marginBottom: "10px" }}
          />
          <h3>Order Tracking</h3>
          <p>Track orders in real-time with status updates.</p>
        </div>
      </section>
    </Layout>
  );
}
