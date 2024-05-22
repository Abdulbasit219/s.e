import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/SignIn';
import SignUp from './pages/SignUp';
import Singleproduct from "./pages/singleproduct";
import UserDashboard from "./component/UserDashboard";
import PrivateRoutes from "./component/routes/PrivateRoutes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path="/products/:id" element={<Singleproduct />} />

          {/* //private routes nestin routing */}
          <Route path="/dashboard" element={<PrivateRoutes />}>
            <Route path="" element={<UserDashboard />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
