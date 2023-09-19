import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./components/screens/AboutUs";
import Home from "./components/screens/Home";
import Login from "./components/screens/Login";
import Signup from "./components/screens/Signup";
import Service from "./components/screens/Service";
import Contact from "./components/screens/Contact";
import { ProductProvider } from "./context/ProductContext";
import ProductDetails from "./components/screens/ProductDetails";
import { CartProvider } from "./context/CartContext";
import CartDetails from "./components/UI/CartDetails";
import Checkout from './components/screens/Checkout'
import Smartphone from "./components/screens/Smartphone";
import Fragrance from "./components/screens/Fragrance";
import Skincare from "./components/screens/Skincare";
import Laptop from "./components/screens/Laptop";
import { Suspense, lazy } from "react";

const Products = lazy(() => import('./components/screens/Products'));

function App() {
  return (
    <CartProvider>
      <ProductProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/services" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product-detail/:id" element={<ProductDetails />} />
            <Route path="/carts" element={<CartDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/smartphone" element={<Smartphone />} />
            <Route path="/fragrance" element={<Fragrance />} />
            <Route path="/skincare" element={<Skincare />} />
            <Route path="/laptop" element={<Laptop />} />
            <Route
              path="/products"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Products />
                </Suspense>
              }
            />
          </Routes>
        </BrowserRouter>
      </ProductProvider>
    </CartProvider>
  );
}

export default App;
