/*
Programmwe Name : Twinke Ignasius - TP054187,  Bachelor in Infomation Technology with a specialism of Mobile Technology (APU3F2105IT-MBT)
Program Name    : whyUs.js
Description     : the second section of component that will be shown in the about us page - "Why Meal Kit"
First Written on: Saturday, 20-Nov-2021
Edited on       : Tuesday, 04-Jan-2022
*/

import React from "react";
import { Container } from "react-bootstrap";
import WhyChooseUs from "../../assets/images/whyChooseUs.jpg";

const WhyUs = () => {
  return (
    <Container className="mt-5">
      <div className="row">
        <div className="col-lg-6 justify-content-around">
          <p className="brownBoldFont">
            Why{" "}
            <p
              style={{
                display: "inline",
                color: "orange",
              }}
            >
              Meal Kit{" "}
            </p>
          </p>
          <div className="row">
            <div className="col-lg-6 mt-2">
              <p className="h2 mb-3 blacksoftFont">Budget</p>
              <p className="text-start">
                Helping consumers to save money with every meal.
              </p>
              <p className="h2 mb-3 blacksoftFont mt-2">Health</p>
              <p className="text-start">
                Democratizing access to high-quality food.
              </p>
            </div>
            <div className="col-lg-6 mt-2">
              <p className="h2 mb-3 blacksoftFont">Taste</p>
              <p className="text-start">
                Allowing everyone to enjoy a varied and tasty diet
              </p>
              <p className="h2 mb-3 blacksoftFont mt-2">Sustainability</p>
              <p className="text-start">
                Less food waste, C02 neutral delivery of every box
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 justify-content-around">
          <img src={WhyChooseUs} alt="meal kit logo" className="w-100 h-100" />
        </div>
      </div>
    </Container>
  );
};

export default WhyUs;
