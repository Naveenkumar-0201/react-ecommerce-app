import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import ProductDetails from "./pages/ProductDetails";
import FloatingCart from "./components/FloatingCart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import Footer from "./components/Footer";
import OfferBar from "./components/OfferBar";
import Slide from "./components/Slide";
import "./style.css";

function App() {
  const location = useLocation();

  return (
    <CartProvider>
      <Navbar />
      <Slide/>
      <OfferBar />
     
      <AnimatePresence mode="wait">
        <main>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
        </main>
      </AnimatePresence>
      

      <FloatingCart />
       <Footer /> 
    </CartProvider>
  );
}

export default App;


