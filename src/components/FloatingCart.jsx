import  { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useState, useEffect } from "react";

function FloatingCart() {
 const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();


  return (
    <button
      className={`back-to-top btn  ${isVisible ? "show" : ""}`}
      onClick={() => navigate("/cart")}
    >
      <i className="bi bi-cart-fill"></i>
      <span className="cart-count">{cartItems.length}</span>
    </button>  
  );
}

export default FloatingCart;
