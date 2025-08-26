// import { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
// import Layout from "../components/Layout";

// export default function Register() {
//   const [form, setForm] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // ✅ Validation Logic
//   const validate = () => {
//     const newErrors = {};
//     if (!form.username || form.username.length < 3) {
//       newErrors.username = "Username must be at least 3 characters.";
//     }
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!form.email || !emailRegex.test(form.email)) {
//       newErrors.email = "Please enter a valid email address.";
//     }
//     const passwordRegex =
//       /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
//     if (!form.password || !passwordRegex.test(form.password)) {
//       newErrors.password =
//         "Password must be at least 6 characters, include an uppercase, a number & a special character.";
//     }
//     if (form.password !== form.confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match.";
//     }
//     return newErrors;
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }
//     try {
//       await axios.post("http://127.0.0.1:8000/api/register/", form);
//       alert("Registration successful! Please login.");
//       navigate("/login");
//     } catch (err) {
//       alert("Registration failed! Try again.");
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
//           onSubmit={handleRegister}
//           style={{
//             border: "1px solid #ccc",
//             padding: 20,
//             borderRadius: 8,
//             width: 320,
//             background: "#fff",
//           }}
//         >
//           <h2 style={{ textAlign: "center", marginBottom: 20 }}>Register</h2>

//           {/* Username */}
//           <input
//             name="username"
//             type="text"
//             placeholder="Username"
//             value={form.username}
//             onChange={handleChange}
//             style={{ width: "100%", padding: 8, marginBottom: 5 }}
//           />
//           {errors.username && (
//             <p style={{ color: "red", fontSize: 12 }}>{errors.username}</p>
//           )}

//           {/* Email */}
//           <input
//             name="email"
//             type="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={handleChange}
//             style={{ width: "100%", padding: 8, marginBottom: 5 }}
//           />
//           {errors.email && (
//             <p style={{ color: "red", fontSize: 12 }}>{errors.email}</p>
//           )}

//           {/* Password */}
//           <input
//             name="password"
//             type="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={handleChange}
//             style={{ width: "100%", padding: 8, marginBottom: 5 }}
//           />
//           {errors.password && (
//             <p style={{ color: "red", fontSize: 12 }}>{errors.password}</p>
//           )}

//           {/* Confirm Password */}
//           <input
//             name="confirmPassword"
//             type="password"
//             placeholder="Confirm Password"
//             value={form.confirmPassword}
//             onChange={handleChange}
//             style={{ width: "100%", padding: 8, marginBottom: 5 }}
//           />
//           {errors.confirmPassword && (
//             <p style={{ color: "red", fontSize: 12 }}>
//               {errors.confirmPassword}
//             </p>
//           )}

//           {/* Register Button */}
//           <button
//             type="submit"
//             style={{
//               width: "100%",
//               padding: 10,
//               background: "green",
//               color: "white",
//               border: "none",
//               borderRadius: 5,
//               cursor: "pointer",
//               marginTop: 10,
//               marginBottom: 15,
//             }}
//           >
//             Register
//           </button>

//           {/* Back to Login Link */}
//           <p style={{ textAlign: "center" }}>
//             Already have an account?{" "}
//             <Link
//               to="/login"
//               style={{
//                 color: "#ff5722",
//                 textDecoration: "none",
//                 fontWeight: "bold",
//               }}
//             >
//               Back to Login
//             </Link>
//           </p>
//         </form>
//       </div>
//     </Layout>
//   );
// }


// import { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
// import Layout from "../components/Layout";

// export default function Register() {
//   const [form, setForm] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // ✅ Validation Logic
//   const validate = () => {
//     const newErrors = {};
//     if (!form.username || form.username.length < 3) {
//       newErrors.username = "Username must be at least 3 characters.";
//     }
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!form.email || !emailRegex.test(form.email)) {
//       newErrors.email = "Please enter a valid email address.";
//     }
//     const passwordRegex =
//       /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
//     if (!form.password || !passwordRegex.test(form.password)) {
//       newErrors.password =
//         "Password must be at least 6 characters, include an uppercase, a number & a special character.";
//     }
//     if (form.password !== form.confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match.";
//     }
//     return newErrors;
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }
//     try {
//       await axios.post("http://127.0.0.1:8000/api/register/", form);
//       alert("Registration successful! Please login.");
//       navigate("/login");
//     } catch (err) {
//       alert("Registration failed! Try again.");
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
//           onSubmit={handleRegister}
//           style={{
//             border: "1px solid #ccc",
//             padding: 20,
//             borderRadius: 8,
//             width: 320,
//             background: "#fff",
//           }}
//         >
//           <h2 style={{ textAlign: "center", marginBottom: 20 }}>Register</h2>

