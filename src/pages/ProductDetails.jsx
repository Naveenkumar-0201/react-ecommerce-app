import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);


  if (!product) {
    return <h2 className="text-white text-center mt-5">Loading...</h2>;
  }


  const totalPrice = (product.price * quantity).toFixed(2);
  const orders = Math.floor(Math.random() * 500 + 50);

  const handleBuyNow = () => {
    const productWithQuantity = {
      ...product,
      quantity: quantity
    };

    navigate("/checkout", {
      state: { selectedProducts: [productWithQuantity] }
    });
  };

  return (
    <div className="container pb-5 mb-5">
      <div className="details-container row mt-5">

        <img className="col-md-4 detail-image" src={product.image} alt={product.title} />

        <div className="col-md-6 offset-md-2">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h3>₹ {product.price}</h3>
          <p className="text-muted">{orders}+ orders placed</p>
          

          <div className="quantity">
            <button onClick={() => setQuantity(prev => prev > 1 ? prev - 1 : 1)}>
              -
            </button>

            <span>{quantity}</span>

            <button onClick={() => setQuantity(prev => prev + 1)}>
              +
            </button>
          </div>

          <h5>Total: ₹ {totalPrice}</h5>

          <motion.button
            className="btn cart-btn"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.08 }}
            onClick={() => addToCart(product, quantity)}
          >
            Add to Cart
          </motion.button>

          <motion.button
            className="btn buy-btn ms-3"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.08 }}
            onClick={handleBuyNow}
          >
            Buy Now
          </motion.button>

        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
