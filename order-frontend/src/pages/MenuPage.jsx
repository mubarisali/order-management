// import Layout from "../components/Layout";
// import { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { CartContext } from "../contexts/CartContext";

// export default function MenuPage() {
//   const navigate = useNavigate();
//   const { addToCart, cart } = useContext(CartContext);

//   const [selectedPortion, setSelectedPortion] = useState({});
//   const [quantity, setQuantity] = useState({});

//   // Categories
//   const vegDishes = [
//     { name: "Paneer Butter Masala", icon: "🥘", prices: { Full: 180, Half: 100, Quarter: 60 } },
//     { name: "Veg Biryani", icon: "🥗", prices: { Full: 150, Half: 80, Quarter: 50 } },
//     { name: "Dal Tadka", icon: "🍲", prices: { Full: 120, Half: 70, Quarter: 40 } },
//   ];

//   const nonVegDishes = [
//     { name: "Chicken Biryani", icon: "🍖", prices: { Full: 200, Half: 120, Quarter: 70 } },
//     { name: "Butter Chicken", icon: "🍗", prices: { Full: 250, Half: 150, Quarter: 90 } },
//     { name: "Fish Curry", icon: "🐟", prices: { Full: 220, Half: 130, Quarter: 80 } },
//   ];

//   const desserts = [
//     { name: "Gulab Jamun", icon: "🍯", prices: { Full: 90, Half: 50, Quarter: 30 } },
//     { name: "Rasmalai", icon: "🥮", prices: { Full: 120, Half: 70, Quarter: 40 } },
//     { name: "Brownie", icon: "🍫", prices: { Full: 150, Half: 90, Quarter: 50 } },
//   ];

//   const iceCreams = [
//     { name: "Vanilla Ice Cream", icon: "🍦", prices: { Full: 100, Half: 60, Quarter: 35 } },
//     { name: "Chocolate Ice Cream", icon: "🍫", prices: { Full: 120, Half: 70, Quarter: 40 } },
//     { name: "Strawberry Ice Cream", icon: "🍓", prices: { Full: 110, Half: 65, Quarter: 38 } },
//   ];

//   const snacks = [
//     { name: "Samosa", icon: "🥟", prices: { Full: 50, Half: 30, Quarter: 20 } },
//     { name: "Pakora", icon: "🍢", prices: { Full: 70, Half: 40, Quarter: 25 } },
//     { name: "French Fries", icon: "🍟", prices: { Full: 100, Half: 60, Quarter: 35 } },
//   ];

//   const drinks = [
//     { name: "Tea", icon: "🍵", prices: { Full: 30, Half: 20, Quarter: 15 } },
//     { name: "Coffee", icon: "☕", prices: { Full: 40, Half: 25, Quarter: 18 } },
//     { name: "Cold Drink", icon: "🥤", prices: { Full: 60, Half: 35, Quarter: 20 } },
//     { name: "Fresh Juice", icon: "🧃", prices: { Full: 80, Half: 50, Quarter: 30 } },
//   ];

//   const handleAddToCart = (dish) => {
//     const portion = selectedPortion[dish.name];
//     const qty = quantity[dish.name] || 1;
//     if (!portion) return alert("Select a portion first!");
//     addToCart({ name: dish.name, portion, price: dish.prices[portion], quantity: qty });
//     alert(`${qty} x ${dish.name} (${portion}) added to cart!`);

//     setSelectedPortion((prev) => ({ ...prev, [dish.name]: "" }));
//     setQuantity((prev) => ({ ...prev, [dish.name]: 1 }));
//   };

//   // 🔥 Render with custom color
//   const renderDishCard = (dish, bgColor) => (
//     <div
//       key={dish.name}
//       style={{
//         border: "1px solid #ddd",
//         borderRadius: 12,
//         padding: 20,
//         marginBottom: 15,
//         backgroundColor: bgColor,
//       }}
//     >
//       <h3 style={{ fontSize: 20 }}>
//         <span style={{ fontSize: 28, marginRight: 10 }}>{dish.icon}</span>
//         {dish.name}
//       </h3>
//       <p style={{ margin: "5px 0", color: "#555" }}>
//         Full: ₹{dish.prices.Full} | Half: ₹{dish.prices.Half} | Quarter: ₹{dish.prices.Quarter}
//       </p>

