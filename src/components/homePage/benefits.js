import React from "react";
import { Container } from "react-bootstrap";
import "../../assets/design/styles.css";

const Benefit = () => {
  return (
    <Container fluid className="mt-5" style={{ background: "#D6C897" }}>
      <Container>
        <div className="row footerPad">
          <div className="col-lg-3">
            <p className="h2 mb-3 blacksoftFont">Fast Delivery</p>
            <p className="text-start">
              We provides the fresh ingredients to your doorstep.
            </p>
          </div>
          <div className="col-lg-3">
            <p className="h2 mb-3 blacksoftFont">Value for Money</p>
            <p className="text-start">
              We work closely with our trusted suppliers to source fresh,
              high-quality ingredients for your box.
            </p>
          </div>
          <div className="col-lg-3">
            <p className="h2 mb-3 blacksoftFont">Time Saver</p>
            <p className="text-start">
              We deliver everthing you need to create delicious dinner from
              scratch so you spend less time shopping!
            </p>
          </div>
          <div className="col-lg-3">
            <p className="h2 mb-3 blacksoftFont">Balance Footprint</p>
            <p className="text-start">
              HelloFresh is the first global carbon-neutral meal kit company,
              supporting global and local environmentally-friendly projects you
              care about.
            </p>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Benefit;
