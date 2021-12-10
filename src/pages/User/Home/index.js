import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../../../components/homePage/banner";
import Category from "../../../components/homePage/category";
import "../../../assets/design/styles.css";
import Benefit from "../../../components/homePage/benefits";
import HowItWorks from "../../../components/homePage/howItWorks";

const HomePage = () => {
  return (
    <Container fluid className="p-0 bgBaseColour">
      <Banner />
      <Category />
      <Benefit />
      <HowItWorks />
    </Container>
  );
};

export default HomePage;
