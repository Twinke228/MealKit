/*
Programmwe Name : Twinke Ignasius - TP054187,  Bachelor in Infomation Technology with a specialism of Mobile Technology (APU3F2105IT-MBT)
Program Name    : howItWorks.js
Description     : the fourth section of home page which shows "How it works"
First Written on: Saturday, 20-Nov-2021
Edited on       : Tuesday, 04-Jan-2022
*/

import React from "react";
import { Card, Container } from "react-bootstrap";
import "../../assets/design/styles.css";
import Hit1 from "../../assets/images/hit1.jpg";
import Hit2 from "../../assets/images/hit2.jpg";
import Hit3 from "../../assets/images/hit3.jpg";
import Hit4 from "../../assets/images/hit4.jpg";

const HowItWorks = () => {
  return (
    <Container className="mt-5">
      <p className="brownBoldFont text-center mb-0">
        How it{" "}
        <p
          style={{
            display: "inline",
            color: "orange",
          }}
        >
          Works{" "}
        </p>
      </p>
      <p className="text-center p-0">
        Choose recipes / Pre-measured ingredients / Delivered
      </p>
      <div className="row pb-5 pt-3">
        <div className="col-lg-3 mt-2">
          <Card>
            <Card.Img variant="top" src={Hit1} />
            <Card.Body>
              <Card.Title className="brownBoldFontSmall fw-bold">
                Choose your meals
              </Card.Title>
              <Card.Text>
                Curated, easy-to-follow the recipes for every week which is
                customisable by you.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-3 mt-2">
          <Card>
            <Card.Img variant="top" src={Hit2} />
            <Card.Body>
              <Card.Title className="brownBoldFontSmall fw-bold">
                Create the perfect box
              </Card.Title>
              <Card.Text>
                Suit your lifestyle with a variety of Extras, including snacks,
                sides and fruit box.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-3 mt-2">
          <Card>
            <Card.Img variant="top" src={Hit3} />
            <Card.Body>
              <Card.Title className="brownBoldFontSmall fw-bold">
                Get convenient weekly deliveries
              </Card.Title>
              <Card.Text>
                Scheduling made easy, with drop-offs right at your door.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-3 mt-2">
          <Card>
            <Card.Img variant="top" src={Hit4} />
            <Card.Body>
              <Card.Title className="brownBoldFontSmall fw-bold">
                Cook seasonal, fresh ingredients
              </Card.Title>
              <Card.Text>
                Food made from scratch in the comfort of your kitchen.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default HowItWorks;
