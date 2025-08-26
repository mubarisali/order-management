import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import MenuPage from "./pages/MenuPage";
import Orders from "./pages/Orders";
import OrderTracking from "./pages/OrderTracking";
import SalesReport from "./pages/SalesReport";
function App() {
  const [auth, setAuth] = useState(!!localStorage.getItem("token"));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setAuth={setAuth} />} />
         <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={auth ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/order-tracking" element={<OrderTracking />} />
        <Route path="/sales-report" element={<SalesReport />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
