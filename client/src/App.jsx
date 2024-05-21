import React from "react";
// import Navbar from "./component/navbar";
// import Footer from "./component/footer";
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/SignIn'
import SignUp from './pages/SignUp'
import Singleproduct from "./pages/singleproduct"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path="/products/:id" element={<Singleproduct/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
