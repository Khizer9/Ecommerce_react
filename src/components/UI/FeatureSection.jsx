import React from 'react'
import { Link } from 'react-router-dom'
import { useData } from '../../context/ProductContext'

const FeatureSection = () => {

    const {data, loading} = useData();

  return (
    <section>
  <div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
      <div class="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
        <div class="max-w-md mx-auto text-center lg:text-left">
          <header>
            <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Laptops</h2>

            <p class="mt-4 text-gray-500">
            Experience the epitome of computing excellence with our laptops. Powered by cutting-edge processors and ample RAM, these machines deliver powerful performance for all your tasks, whether it's handling complex work projects or immersing yourself in high-definition multimedia content.
            </p>
          </header>

          <Link
            to="/laptop"
            class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
          >
            Shop All
          </Link>
        </div>
      </div>

      <div class="lg:col-span-2 lg:py-8">
        <ul class="grid grid-cols-2 gap-4">
            {loading ? data.filter((item) => item.category === 'laptops').slice(0,2).map((product) => {
                return (
                    <li>
                    <Link to={`/product-detail/${encodeURIComponent(JSON.stringify(product))}`} class="block group">
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        class="object-cover w-full rounded aspect-square"
                      />
        
                      <div class="mt-3">
                        <h3
                          class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                        >
                          {product.title}
                        </h3>
        
                        <p class="mt-1 text-sm text-gray-700">PKR {product.price}</p>
                      </div>
                    </Link>
                  </li>
                )
            }) : 'loading...'}
         

          {/* <li>
            <a href="#" class="block group">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                alt=""
                class="object-cover w-full rounded aspect-square"
              />

              <div class="mt-3">
                <h3
                  class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                >
                  Simple Watch
                </h3>

                <p class="mt-1 text-sm text-gray-700">$150</p>
              </div>
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  </div>
</section>
  )
}

export default FeatureSection
