/*
Programmwe Name : Twinke Ignasius - TP054187,  Bachelor in Infomation Technology with a specialism of Mobile Technology (APU3F2105IT-MBT)
Program Name    : MealKitNavbar.js
Description     : this is the main nav bar section of the MealKit web applciaiton 
First Written on: Saturday, 20-Nov-2021
Edited on       : Tuesday, 04-Jan-2022
*/

import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const MealkitNavbar = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const checkUserBeforeAcc = () => {
    if (currentUser !== null) {
      navigate("/account");
    } else {
      navigate("/");
    }
  };

  const checkUserBeforeCart = () => {
    if (currentUser !== null) {
      navigate("/addtocart");
    } else {
      navigate("/");
    }
  };

  return (
    <Navbar className="bgnav" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/home">
          <img src={Logo} alt="meal kit logo" style={{ width: "6rem" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-auto gap-3 ">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/aboutus">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/productcatalogue">Our Menu</Nav.Link>
            <Nav.Link href="/viewfeedback">Feedback</Nav.Link>
          </Nav>
          <Nav className="gap-3">
            <Nav.Link href="/search">
              {/* <FontAwesomeIcon icon={faSearch} /> */}
            </Nav.Link>
            <Nav.Link onClick={checkUserBeforeCart}>
              <FontAwesomeIcon icon={faShoppingCart} />
            </Nav.Link>
            <Nav.Link onClick={checkUserBeforeAcc}>
              <FontAwesomeIcon icon={faUser} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MealkitNavbar;
