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
