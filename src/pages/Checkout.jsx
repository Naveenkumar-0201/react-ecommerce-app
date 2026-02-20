import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { removeSelectedItems, placeOrder} = useContext(CartContext);

  const selectedProducts = location.state?.selectedProducts || [];

  const totalAmount = selectedProducts.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  

const handlePlaceOrder = () => {
  const selectedIds = selectedProducts.map(item => item.id);

  placeOrder(selectedProducts);   
  removeSelectedItems(selectedIds);  

  alert("Order placed successfully 🎉");

  navigate("/orders");  
};


  if (selectedProducts.length === 0) {
    return <h2>No products selected</h2>;
  }

  return (
    <div style={{ padding: "30px", maxWidth: "800px", margin: "auto" }}>
      <h2 style={{color:"black",fontWeight:"bold",paddingBottom:"25px"}}>Checkout</h2>

      {selectedProducts.map(item => (
        <div key={item.id} style={{ marginBottom: "15px" }}>
          <h4>{item.title}</h4>
          <p>₹{item.price} × {item.quantity}</p>
        </div>
      ))}

      <h3>Total: ₹{totalAmount.toFixed(2)}</h3>

      <button
        onClick={handlePlaceOrder}
        style={{
          padding: "12px 20px",
          background: "green",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;

