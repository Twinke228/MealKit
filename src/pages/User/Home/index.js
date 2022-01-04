/*
Programmwe Name : Twinke Ignasius - TP054187,  Bachelor in Infomation Technology with a specialism of Mobile Technology (APU3F2105IT-MBT)
Program Name    : User / Home / index.js
Description     : this page calls the all the component and shows on the home page 
First Written on: Saturday, 20-Nov-2021
Edited on       : Tuesday, 04-Jan-2022
*/

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
