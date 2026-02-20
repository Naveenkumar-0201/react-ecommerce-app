import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";


function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const totalPrice = (product.price * quantity).toFixed(2);
  const orders = Math.floor(Math.random() * 500 + 50);
  const navigate = useNavigate();

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
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >


      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="product-img"
        />
      </Link>

      <h4>{product.title.substring(0, 40)}...</h4>
      <div className="rating">
        <StarRating rating={product.rating.rate} />
        <span className="review-count" style={{ color: "black", fontSize: "14px" }}>
          ({product.rating.count})
        </span>
      </div>

      <div className="price">₹{product.price}</div>

      <div className="quantity">
        <button
          onClick={() => setQuantity(prev => prev > 1 ? prev - 1 : 1)}
        >
          -
        </button>

        <span>{quantity}</span>

        <button
          onClick={() => setQuantity(prev => prev + 1)}
        >
          +
        </button>
      </div>


      <h5>Total: ₹{totalPrice}</h5>

      <div className="row">

        <motion.button
          className="btn cart-btn col-5"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.08 }}
          onClick={() => addToCart(product, quantity)}
        >
          Add to Cart
        </motion.button>

        <motion.button
          className="btn buy-btn col-5"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.08 }}
          onClick={handleBuyNow}
        >
          Buy Now
        </motion.button>
      </div>

    </motion.div>




  );
}


export default ProductCard;
