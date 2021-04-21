import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import post8 from "../../images/profileIcon.jpg";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
// import { Breadcrumb } from "react-bootstrap";
import { useSelector } from "react-redux";

const Navbarapp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const state = useSelector((state) => state);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="dark" dark expand="sm">
        <div className="container">
          <NavbarBrand>ChatPin</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/naveedalirehmani">
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
            <NavbarText style={{color:"white"}}>
              <img
              className="rounded"
                src={state.currentlyLoggedUser.profilePicture || post8}
                alt=""
                style={{
                  width: "2rem",
                  height: "2rem",
                  marginRight: "0.5rem",
                  objectFit: "cover",
                }}
              />
              {state.currentlyLoggedUser.name}
            </NavbarText>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Navbarapp;
