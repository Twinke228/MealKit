import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/images/logo.png";

const MealkitNavbar = () => {
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
          </Nav>
          <Nav className="gap-3">
            <Nav.Link href="/search">
              <FontAwesomeIcon icon={faSearch} />
            </Nav.Link>
            <Nav.Link href="/cart">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Nav.Link>
            <Nav.Link href="/account">
              <FontAwesomeIcon icon={faUser} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MealkitNavbar;
