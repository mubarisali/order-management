
// import { useState, useContext } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
// import Layout from "../components/Layout";
// import { CartContext } from "../contexts/CartContext";

// export default function Login({ setAuth }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const { setUser } = useContext(CartContext);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       // 1️⃣ Get tokens
//       const res = await axios.post("http://127.0.0.1:8000/api/token/", {
//         username,
//         password,
//       });

//       // ✅ Save tokens correctly
//       localStorage.setItem("access_token", res.data.access);
//       localStorage.setItem("refresh_token", res.data.refresh);

//       // 2️⃣ Fetch user details from /api/me/
//       const meRes = await axios.get("http://127.0.0.1:8000/api/me/", {
//         headers: {
//           Authorization: `Bearer ${res.data.access}`,
//         },
//       });

//       const userData = meRes.data;

//       // 3️⃣ Set user in context
//       setUser({
//         id: userData.id,
//         username: userData.username,
//         email: userData.email,
//         role: userData.is_superuser
//           ? "admin"
//           : userData.is_staff
//           ? "staff"
//           : "user",
//       });

//       setAuth(true);
//       navigate("/dashboard");
//     } catch (err) {
//       console.error("Login failed", err);
//       alert("Login failed! Please try again.");
//     }
//   };

//   return (
//     <Layout>
//       <div
//         style={{
//           display: "flex",
//           minHeight: "80vh",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <form
//           onSubmit={handleLogin}
//           style={{
//             border: "1px solid #ccc",
//             padding: 20,
//             borderRadius: 8,
//             width: 300,
//             background: "#fff",
//           }}
//         >
//           <h2 style={{ textAlign: "center", marginBottom: 20 }}>Login</h2>
//           <input
//             style={{ width: "100%", padding: 8, marginBottom: 10 }}
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <input
//             style={{ width: "100%", padding: 8, marginBottom: 10 }}
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button
//             style={{
//               width: "100%",
//               padding: 10,
//               background: "#ff5722",
//               color: "white",
//               border: "none",
//               borderRadius: 5,
//               cursor: "pointer",
//               marginBottom: 15,
//             }}
//           >
//             Login
//           </button>

//           {/* Register Button */}
//           <p style={{ textAlign: "center" }}>
//             New user?{" "}
//             <Link
//               to="/register"
//               style={{
//                 color: "#ff5722",
//                 textDecoration: "none",
//                 fontWeight: "bold",
//               }}
//             >
//               Register here
//             </Link>
//           </p>
//         </form>
//       </div>
//     </Layout>
//   );
// }


import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Layout from "../components/Layout";
import { CartContext } from "../contexts/CartContext";

export default function Login({ setAuth }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(CartContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // 1️⃣ Get tokens
      const res = await axios.post("http://127.0.0.1:8000/api/token/", {
        username,
        password,
      });

      // ✅ Save tokens correctly
      localStorage.setItem("access_token", res.data.access);
      localStorage.setItem("refresh_token", res.data.refresh);

      // 2️⃣ Fetch user details from /api/me/
      const meRes = await axios.get("http://127.0.0.1:8000/api/me/", {
        headers: {
          Authorization: `Bearer ${res.data.access}`,
        },
      });

      const userData = meRes.data;

      // 3️⃣ Set user in context
      setUser({
        id: userData.id,
        username: userData.username,
        email: userData.email,
        role: userData.is_superuser
          ? "admin"
          : userData.is_staff
          ? "staff"
          : "user",
      });

      setAuth(true);
      navigate("/dashboard");
    } catch (err) {
      console.error("Login failed", err);
      alert("Login failed! Please try again.");
    }
  };

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          minHeight: "80vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          onSubmit={handleLogin}
          style={{
            border: "1px solid #ccc",
            padding: 20,
            borderRadius: 8,
            width: 320, // 🔹 Slightly wider
            background: "#fff",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: 20 }}>Login</h2>
          <input
            style={{
              width: "95%", // 🔹 Leaves space inside border
              padding: "8px 10px",
              marginBottom: "12px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            style={{
              width: "95%",
              padding: "8px 10px",
              marginBottom: "12px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            style={{
              width: "100%",
              padding: 10,
              background: "#ff5722",
              color: "white",
              border: "none",
              borderRadius: 5,
              cursor: "pointer",
              marginBottom: 15,
            }}
          >
            Login
          </button>

          {/* Register Button */}
          <p style={{ textAlign: "center" }}>
            New user?{" "}
            <Link
              to="/register"
              style={{
                color: "#ff5722",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Register here
            </Link>
          </p>
        </form>
      </div>
    </Layout>
  );
}
