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
