import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./components/screens/AboutUs";
import Home from "./components/screens/Home";
import Login from "./components/screens/Login";
import Signup from "./components/screens/Signup";
import Service from "./components/screens/Service";
import Contact from "./components/screens/Contact";
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <ProductProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
