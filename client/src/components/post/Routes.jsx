import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {useHistory} from 'react-router-dom';
import {LOGOUT} from '../redux/actions.js';
import {useDispatch} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faSignOutAlt,faUserFriends,faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Routes = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const logOut=()=>{
    dispatch(LOGOUT())
    history.push('/')
  }
  return (
    <>
      <div>
        <Link to="/userprofile/message">
          <button
            className="btn btn-dark mt-1"
            style={{ width: "100%", fontSize: "0.9rem",textAlign:"left"}}
          >
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> |
            Messages
          </button>
        </Link>
      </div>
      <div>
        <Link to="/userprofile/findpeople">
          <button
            className="btn btn-dark mt-1"
            style={{ width: "100%", fontSize: "0.9rem",textAlign:"left"}}
          >
            <FontAwesomeIcon icon={faUserFriends}></FontAwesomeIcon> |
            Find People
          </button>
        </Link>
      </div>
      <div>
          <button
            onClick={logOut}
            className="btn btn-danger mt-1"
            style={{ width: "100%", fontSize: "0.9rem",textAlign:"left"}}
          >
            <FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon> | 
            LOGOUT
          </button>
      </div>
    </>
  );
};

export default Routes;
