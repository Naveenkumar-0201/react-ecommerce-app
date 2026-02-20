import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function OfferSlider() {
  const offers = [
    "🔥 50% OFF on Electronics!",
    "🚚 Free Delivery on Orders Above ₹999",
    "💳 Extra 10% Cashback on Credit Cards",
    "🎉 Buy 1 Get 1 Free on Fashion"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % offers.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="offer">
    <div className="offer-slider">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="offer-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {offers[index]}
        </motion.div>
      </AnimatePresence>
    </div>
    </div>
  );
}

export default OfferSlider;
