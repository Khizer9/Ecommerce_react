import React from 'react'
import TopNav from '../UI/TopNav'
import Footer from '../UI/Footer'
import { useData } from '../../context/ProductContext'
import { Link } from 'react-router-dom'

const Smartphone = () => {

    const {data, loading} = useData(); 

  return (
    <>
        <TopNav />

        <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header style={{textAlign: 'center'}}>
      <h2 style={{color: '#9AD1FF'}} className="text-xl font-bold text-gray-900 sm:text-5xl">
       Your Favourite Products
      </h2>

      <p className="mt-4 text-gray-500">
        Anything you want to buy!
      </p>
    </header>

    <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {loading ? data.filter((product) => product.category === 'smartphones')
         .map((product) => (
        <div key={product.id}>
        <li>
        <Link to={`/product-detail/${encodeURIComponent(JSON.stringify(product))}`}  className="group block overflow-hidden">
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
      )): 'Loading... '}
      
    </ul>
  </div>
</section>

        <Footer />
    </>
  )
}

export default Smartphone
