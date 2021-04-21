import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { POST } from "../redux/actions.js";

const CreatePosts = () => {
  // IMPORTING STATE AND DISPATCH --------------------------------------------
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const state = useSelector((state) => state);
  // CONDITIONALLY RENDERING POST MODEL ----------------------------------------
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // SUBMITTING POST TO THE STATE AND BASE 64 CONVERSTION -----------------------
  const onSubmit = (data) => {
    const file = data.picture[0];
    base64(file)
    .then((result) => {
        data.picture = result;
        console.log(data)
        dispatch(POST(data));
        
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
    <>
      <Button
        style={{ width: "100%", fontSize: "0.9rem" }}
        variant="dark"
        onClick={handleShow}
      >
        CREATE A POST
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{state.currentlyLoggedUser.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label for="formFile" className="form-label">
              Choose A picture!
            </label>
            <input
              ref={register}
              name="picture"
              className="form-control"
              type="file"
              id="formFile"
            />
            <label for="formFile" className="form-label">
              Add a bio
            </label>
            <input
              ref={register}
              name="bio"
              className="form-control"
              type="text"
              id="bio"
            />
            <Button
              className="mr-2 mt-2"
              variant="secondary"
              onClick={handleClose}
            >
              Close
            </Button>
            <button className="btn btn-success mt-2" onClick={handleClose}>
              Post
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default CreatePosts;
