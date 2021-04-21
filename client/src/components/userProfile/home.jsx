import React, { useState } from "react";
import Navbar from "../navbar/Navbar.jsx";
import { useSelector } from "react-redux";
import PostCreate from "../post/createPosts.jsx";
import Posts from "../post/Posts.jsx";
import Routes from "../post/Routes.jsx";
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCheck } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';


const Home = () => {
  const state = useSelector((state) => state);
  const history = useHistory();
  if (state.currentlyLoggedUser==false){
    history.push('/')
  }
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <div className="row justify-content-center mt-2">
          <div className="col-2 ">
            <Link to="/Requests">
            <button className="btn btn-dark" style={{width:"100%",fontSize:"0.9rem"}}>
            <FontAwesomeIcon icon={faUserCheck}></FontAwesomeIcon> | 
            Requests
            </button>
            </Link>
          </div>
          <div
            className="col-8"
            style={{ overflowY: "scroll", height: "90vh" }}
          >
            <PostCreate></PostCreate>
            <Posts></Posts>
          </div>
          <div className="col-2">
            <Routes></Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
