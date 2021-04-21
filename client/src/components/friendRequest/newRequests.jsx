import React from "react";
import { useSelector,useDispatch } from "react-redux";
import Navbar from "../navbar/Navbar.jsx";
import post8 from "../../images/profileIcon.jpg";
import {Link} from 'react-router-dom';
import {ACCEPT_REQUEST} from '../redux/actions.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const NewRequests = () => {
  const state = useSelector((state) => state);
  // ACCEPTING FRIEND REQUEST --------------------------------------------------
  const dispatch = useDispatch();
  const acceptRequest=(userName)=>{
    dispatch(ACCEPT_REQUEST(userName));
  }
  const user = state.users.find((element)=>{
    return element.name == state.currentlyLoggedUser.name
  })
  return (
    <>
      <Navbar></Navbar>
      <div className="container ">
          <div style={{textAlign:"right"}}>
      <Link to="/userprofile">
          <button className="btn btn-dark mt-2">
          <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> | 
            Go to Home</button>
        </Link>
          </div>
          <div 
          className="mt-2 d-flex flex-wrap"
          style={{ textAlign: "left",textAlign:"center" }}>
        {user.requests.map((element) => {
          return (
            <div
              className="card m-2"
              style={{ width: "16rem", boxShadow: "0px 0px 3px grey" }}
            >
                <img src={post8} className="card-img-top" alt=""/>
              <div className="card-body">
                <h5 className="card-title">{element}</h5>
                <button
                onClick={()=>acceptRequest(element)}
                  className="btn btn-primary"
                >
                  Accept
                </button>
              </div>
            </div>
          );
        })}
        

          </div>
      </div>
    </>
  );
};

export default NewRequests;
