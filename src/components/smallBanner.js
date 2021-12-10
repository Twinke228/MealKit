import React from "react";
import { Container } from "react-bootstrap";
import sBanner from "../assets/images/smallBanner.JPG";

const SmallBanner = () => {
  return (
    <Container fluid className="p-0">
      <img className="d-block w-100" src={sBanner} alt="First slide" />
    </Container>
  );
};

export default SmallBanner;
