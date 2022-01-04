/*
Programmwe Name : Twinke Ignasius - TP054187,  Bachelor in Infomation Technology with a specialism of Mobile Technology (APU3F2105IT-MBT)
Program Name    : User / ViewFeedBack / index.js
Description     : this page allows user and guess to view all the feebacks from other customer (calling a component called - ViewFeedback)
First Written on: Saturday, 20-Nov-2021
Edited on       : Tuesday, 04-Jan-2022
*/

import React from "react";
import { Container } from "react-bootstrap";
import ViewFeedback from "../../../components/feedback/viewFeedback";
import SmallBanner from "../../../components/smallBanner";

const ViewFeedbackPage = () => {
  return (
    <Container fluid className="p-0 bgBaseColour">
      <SmallBanner />
      <Container>
        <div className="row pt-5 pb-5">
          <p className="brownBoldFont text-center">
            Customers Feedback on{" "}
            <p
              style={{
                display: "inline",
                color: "orange",
              }}
            >
              Our Meal-Kits{" "}
            </p>
          </p>
          <ViewFeedback />
        </div>
      </Container>
    </Container>
  );
};

export default ViewFeedbackPage;
