import React from 'react'
import { useParams } from 'react-router-dom'
import TopNav from '../UI/TopNav';
import Footer from '../UI/Footer';
import { useCart } from '../../context/CartContext';
// import { useState } from 'react';

const ProductDetails = () => {

    const { id } = useParams()
    const product = JSON.parse(decodeURIComponent(id));

    const { addToCart} = useCart();

    const handleAddToCart = () => {
      
      addToCart(product);
    };

  return (
    <>  
    <TopNav />
    
    <div style={{width: '50%'}} className="container mx-auto my-12 max-w-sm">
    <h3 style={{textAlign: 'center', fontSize: '40px', color: '#9AD1FF'}}>{product.title}</h3>
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-auto"
      />
  
      <div className="relative border border-gray-100 bg-white p-6">
        <span
          className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"
        >
          New
        </span>
  
        <h3 className="mt-4 text-lg font-medium text-gray-900">{product.title}</h3>
  
        <p className="mt-1.5 text-sm text-gray-700">{product.price}</p>
  
          <button onClick={handleAddToCart} className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105">
            Add to Cart
          </button>
      </div>
  </div>
  <Footer />
  </>
  )
}

export default ProductDetails
