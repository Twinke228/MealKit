/*
Programmwe Name : Twinke Ignasius - TP054187,  Bachelor in Infomation Technology with a specialism of Mobile Technology (APU3F2105IT-MBT)
Program Name    : smallBanner.js
Description     : this is the main banner that will be shown right below the nav bar of most of the screen
First Written on: Saturday, 20-Nov-2021
Edited on       : Tuesday, 04-Jan-2022
*/

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
