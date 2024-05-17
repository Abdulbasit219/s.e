import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../context/auth';

const navbar = () => {

  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [opensearch, setOpensearch] = useState(false);
  const [auth] = useAuth();

  const toggleMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  }

  const toggleSearchMenu = () => {
    setOpensearch(!opensearch);
  }


  return (
    <>
      <nav className="bg-black text-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

          {/* main logo */}
          <div className="flex lg:w-[20%]">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap px-2">
              Flowbite
            </span>
          </div>

          <div className="flex md:order-2 lg:w-[80%] justify-between items-center">


            {/* for small screen search btn */}
            <div className='md:hidden'>
              <button
                type="button"
                data-collapse-toggle="navbar-search"
                aria-controls="navbar-search"
                aria-expanded="false"
                className="text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 me-1"
                onClick={toggleSearchMenu}
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>

            {/* input search box */}
            <div className="relative hidden md:block w-[50%]">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>

              {/* search input field */}
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search..."
              />
            </div>

            {/* Burgermenu   */}
            <div>
              <button
                data-collapse-toggle="navbar-search"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 x-50"
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>

            {/* list item */}
            <ul className="flex hidden md:flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-black">

              {
                auth.user ?
                  (
                    <>
                      <li>
                        <NavLink
                          to={'/'}
                          className={({ isActive }) => `block py-2 px-3 ${isActive ? "text-blue-700" : 'text-white'} rounded md:p-0`}
                        >
                          Home
                        </NavLink>
                      </li>
                    </>
                  ) 
                  :
                  (
                    <>
                      {/* signin */}
                      < li >
                        <NavLink
                          to={'/signin'}
                          className={({ isActive }) => `block py-2 px-3 ${isActive ? "text-blue-700" : 'text-white'} rounded md:p-0`}
                        >
                          Sign In
                        </NavLink>
                      </li>
                      {/* signup */}
                      <li>
                        <NavLink
                          to={'/signup'}
                          className={({ isActive }) => `block py-2 px-3 ${isActive ? "text-blue-700" : 'text-white'} rounded  md:p-0`}
                        >
                          Sign Up
                        </NavLink>
                      </li>
                    </>
                  )
              }

              {/* cart */}
              <li>
                <NavLink
                  to={'/'}
                  className={({ isActive }) => `block py-2 px-3 ${isActive ? "text-blue-700" : 'text-white'} rounded md:p-0`}
                >
                  cart
                </NavLink>
              </li>
            </ul>

          </div>

          <div
            className="bg-black items-center justify-between w-full md:flex md:w-auto md:order-2"
            id="navbar-search"
          >

            {/* search for small screen */}
            {opensearch ? (
              <div className="relative mt-6 md:hidden">

                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>

                <input
                  type="text"
                  id="search-navbar"
                  className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none"
                  placeholder="Search..."
                />

              </div>
            ) : null}

            {
              openMobileMenu && (
                <ul className="md:flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-black">
                  <li>
                    <NavLink
                      to={'/'}
                      className={({ isActive }) => `block py-2 px-3 ${isActive ? "bg-blue-700" : 'bg-black'} rounded`}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={'/signin'}
                      className={({ isActive }) => `block py-2 px-3 ${isActive ? "bg-blue-700" : 'bg-black'} rounded`}
                    >
                      Sign In
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={'/signup'}
                      className={({ isActive }) => `block py-2 px-3 ${isActive ? "bg-blue-700" : 'bg-black'} rounded`}
                    >
                      Sign Up
                    </NavLink>
                  </li>
                </ul>
              )
            }

          </div>

        </div>

      </nav >
    </>
  )
}

export default navbar