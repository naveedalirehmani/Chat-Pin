import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SWITCH_USER } from "../redux/actions.js";
import post6 from "../../images/profileIcon.jpg";
import { Toast } from "react-bootstrap";
import "./friend.css";

const Friend = () => {
  const state = useSelector((state) => state);
  const allFriends = [];
  const userFriends = state.users.find((element) => {
    return element.name == state.currentlyLoggedUser.name;
  });
  for (const friends of userFriends.friends) {
    state.users.filter((element) => {
      if (friends == element.name) {
        allFriends.push(element);
      }
    });
  }
  const dispatch = useDispatch();
  return (
    <div className="col-3 left">
      {allFriends.map((element) => {
        return (
          <Toast
            style={{ fontSize: "0.9rem", borderWidth: "2px" }}
            className="p-2 toast m-1"
            onClick={() => dispatch(SWITCH_USER(element.name))}
          >
            <img
              src={element.profilePicture || post6}
              className="rounded mr-2"
              alt=""
              style={{ width: "3.5rem", height: "3.5rem", objectFit: "cover" }}
            />
            <strong className="mr-auto">
              {element.name}
              {element.name == state.chattingWith ? " 👈" : ""}
            </strong>
          </Toast>
        );
      })}
    </div>
  );
};

export default Friend;
