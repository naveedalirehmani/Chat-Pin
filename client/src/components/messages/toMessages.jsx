import React, { useState } from "react";
import "./tomessages.css";
// import { useSelector } from "react-redux";
import Messages from "./messages.jsx";
import Friend from "./friend.jsx";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faArrowLeft} from '@fortawesome/free-solid-svg-icons'

const ToMessages = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container-lg">
        <div className="row">
          <Friend></Friend>
          <Messages></Messages>
          <div className="col-2 right">
            <div className="link">
              <Link to="/userprofile">
                <button className="btn btn-dark btn" style={{fontSize:"0.9rem",width:"100%"}}>
                  <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> | 
                Go To Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToMessages;
