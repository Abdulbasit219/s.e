import React, { useEffect, useState } from 'react';
import Layout from '../component/Layout';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import HeroSection from '../component/HeroSection';
import Category from '../component/Categories';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartSlice.js";

const Home = () => {

  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const item = useSelector((state) => (state.cart))

  const fetchProducts = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      if (res.data) {
        setProducts(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <Layout>

      <div>
        <HeroSection />
      </div>

      <div className='my-8'>
        <Category />
      </div>

      <div className="bg-white" id='home-page'>
        <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">

          {/* main heading */}
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center">All Latest Products</h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {
              products.map((product) => (
                <div key={product.id}>
                  <div
                    className="relative"
                  >

                    {/* image */}
                    <div className="block relative h-48 rounded overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.image}
                        className="object-contain object-center w-full h-full block"
                      />
                    </div>

                    {/* name & price */}
                    <div className="mt-4 flex justify-between">

                      {/* product name */}
                      <div>
                        <h3 className="font-bold text-gray-700">
                          <div>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0" />
                            {product.title.substring(0, 20)}...
                          </div>
                        </h3>
                      </div>

                      <p className="text-lg font-bold text-green-500">{product.price}</p>
                    </div>

                    {/* btn more details & add to cart */}
                  </div>
                  <div className='w-full flex justify-between my-2'>
                    <button className='bg-indigo-600 hover:bg-indigo-500 p-2 mx-4 rounded-lg font-bold text-white'
                      onClick={() => (handleAddToCart(product))}
                    >Add to cart</button>

                    <Link to={`/products/${product.id}`}>
                      <button
                        className='bg-indigo-600 hover:bg-indigo-500 p-2 mx-4 rounded-lg font-bold text-white'
                      >
                        More detail
                      </button>
                    </Link>
                  </div>
                </div>
              ))
            }
          </div>

        </div>

      </div>
    </Layout>
  )
}

export default Home