//       <select
//         value={selectedPortion[dish.name] || ""}
//         onChange={(e) => setSelectedPortion((prev) => ({ ...prev, [dish.name]: e.target.value }))}
//         style={{ padding: "6px 10px", borderRadius: 6, border: "1px solid #ccc", marginRight: 10 }}
//       >
//         <option value="">Select Portion</option>
//         <option value="Full">Full - ₹{dish.prices.Full}</option>
//         <option value="Half">Half - ₹{dish.prices.Half}</option>
//         <option value="Quarter">Quarter - ₹{dish.prices.Quarter}</option>
//       </select>

//       <div style={{ display: "inline-flex", alignItems: "center", marginRight: 10 }}>
//         <button
//           onClick={() =>
//             setQuantity((prev) => ({ ...prev, [dish.name]: Math.max((prev[dish.name] || 1) - 1, 1) }))
//           }
//           style={{ padding: "4px 10px", cursor: "pointer" }}
//         >
//           -
//         </button>
//         <span style={{ margin: "0 10px" }}>{quantity[dish.name] || 1}</span>
//         <button
//           onClick={() => setQuantity((prev) => ({ ...prev, [dish.name]: (prev[dish.name] || 1) + 1 }))}
//           style={{ padding: "4px 10px", cursor: "pointer" }}
//         >
//           +
//         </button>
//       </div>

//       <button
//         onClick={() => handleAddToCart(dish)}
//         style={{
//           padding: "6px 14px",
//           backgroundColor: "#0070f3",
//           color: "#fff",
//           border: "none",
//           borderRadius: 6,
//           cursor: "pointer",
//         }}
//       >
//         Add to Cart
//       </button>
//     </div>
//   );

//   return (
//     <Layout>
//       <div style={{ maxWidth: 900, margin: "0 auto", padding: 20 }}>
//         <h1 style={{ textAlign: "center", marginBottom: 20 }}>🍴 Menu</h1>

//         {/* 🔙 Back + Orders buttons */}
//         <div style={{ textAlign: "center", marginBottom: 30 }}>
//           <button
//             onClick={() => navigate("/dashboard")}
//             style={{
//               padding: "10px 20px",
//               backgroundColor: "#6c757d",
//               color: "#fff",
//               border: "none",
//               borderRadius: 6,
//               cursor: "pointer",
//               marginRight: 10,
//             }}
//           >
//             ⬅ Back to Dashboard
//           </button>

//           <button
//             onClick={() => navigate("/orders")}
//             style={{
//               padding: "10px 20px",
//               backgroundColor: "#28a745",
//               color: "#fff",
//               border: "none",
//               borderRadius: 6,
//               cursor: "pointer",
//             }}
//           >
//             Go to Orders ({cart.length})
//           </button>
//         </div>

//         {/* Veg Section */}
//         <h2 style={{ color: "#00796b" }}>🥦 Veg Dishes</h2>
//         {vegDishes.map((dish) => renderDishCard(dish, "#e0f7fa"))}

//         {/* Non-Veg Section */}
//         <h2 style={{ color: "#ef6c00", marginTop: 30 }}>🍗 Non-Veg Dishes</h2>
//         {nonVegDishes.map((dish) => renderDishCard(dish, "#fff3e0"))}

//         {/* Dessert Section */}
//         <h2 style={{ color: "#6a1b9a", marginTop: 30 }}>🍮 Desserts</h2>
//         {desserts.map((dish) => renderDishCard(dish, "#f3e5f5"))}

//         {/* Ice Cream Section */}
//         <h2 style={{ color: "#d81b60", marginTop: 30 }}>🍦 Ice Creams</h2>
//         {iceCreams.map((dish) => renderDishCard(dish, "#fce4ec"))}

