/*
Programmwe Name : Twinke Ignasius - TP054187,  Bachelor in Infomation Technology with a specialism of Mobile Technology (APU3F2105IT-MBT)
Program Name    : weAreMealKit.js
Description     : the first section of component that will be shown in the about us page - " Video - We Are Meal Kit"
First Written on: Saturday, 20-Nov-2021
Edited on       : Tuesday, 04-Jan-2022
*/

import React from "react";
import { Container } from "react-bootstrap";
import "../../assets/design/styles.css";

const WeAreMealKit = () => {
  return (
    <Container className="mt-5">
      <div className="row">
        <div className="col-lg-6 justify-content-around">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/t6znOolXG34"
            title="Reference: Hello Fresh YouTube Video (2017)"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <p className="greySoftText">Hello Fresh (2017)</p>
        </div>
        <div className="col-lg-6 justify-content-around mt-5">
          <p className="greySoftText mb-0">Since Year 2021</p>
          <p className="brownBoldFont">
            We Are{" "}
            <p
              style={{
                display: "inline",
                color: "orange",
              }}
            >
              Meal Kit{" "}
            </p>
          </p>
          <p>
            In all our active markets, we aim to provide every household with
            wholesome, homemade meals - no shopping and no hassle.
          </p>
          <p>
            Everything required for delicious meals is carefully planned,
            carefully sourced and delivered to the front door of each customer
            at the time most convenient for them.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default WeAreMealKit;
