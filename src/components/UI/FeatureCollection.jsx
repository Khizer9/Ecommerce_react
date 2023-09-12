import React from 'react'
import { Link } from 'react-router-dom'
import Skincare from '../Assets/skincare.jpg'
import Fragrance from '../Assets/fragrance.jpg'
import Smartphone from '../Assets/phone.jpg'

const FeatureCollection = () => {
  return (
    <section>
  <div className="max-w-screen-xl px-4 py-4 mx-auto sm:px-6 sm:py-12 lg:px-8">
    <header className="text-center">
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
        New Collection
      </h2>

      <p className="max-w-md mx-auto mt-4 text-gray-500">
      Step into a world of timeless sophistication and modern charm with our brand-new collection, "Elegance Redefined."
      </p>
    </header>

    <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
      <li>
        <Link to="/skincare" className="relative block group">
          <img
            src={Skincare}
            alt=""
            className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
          />

          <div
            className="absolute inset-0 flex flex-col items-start justify-end p-6"
          >
            <h3 className="text-xl font-medium text-white">Skincare</h3>

            <span
              className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              Shop Now
            </span>
          </div>
        </Link>
      </li>

      <li>
        <Link to="/fragrance" className="relative block group">
          <img
            src={Fragrance}
            alt=""
            className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
          />

          <div
            className="absolute inset-0 flex flex-col items-start justify-end p-6"
          >
            <h3 className="text-xl font-medium text-white">Fragrances</h3>

            <span
              className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              Shop Now
            </span>
          </div>
        </Link>
      </li>

      <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
        <Link to="/smartphone" className="relative block group">
          <img
            src={Smartphone}
            alt=""
            className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
          />

          <div
            className="absolute inset-0 flex flex-col items-start justify-end p-6"
          >
            <h3 className="text-xl font-medium text-white">Smartphones</h3>

            <span
              className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              Shop Now
            </span>
          </div>
        </Link>
      </li>
    </ul>
  </div>
</section>
  )
}

export default FeatureCollection
