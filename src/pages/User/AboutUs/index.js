/*
Programmwe Name : Twinke Ignasius - TP054187,  Bachelor in Infomation Technology with a specialism of Mobile Technology (APU3F2105IT-MBT)
Program Name    : User / AboutUs / index.js
Description     : this page calls all the about us component and display them
First Written on: Saturday, 20-Nov-2021
Edited on       : Tuesday, 04-Jan-2022
*/

import React from "react";
import { Container } from "react-bootstrap";
import "../../../assets/design/styles.css";
import SmallBanner from "../../../components/smallBanner";
import WhyUs from "../../../components/abourUsPage/whyUs";
import WeAreMealKit from "../../../components/abourUsPage/weAreMealKit";

const AboutUsPage = () => {
  return (
    <Container fluid className="p-0 bgBaseColour">
      <SmallBanner />
      <WhyUs />
      <WeAreMealKit />
    </Container>
  );
};

export default AboutUsPage;
