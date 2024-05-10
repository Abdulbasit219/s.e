import React from 'react'
import Layout from '../component/Layout'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <Layout>
      <>
        <div className="py-20 md:py-6 bg-gray-50 flex flex-col justify-center px-4 lg:px-8">
        
          {/* main heading */}
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            
            <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
              Create a new account
            </h2>
            <p className="flex flex-col mt-2 text-center text-sm leading-5 text-gray-500 max-w">
              Or
              <Link to={'/signin'} className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                login to your account
              </Link>
            </p>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              
              <form method="POST" action="#">
                
                {/* name field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-5  text-gray-700">
                    Name
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input 
                    id="name" 
                    name="name" 
                    placeholder="John Doe" 
                    type="text" 
                    required 
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />

                  </div>
                </div>
                
                {/* Email Address */}
                <div className="mt-6">
                  
                  <label 
                  htmlFor="email" 
                  className="block text-sm font-medium leading-5  text-gray-700">
                    Email address
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    
                    <input 
                    id="email" 
                    name="email" 
                    placeholder="user@example.com" 
                    type="email" 
                    required 
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />

                  </div>

                </div>

                {/* password */}
                <div className="mt-6">

                  <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">
                    Password
                  </label>
                  
                  <div className="mt-1 rounded-md shadow-sm">
                    <input id="password" name="password" type="password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                  </div>

                </div>

                {/* confirm password */}
                <div className="mt-6">
                
                  <label htmlFor="password_confirmation" className="block text-sm font-medium leading-5 text-gray-700">
                    Confirm Password
                  </label>

                  <div className="mt-1 rounded-md shadow-sm">
                    <input id="password_confirmation" name="password_confirmation" type="password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                  </div>
                
                </div>

                {/* create account btn */}
                <div className="mt-6">
                  <span className="block w-full rounded-md shadow-sm">
                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                      Create account
                    </button>
                  </span>
                </div>
              
              </form>

            </div>
          </div>

        </div>
      </>
    </Layout>
  )
}

export default SignUp