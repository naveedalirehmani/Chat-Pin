import React, { useState } from "react";
import {LOG_IN_STATUS} from '../redux/actions.js';
import { useHistory } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import {CURRENTLY_LOGGED_USER } from '../redux/actions.js'

const LogInForm = () => {
  // USING HISTORY ----------------------------------------------------------
  const history = useHistory();
  // LOGIN CHECK ------------------------------------------------------------
  const allUsers = useSelector((state) => state);
  const dispatch = useDispatch()
  const [info, setinfo] = useState({
    name: "",
    password: "",
  });
  function handleChange(e) {
    setinfo({ ...info, [e.target.id]: e.target.value });
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    const user = allUsers.users.forEach((element)=>{
          if (element.name == info.name && element.password == info.password ){
            // dispatch(CURRENTLY_LOGGED_IN()) 
            dispatch(CURRENTLY_LOGGED_USER(element))
            history.push('/userProfile');
            return element;
        }
    })
    if(!user){
      // console.log(user,"here")
      // alert("no such user exists")
    }
  }

  return (
    <div className="col-7 align-self-center">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <h2>Log In</h2>
          <label for="exampleInputEmail1" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={handleChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your User Name with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary mr-2 mb-2">
          LogIn
        </button>
        
      <button className="btn btn-success mb-2" type="button" onClick={()=>dispatch(LOG_IN_STATUS())}>SignUp instead</button>
      </form>
    </div>
  );
};

export default LogInForm;
