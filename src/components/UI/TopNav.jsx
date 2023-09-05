import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MobileNavs from "./MobileNavs";
import { useCart } from "../../context/CartContext";

const activeLink = (name, linkName) => {
  return linkName === "/" + name
    ? "text-blue-600 font-bold"
    : "text-gray-400 hover:text-gray-500";
};

const TopNav = () => {
  const {cart} = useCart();
  const linkName = useLocation().pathname;

  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

  return (
    <>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
        {/* logo */}
        <Link className="text-3xl font-bold leading-none" to="/">
          <h4 className="text-blue-800">
            E <span className="text-blue-500">commerce</span>{" "}
          </h4>
        </Link>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-blue-600 p-3"
            onClick={toggleOpen}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>

        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <Link className={`text-sm ${activeLink("", linkName)} `} to="/">
              Home
            </Link>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <Link
              to={"/products"}
              className={`text-sm ${activeLink("products", linkName)} `}
            >
              Products
            </Link>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <Link className={`text-sm ${activeLink("about-us", linkName)} `} to="/about-us">
              About
            </Link>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <Link className={`text-sm ${activeLink("contact", linkName)} `} to="/contact">
              Contact
            </Link>
          </li>
        </ul>

        

        <Link
          className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200"
          to="/login"
        >
          Sign In
        </Link>
        <Link
          className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
          to="/signup"
        >
          Sign up
        </Link>

        <Link className={`text-sm ${activeLink("contact", linkName)} `} to="/carts">
          <span class="cart-icon">
            <i class="fa fa-shopping-cart"></i>
              <span class="label">{cart.length}</span>
          </span> 
            </Link>
      </nav>

      {/* mpobile menu */}
      {open && <MobileNavs toggleOpen={toggleOpen} />}
     
    </>
  );
};

export default TopNav;
