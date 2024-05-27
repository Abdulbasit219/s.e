import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/SignIn';
import SignUp from './pages/SignUp';
import Singleproduct from "./pages/singleproduct";
import UserDashboard from "./component/UserDashboard";
import PrivateRoutes from "./component/routes/PrivateRoutes";
import AddToCart from "./pages/AddToCart";
import { Provider } from "react-redux"
import store from "./store/store"
import Catwisepro from "./pages/Catwisepro";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path="/products/:id" element={<Singleproduct />} />
            <Route path="/addtocart" element={<AddToCart />} />
            <Route path="/categories/:category" element={<Catwisepro />} />

            {/* //private routes nestin routing */}
            <Route path="/dashboard" element={<PrivateRoutes />}>
              <Route path="" element={<UserDashboard />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
