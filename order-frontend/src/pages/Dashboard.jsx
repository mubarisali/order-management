import { useEffect, useState } from "react";
import API from "../api";
import Layout from "../components/Layout";
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // get current user
    API.get("me/")
      .then((res) => setUsername(res.data.username))
      .catch(() => setUsername(""));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUsername("");
    navigate("/");
  };

  return (
    <Layout>
      <div style={{ padding: 20 }}>
        {/* Header with Welcome + Logout */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          {username && (
            <h1>
              👋 Welcome, <span style={{ color: "#ff5722" }}>{username}</span>!
            </h1>
          )}
          <button
            onClick={handleLogout}
            style={{
              padding: "8px 16px",
              backgroundColor: "#f44336",
              color: "#fff",
              border: "none",
              borderRadius: 5,
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {/* Menu (Clickable Link) */}
          <section
            style={{
              border: "1px solid #ccc",
              borderRadius: 8,
              padding: 15,
              background: "#fff",
            }}
          >
            <h2>
              <Link to="/menu" style={{ textDecoration: "none", color: "#ff5722" }}>
                🍽️ Menu →
              </Link>
            </h2>
            <p>Click to explore Veg & Non-Veg dishes.</p>
          </section>

          {/* Order Tracking (Clickable Link) */}
          <section
            style={{
              border: "1px solid #ccc",
              borderRadius: 8,
              padding: 15,
              background: "#fff",
            }}
          >
            <h2>
              <Link
                to="/order-tracking"
                style={{ textDecoration: "none", color: "#0070f3" }}
              >
                📦 Order Tracking →
              </Link>
            </h2>
            <p>Track your orders in real-time here.</p>
          </section>

          {/* Daily Sales Report (Admin Only) */}
          <section
            style={{
              border: "1px solid #ccc",
              borderRadius: 8,
              padding: 15,
              background: "#fff",
            }}
          >
            <h2>
              <Link
                to="/sales-report"
                style={{ textDecoration: "none", color: "#4caf50" }}
              >
                📊 Daily Sales Report →
              </Link>
            </h2>
            <p>View daily revenue and order statistics.</p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
