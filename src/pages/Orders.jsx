import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";


const Orders = () => {
  const { orders } = useContext(CartContext);

  return (
    <div style={{ padding: "30px", maxWidth: "900px", margin: "auto" }}>
      <h2 style={{color:"black", fontWeight:"bold"}} className="pb-5 " >My Orders</h2>

      <h3>Total Orders Placed: {orders.length}</h3>

      {orders.length === 0 && <p className="empty-order">No orders placed yet.</p>}

      {orders.map(order => (
        <div
          key={order.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "20px",
            borderRadius: "10px"
          }}
        >
          <h4>Order ID: {order.id}</h4>
          <p>Date: {order.date}</p>

          {order.items.map(item => (
            <div key={item.id}>
              {item.title} — ₹{item.price} × {item.quantity}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Orders;