//           {/* Username */}
//           <input
//             name="username"
//             type="text"
//             placeholder="Username"
//             value={form.username}
//             onChange={handleChange}
//             style={{ width: "100%", padding: 8, marginBottom: 5 }}
//           />
//           {errors.username && (
//             <p style={{ color: "red", fontSize: 12 }}>{errors.username}</p>
//           )}

//           {/* Email */}
//           <input
//             name="email"
//             type="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={handleChange}
//             style={{ width: "100%", padding: 8, marginBottom: 5 }}
//           />
//           {errors.email && (
//             <p style={{ color: "red", fontSize: 12 }}>{errors.email}</p>
//           )}

//           {/* Password with toggle */}
//           <div style={{ position: "relative", marginBottom: 5 }}>
//             <input
//               name="password"
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               value={form.password}
//               onChange={handleChange}
//               style={{ width: "100%", padding: 8, paddingRight: 35 }}
//             />
//             <span
//               onClick={() => setShowPassword(!showPassword)}
//               style={{
//                 position: "absolute",
//                 right: 10,
//                 top: "50%",
//                 transform: "translateY(-50%)",
//                 cursor: "pointer",
//                 fontSize: 14,
//               }}
//             >
//               {showPassword ? "🙈" : "👁"}
//             </span>
//           </div>
//           {errors.password && (
//             <p style={{ color: "red", fontSize: 12 }}>{errors.password}</p>
//           )}

//           {/* Confirm Password with toggle */}
//           <div style={{ position: "relative", marginBottom: 5 }}>
//             <input
//               name="confirmPassword"
//               type={showConfirmPassword ? "text" : "password"}
//               placeholder="Confirm Password"
//               value={form.confirmPassword}
//               onChange={handleChange}
//               style={{ width: "100%", padding: 8, paddingRight: 35 }}
//             />
//             <span
//               onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//               style={{
//                 position: "absolute",
//                 right: 10,
//                 top: "50%",
//                 transform: "translateY(-50%)",
//                 cursor: "pointer",
//                 fontSize: 14,
//               }}
//             >
//               {showConfirmPassword ? "🙈" : "👁"}
//             </span>
//           </div>
//           {errors.confirmPassword && (
//             <p style={{ color: "red", fontSize: 12 }}>
//               {errors.confirmPassword}
//             </p>
//           )}

//           {/* Register Button */}
//           <button
//             type="submit"
//             style={{
//               width: "100%",
//               padding: 10,
//               background: "green",
//               color: "white",
//               border: "none",
//               borderRadius: 5,
//               cursor: "pointer",
//               marginTop: 10,
//               marginBottom: 15,
//             }}
//           >
//             Register
//           </button>

//           {/* Back to Login Link */}
//           <p style={{ textAlign: "center" }}>
//             Already have an account?{" "}
//             <Link
//               to="/login"
//               style={{
//                 color: "#ff5722",
//                 textDecoration: "none",
//                 fontWeight: "bold",
//               }}
//             >
//               Back to Login
//             </Link>
//           </p>
//         </form>
//       </div>
//     </Layout>
//   );
// }


import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.username.trim()) {
      newErrors.username = "Username is required";
    }
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await axios.post("http://127.0.0.1:8000/api/register/", form);
      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (err) {
      alert("Registration failed!");
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
          onSubmit={handleRegister}
          style={{
            border: "1px solid #ccc",
            padding: 20,
            borderRadius: 8,
            width: 350, // widened form
            background: "#fff",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: 20 }}>Register</h2>

          <input
            name="username"
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            style={{ width: "100%", padding: 8, marginBottom: 5, boxSizing: "border-box" }}
          />
          {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            style={{ width: "100%", padding: 8, marginBottom: 5, boxSizing: "border-box" }}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

          <div style={{ position: "relative", marginBottom: 5 }}>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: 8,
                paddingRight: 35,
                boxSizing: "border-box",
              }}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: 10,
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                fontSize: 12,
                color: "#555",
              }}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

          <div style={{ position: "relative", marginBottom: 5 }}>
            <input
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: 8,
                paddingRight: 35,
                boxSizing: "border-box",
              }}
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              style={{
                position: "absolute",
                right: 10,
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                fontSize: 12,
                color: "#555",
              }}
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </span>
          </div>
          {errors.confirmPassword && (
            <p style={{ color: "red" }}>{errors.confirmPassword}</p>
          )}

          <button
            style={{
              width: "100%",
              padding: 10,
              background: "green",
              color: "white",
              border: "none",
              borderRadius: 5,
              cursor: "pointer",
              marginTop: 10,
              marginBottom: 15,
            }}
          >
            Register
          </button>

          <p style={{ textAlign: "center" }}>
            Already have an account?{" "}
            <Link
              to="/login"
              style={{
                color: "#ff5722",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Back to Login
            </Link>
          </p>
        </form>
      </div>
    </Layout>
  );
}
