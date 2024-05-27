import React, { useEffect, useState } from 'react'
import Layout from '../component/Layout'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import Spinner from '../component/Spinner';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartSlice.js";
import { useAuth } from '../context/auth.jsx';

const Catwisepro = () => {

  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [auth] = useAuth();

  const dispatch = useDispatch();
  const item = useSelector((state) => (state.cart))

  const getProducts = async () => {
    try {
      const { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
      if (data) {
        setProducts(data);
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleAddToCart = (product) => {
    if (!auth.user) {
      return toast.error("Please Login First to add product")
    }
    // check existing product
    const itemExists = item.some(item => item.id === product.id);
    if (itemExists) {
      toast.success('Item Already Exists in cart');
      return;
    }
    else {
      dispatch(addToCart(product))
      toast.success('Item Added successfully');
    }
  }

  useEffect(() => {
    getProducts();
  }, [])

  if (!Object.keys(products).length > 0)
    return (
      <div><Spinner /></div>
    )

  return (
    <Layout>
      <div className="bg-white" id='home-page'>
        <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">

          <div className='text-2xl font-serif font-bold text-center py-6'>
            {
              products.length < 1
                ?
                <p>No Products Found from this Category At this time</p>
                :
                <p>{products.length} Products founds from this Category</p>
            }
          </div>

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

export default Catwisepro