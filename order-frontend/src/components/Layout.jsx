export default function Layout({ children }) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{ background: "#ff5722", color: "white", padding: "20px" }}>
        <h1>🍔 Food Order Management</h1>
        <p>Fast • Fresh • Reliable</p>
      </header>

      {/* Page Content */}
      <main style={{ flex: 1 }}>{children}</main>

      {/* Footer */}
      <footer style={{ background: "#333", color: "white", padding: "15px", textAlign: "center" }}>
        <p>© 2025 FoodExpress. All rights reserved.</p>
      </footer>
    </div>
  );
}
