import React, { useState } from "react";
import Navbar from "../navbar/Navbar.jsx";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {FRIEND_REQUESTS } from "../redux/actions.js";
import post8 from "../../images/profileIcon.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Findpeople = () => {
  const dispatch = useDispatch();
  // IMPORTING STATE -----------------------------------------------------------------
  const state = useSelector((state) => state);
  // SENDING FRIEND REQUESTS --------------------------------------------------------
  const sendRequest = (user) => {
    dispatch(FRIEND_REQUESTS(user));
  };
  // SEARCH RESULTS-----------------------------------------------------------------

  const [filteredUsers, setfilterdUsers] = useState([...state.users]);

  const handleSearch = (e) => {
    const searchArray = state.users.filter((element) => {
      return element.name.includes(e.target.value);
    });
    setfilterdUsers(searchArray);
  };
  const user = state.users.find((element)=>{
    return element.name == state.currentlyLoggedUser.name
  })
  return (
    <>
      <Navbar></Navbar>
      <div className="container" style={{ textAlign: "right" }}>
        <Link to="/userprofile">
          <button className="btn btn-dark mt-2">
          <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> | 
            Go to Home</button>
        </Link>
        <input
          placeholder="search for people here!"
          type="text"
          className="form-control mt-2"
          onChange={(e) => handleSearch(e)}
        />
        <div
          className="mt-2 d-flex flex-wrap justify-content-center"
        >
          {filteredUsers.map((element) => {
            if (element.name == state.currentlyLoggedUser.name) {
              return;
            }
            for(let friends of user.friends){
              if(friends == element.name){
                return;
              }
            }
            for(let requests of element.requests){
              if(requests == state.currentlyLoggedUser.name){
                return (
                  <div
                    className="card m-2"
                    style={{ width: "16rem", boxShadow: "0px 0px 3px grey",height:"22rem",textAlign:"center" }}
                  >
                      <img src={element.profilePicture || post8} className="card-img-top" style={{width:"100%",height:"15rem",objectFit:"cover"}}/>
                    <div className="card-body">
                      <h5 className="card-title">{element.name}</h5>
                      <button
                        className="btn btn-primary"
                      >
                        Request Sent
                      </button>
                    </div>
                  </div>
                );
              }else{
              }
            }
            return (
              <div
                className="card m-2"
                style={{ width: "16rem", boxShadow: "0px 0px 3px grey",height:"22rem",textAlign:"center" }}
              >
                  <img src={element.profilePicture || post8} className="card-img-top" style={{width:"100%",height:"15rem",objectFit:"cover"}}/>
                <div className="card-body">
                  <h5 className="card-title">{element.name}</h5>
                  <button
                    onClick={() => sendRequest(element)}
                    className="btn btn-primary"
                  >
                    Add Friend
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

export default Findpeople;
