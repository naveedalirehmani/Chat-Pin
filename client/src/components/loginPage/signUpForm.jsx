import React from "react";
import { useHistory } from "react-router-dom";
import {LOG_IN_STATUS,SIGN_UP} from '../redux/actions.js';
import { useSelector,useDispatch } from "react-redux";
import {useForm} from 'react-hook-form';

const SignUpForm = () => {
  // CREATING ROUTING HISTORY---------------------------------------------
  const history = useHistory();
  // GETTING STATE AND DISPACTCH HOOK ------------------------------------
  const dispatch = useDispatch();
  const state = useSelector(state=>state)
  // SIGNING UP USER WITH REACT-HOOK-FORM --------------------------------------
  const {register,handleSubmit,errors}= useForm();
  const onSubmit=(data)=>{
    const file = data.profilePicture[0];
    const exists = state.users.find((element)=>{
      return data.name == element.name;
    })
    if(exists){
      alert('userName already Taken Choose a unique ID')
    }else{
      base64(file)
        .then((result) => {
          data.profilePicture = result;
          dispatch(SIGN_UP(data))
          alert('YOU HAVE BEEN SIGNED UP!')
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  const base64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  return (
    <div className="col-7 align-self-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
        <h2>Sign Up</h2>
          <label for="exampleInputEmail1" className="form-label">
          User Name {errors.name && <span style={{color:'red'}}> {errors.name.message}</span>}
          </label>
          <input
            name="name"
            ref={register({required:"REQUIRED"})}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your User Name with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password 
            {errors.password && <span style={{color:'red'}}> {errors.password.message}</span>}
          </label>
          <input
            name="password"
            ref={register({required:"REQUIRED",minLength:{value:8,message:"Password Should Contain Atleast 8 Charactors"}})}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
          
        </div>
        <div className="mb-3">
          <label for="profilePicture" className="form-label">
            Choose a picture {errors.profilePicture && <span style={{color:"red"}}>{errors.profilePicture.message}</span>}
          </label>
          <input
            name="profilePicture"
            ref={register({required:"REQUIRED"})}
            type="file"
            className="form-control"
            id="profilePicture"
          />
        </div>
        <button type="submit" className="btn btn-primary mr-2 mb-2">
          SignUp
        </button>
        
      <button className="btn btn-success mb-2" type="button" onClick={()=>dispatch(LOG_IN_STATUS())}>LogIn instead</button>
      </form>
    </div>
  );
};

export default SignUpForm;
