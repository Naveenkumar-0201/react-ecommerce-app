import { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cartItems } = useContext(CartContext);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className={`custom-navbar ${isSticky ? "nav-sticky" : ""}`}>
      <div className="nav-container">

        <Link to="/" className="logo">
          Z Store
        </Link>

        <div className="nav-links">
          <NavLink to="/" className="nav-item">
            <i className="bi bi-shop-window"></i> Home
          </NavLink>

          <NavLink to="/cart" className="nav-item">
            <i className="bi bi-cart"></i> Cart
            
          </NavLink>

          <NavLink to="/orders" className="nav-item">
            <i className="bi bi-bag"></i> Orders
          </NavLink>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
