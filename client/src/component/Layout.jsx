import React from 'react'
import Navbar from './navbar';
import Footer from './footer';

const Layout = ({children}) => {
  return (
    <>
    <Navbar/>
    <div className='h-auto'>
        {children}
    </div>
    <Footer/>
    </>
  )
}

export default Layout