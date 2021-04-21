import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { MESSAGE, NEW_MESSAGE } from "../redux/actions.js";
import { useDispatch } from "react-redux";
import "./messageStyling.css";
// import axiosMessages from "../../axios/axiosMessage.js";
import socketIOClient from "socket.io-client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight,faArrowLeft} from '@fortawesome/free-solid-svg-icons'

const Messages = () => {
  const socket = socketIOClient("http://localhost:5000");
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  // GETTING ALL MESSAGES FROM THE SERVER

  // WITH WEB SOCKET API------------
    socket.on("allMessages", (messages) => {
      dispatch(MESSAGE(messages))
    });

  // ADDING A MESSAGE
  const { register, handleSubmit, errors, reset  } = useForm();
  const onSubmit = (data) => {
    if (state.chattingWith == false) {
      return;
    }
    data.from = state.currentlyLoggedUser.name;
    data.to = state.chattingWith;
    socket.emit('addMessage',data)
  };

  // ADDING A MESSAGE TO REDUX
  socket.on('addMessagetoRedux',(newMessage)=>{
    reset()
    dispatch(NEW_MESSAGE(newMessage));
  })
  // SCROLLING TO BOTTOM 
  
  // RENDERING CHAT MESSAGES -----------------------------------------
  const chattingWith = state.chattingWith;
  const currentMessages = state.messages.filter((element) => {
    if (
      element && element.from == state.currentlyLoggedUser.name &&
      element.to == chattingWith
    ) {
      return element;
    }
    if (
      element && element.from == chattingWith &&
      element.to == state.currentlyLoggedUser.name
    ) {
      return element;
    }
  });
  return (
    <div className="col-7 mid">
      <div className="messages">
        {chattingWith ? null : (
          <div className="noMessages">No Messages to show</div>
        )}
        {currentMessages.map((element) => {
          if (element.from == state.currentlyLoggedUser.name) {
            return <div className="grey">{element.text}</div>;
          } else {
            return <div className="blue">{element.text}</div>;
          }
        })}
      </div>
      <div className="alert">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            className="alert alert-dark alert-dismissible fade show mt-2"
            role="alert"
          >
            <input
              style={{ display: "inline", width: "80%" ,borderRadius:"20px"}}
              ref={register({ required: true })}
              type="text"
              name="text"
              className="form-control mt-2"
              id="message"
              placeholder="Hello, you can type your messages here!"
            />
            <button className="btn btn-dark m-2 rounded"><FontAwesomeIcon icon={faArrowAltCircleRight}/></button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Messages;
