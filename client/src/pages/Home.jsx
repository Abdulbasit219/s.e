import React, { useEffect, useState } from 'react'
import Layout from '../component/Layout'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      if (res.data) {
        console.log(res.data);
        setProducts(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [])


  return (
    <Layout >
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">

          {/* main heading */}
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center">All Latest Products</h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative">

                {/* image */}
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.image}
                    alt={product.image}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>

                {/* name & price */}
                <div className="mt-4 flex justify-between">

                  {/* product name */}
                  <div>
                    <h3 className="font-bold text-gray-700">
                      <Link>
                        <span
                          aria-hidden="true"
                          className="absolute inset-0" />
                        {product.title.substring(0,20)}...
                      </Link>
                    </h3>
                  </div>

                  <p className="text-lg font-bold text-green-500">{product.price}</p>
                </div>

                {/* btn more details & add to cart */}
                <div className='w-full flex justify-between my-2'>
                  <button className='bg-blue-500 p-2 mx-4 rounded-lg font-bold text-white hover:opacity-50'>Add to cart</button>
                  <button className='bg-blue-500 p-2 mx-4 rounded-lg font-bold text-white hover:opacity-50'>More datail</button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </Layout>
  )
}

export default Home