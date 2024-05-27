import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import Layout from "../component/Layout";
import Spinner from "../component/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartSlice.js";
import { useAuth } from '../context/auth.jsx';
import toast from "react-hot-toast";

const singleproduct = () => {

  const [singleProduct, setSingleProduct] = useState([]);
  const { id } = useParams();
  const [auth] = useAuth();

  const dispatch = useDispatch();
  const item = useSelector((state) => (state.cart))

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      if (res.data) {
        setSingleProduct(res.data);
      }
    } catch (error) {
      console.log(error);
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
    fetchProduct();
  }, [id])

  if (!Object.keys(singleProduct).length > 0)
    return (
      <div><Spinner /></div>
    )

  return (
    <Layout>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">

              {/* category: heading */}
              <h2 className="text-sm title-font text-gray-500 tracking-widest">{singleProduct?.category}</h2>

              {/* title heading */}
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{singleProduct?.title}
              </h1>

              {/* description */}
              <div className="flex mb-4">
                <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
                  {singleProduct?.description}
                </a>
              </div>

              {/* Quantity */}
              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                <span className="text-gray-500">Quantity</span>
                <span className="ml-auto text-gray-900">1</span>
              </div>

              {/* Add to cart btn and price */}
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">{singleProduct?.price}
                </span>

                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={() => (handleAddToCart(singleProduct))}>Add to Cart
                </button>

              </div>

            </div>

            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={singleProduct?.image} />

          </div>
        </div>
      </section>
    </Layout>
  )
}
export default singleproduct