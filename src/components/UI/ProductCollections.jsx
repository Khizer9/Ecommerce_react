import React from 'react'
import { useData } from '../../context/ProductContext'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const ProductCollections = ({searchQuery}) => {

  const { data , loading }= useData();
  // const [filterdata, setFilterData] = useState([])

  // useEffect(() => {
  //   if(loading && data){
  //     const filter = data.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()));
  //     setFilterData(filter)
  //   } 
  // }, [loading, data, searchQuery])

  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
  <header className="text-center">
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
        Featured Products
      </h2>

      <p className="max-w-xl mx-auto mt-4 text-gray-500">
      Experience the epitome of computing excellence with our laptops. Powered by cutting-edge processors and ample RAM, these machines deliver powerful performance for all your tasks, whether it's handling complex work projects or immersing yourself in high-definition multimedia content.
      </p>
    </header>

    <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {loading ? data.slice(0, 8).map((product) => (
        <div key={product.id}>
        <li>
        <Link to={`/product-detail/${encodeURIComponent(JSON.stringify(product))}`} className="group block overflow-hidden">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative bg-white pt-3">
            <h3
              className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
            >
              {product.title}
            </h3>

            <p className="mt-2">
              <span className="sr-only"> Regular Price </span>

              <span className="tracking-wider text-gray-900"> {product.price} </span>
            </p>
          </div>
        </Link>
      </li>
      </div>
      )): "Loading..."}
      
    </ul>

   
  </div>
</section>
  )
}

export default ProductCollections
