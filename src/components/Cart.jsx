import  { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import QuantitySelector from "./QuantitySelector";
import { Link } from "react-router-dom";


const Cart = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    removeSelectedItems,
  } = useContext(CartContext);

  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id]
    );
  };


  const selectedProducts = cartItems.filter((item) =>
    selectedItems.includes(item.id)
  );

  const totalAmount = selectedProducts.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );


  const handleCheckout = () => {
    if (selectedItems.length === 0) {
      alert("Please select at least one product!");
      return;
    }

    const selectedProducts = cartItems.filter(item =>
      selectedItems.includes(item.id)
    );

    navigate("/checkout", {
      state: { selectedProducts }
    });
  };


  if (cartItems.length === 0) {
    return <h2 className="empty-cart">Your cart is empty 🛒</h2>;
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>

      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">

          <input
            type="checkbox"
            checked={selectedItems.includes(item.id)}
            onChange={() => handleCheckboxChange(item.id)}
            className="cart-checkbox"
          />

          <Link to={`/product/${item.id}`}>
            <img
              src={item.image}
              alt={item.title}
              className="product-img"
            />
          </Link>

          <div className="cart-details">
            <h4>{item.title}</h4>
            <p>₹{item.price}</p>

            <QuantitySelector
              quantity={item.quantity}
              onIncrease={() =>
                updateQuantity(item.id, item.quantity + 1)
              }
              onDecrease={() =>
                updateQuantity(item.id, item.quantity - 1)
              }
            />

          </div>

          <div className="cart-subtotal">
            ₹{(item.price * item.quantity).toFixed(2)}
          </div>

          <button
            className="remove-btn"
            onClick={() => removeFromCart(item.id)}
          >
            <i class="bi bi-trash3-fill"></i>
          </button>
        </div>
      ))}

      <div className="checkout-section">
        <h3>
          Total: <span>₹{totalAmount.toFixed(2)}</span>
        </h3>

        <button
          className="checkout-btn"
          disabled={selectedItems.length === 0}
          onClick={handleCheckout}
        >
          Checkout Selected
        </button>
      </div>
    </div>
  );
};

export default Cart;
