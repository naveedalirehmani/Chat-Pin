import React, { useState } from "react";
import { useSelector } from "react-redux";
import Login from "./logInForm.jsx";
import SignUp from "./signUpForm.jsx";
import Navbar from "../navbar/Navbar.jsx";

const LogginPage = () => {
  const islogIn = useSelector((state) => state.isLogIn);
  // console.log(islogIn)
  return (
    <>
      <Navbar></Navbar>
      <div class="container mt-5 pt-5">
        <div class="row justify-content-center">
          {islogIn ? <Login></Login> : <SignUp></SignUp>}
        </div>
      </div>
    </>
  );
};

export default LogginPage;