//         {/* Snacks Section */}
//         <h2 style={{ color: "#5d4037", marginTop: 30 }}>🍟 Snacks</h2>
//         {snacks.map((dish) => renderDishCard(dish, "#fbe9e7"))}

//         {/* Drinks Section */}
//         <h2 style={{ color: "#1e88e5", marginTop: 30 }}>🥤 Drinks</h2>
//         {drinks.map((dish) => renderDishCard(dish, "#e3f2fd"))}
//       </div>
//     </Layout>
//   );
// }


import Layout from "../components/Layout";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

export default function MenuPage() {
  const navigate = useNavigate();
  const { addToCart, cart } = useContext(CartContext);

  const [selectedPortion, setSelectedPortion] = useState({});
  const [quantity, setQuantity] = useState({});
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShowScrollTop(true);
      else setShowScrollTop(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Dish Arrays
  const vegDishes = [
    { name: "Paneer Butter Masala", icon: "🥘", prices: { Full: 180, Half: 100, Quarter: 60 } },
    { name: "Veg Biryani", icon: "🥗", prices: { Full: 150, Half: 80, Quarter: 50 } },
    { name: "Dal Tadka", icon: "🍲", prices: { Full: 120, Half: 70, Quarter: 40 } },
  ];

  const nonVegDishes = [
    { name: "Chicken Biryani", icon: "🍖", prices: { Full: 200, Half: 120, Quarter: 70 } },
    { name: "Butter Chicken", icon: "🍗", prices: { Full: 250, Half: 150, Quarter: 90 } },
    { name: "Fish Curry", icon: "🐟", prices: { Full: 220, Half: 130, Quarter: 80 } },
  ];

  const desserts = [
    { name: "Gulab Jamun", icon: "🍯", prices: { Full: 90, Half: 50, Quarter: 30 } },
    { name: "Rasmalai", icon: "🥮", prices: { Full: 120, Half: 70, Quarter: 40 } },
    { name: "Brownie", icon: "🍫", prices: { Full: 150, Half: 90, Quarter: 50 } },
  ];

  const iceCreams = [
    { name: "Vanilla Ice Cream", icon: "🍦", prices: { Full: 100, Half: 60, Quarter: 35 } },
    { name: "Chocolate Ice Cream", icon: "🍫", prices: { Full: 120, Half: 70, Quarter: 40 } },
    { name: "Strawberry Ice Cream", icon: "🍓", prices: { Full: 110, Half: 65, Quarter: 38 } },
  ];

  const snacks = [
    { name: "Samosa", icon: "🥟", prices: { Full: 50, Half: 30, Quarter: 20 } },
    { name: "Pakora", icon: "🍢", prices: { Full: 70, Half: 40, Quarter: 25 } },
    { name: "French Fries", icon: "🍟", prices: { Full: 100, Half: 60, Quarter: 35 } },
  ];

  const drinks = [
    { name: "Tea", icon: "🍵", prices: { Full: 30, Half: 20, Quarter: 15 } },
    { name: "Coffee", icon: "☕", prices: { Full: 40, Half: 25, Quarter: 18 } },
    { name: "Cold Drink", icon: "🥤", prices: { Full: 60, Half: 35, Quarter: 20 } },
    { name: "Fresh Juice", icon: "🧃", prices: { Full: 80, Half: 50, Quarter: 30 } },
  ];

  const handleAddToCart = (dish) => {
    const portion = selectedPortion[dish.name];
    const qty = quantity[dish.name] || 1;
    if (!portion) return alert("Select a portion first!");
    addToCart({ name: dish.name, portion, price: dish.prices[portion], quantity: qty });
    alert(`${qty} x ${dish.name} (${portion}) added to cart!`);

    setSelectedPortion((prev) => ({ ...prev, [dish.name]: "" }));
    setQuantity((prev) => ({ ...prev, [dish.name]: 1 }));
  };

  const renderDishCard = (dish, bgColor) => (
    <div
      key={dish.name}
      style={{
        border: "1px solid #ddd",
        borderRadius: 12,
        padding: 20,
        marginBottom: 15,
        backgroundColor: bgColor,
      }}
    >
      <h3 style={{ fontSize: 20 }}>
        <span style={{ fontSize: 28, marginRight: 10 }}>{dish.icon}</span>
        {dish.name}
      </h3>
      <p style={{ margin: "5px 0", color: "#555" }}>
        Full: ₹{dish.prices.Full} | Half: ₹{dish.prices.Half} | Quarter: ₹{dish.prices.Quarter}
      </p>

      <select
        value={selectedPortion[dish.name] || ""}
        onChange={(e) => setSelectedPortion((prev) => ({ ...prev, [dish.name]: e.target.value }))}
        style={{ padding: "6px 10px", borderRadius: 6, border: "1px solid #ccc", marginRight: 10 }}
      >
        <option value="">Select Portion</option>
        <option value="Full">Full - ₹{dish.prices.Full}</option>
        <option value="Half">Half - ₹{dish.prices.Half}</option>
        <option value="Quarter">Quarter - ₹{dish.prices.Quarter}</option>
      </select>

      <div style={{ display: "inline-flex", alignItems: "center", marginRight: 10 }}>
        <button
          onClick={() =>
            setQuantity((prev) => ({ ...prev, [dish.name]: Math.max((prev[dish.name] || 1) - 1, 1) }))
          }
          style={{ padding: "4px 10px", cursor: "pointer" }}
        >
          -
        </button>
        <span style={{ margin: "0 10px" }}>{quantity[dish.name] || 1}</span>
        <button
          onClick={() => setQuantity((prev) => ({ ...prev, [dish.name]: (prev[dish.name] || 1) + 1 }))}
          style={{ padding: "4px 10px", cursor: "pointer" }}
        >
          +
        </button>
      </div>

      <button
        onClick={() => handleAddToCart(dish)}
        style={{
          padding: "6px 14px",
          backgroundColor: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>
    </div>
  );

  return (
    <Layout>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: 20 }}>
        <h1 style={{ textAlign: "center", marginBottom: 20 }}>🍴 Menu</h1>

        <div style={{ textAlign: "center", marginBottom: 30 }}>
          <button
            onClick={() => navigate("/dashboard")}
            style={{
              padding: "10px 20px",
              backgroundColor: "#6c757d",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              marginRight: 10,
            }}
          >
            ⬅ Back to Dashboard
          </button>

          <button
            onClick={() => navigate("/orders")}
            style={{
              padding: "10px 20px",
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            Go to Orders ({cart.length})
          </button>
        </div>

        <h2 style={{ color: "#00796b" }}>🥦 Veg Dishes</h2>
        {vegDishes.map((dish) => renderDishCard(dish, "#e0f7fa"))}

        <h2 style={{ color: "#ef6c00", marginTop: 30 }}>🍗 Non-Veg Dishes</h2>
        {nonVegDishes.map((dish) => renderDishCard(dish, "#fff3e0"))}

        <h2 style={{ color: "#6a1b9a", marginTop: 30 }}>🍮 Desserts</h2>
        {desserts.map((dish) => renderDishCard(dish, "#f3e5f5"))}

        <h2 style={{ color: "#d81b60", marginTop: 30 }}>🍦 Ice Creams</h2>
        {iceCreams.map((dish) => renderDishCard(dish, "#fce4ec"))}

        <h2 style={{ color: "#5d4037", marginTop: 30 }}>🍟 Snacks</h2>
        {snacks.map((dish) => renderDishCard(dish, "#fbe9e7"))}

        <h2 style={{ color: "#1e88e5", marginTop: 30 }}>🥤 Drinks</h2>
        {drinks.map((dish) => renderDishCard(dish, "#e3f2fd"))}
      </div>

      {/* Scroll Up Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: 30,
            right: 30,
            padding: "10px 15px",
            borderRadius: "50%",
            border: "none",
            backgroundColor: "#0070f3",
            color: "#fff",
            fontSize: 20,
            cursor: "pointer",
            boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
          }}
        >
          ⬆
        </button>
      )}
    </Layout>
  );
}
