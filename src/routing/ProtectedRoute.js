import React from "react";
import MainMenu from "../menu/MainMenu";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../menu/Dashboard";
import Partner from "../menu/Partner";
// import { Login } from '../components/auth/Login'
import AuthLayout from "../components/auth/AuthLayout";
import Signin from "../components/auth/Signin";
import SignUp from "../components/auth/SignUp";
import ForgotPassword from "../components/auth/ForgotPassword";
import Appstutes from "../menu/Appstutes";
import Profile from "../menu/profile";

function ProtectedRoute() {
  return (
    <div>
      <Routes>
        <Route path="menu" element={<MainMenu />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="partners" element={<Partner />} />
          <Route path="App" element={<Appstutes />} />
          <Route path="profile" element={<Profile />} />


        </Route>
        {/* <Route path='/' element={<Login/>}/> */}
        <Route path="/" element={<AuthLayout />}>
          <Route path="/" element={<Signin />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Route>
      </Routes>
    </div>
  );
}

export default ProtectedRoute;
