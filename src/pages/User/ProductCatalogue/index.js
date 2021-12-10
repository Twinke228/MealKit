import React from "react";
import { Container } from "react-bootstrap";
import "../../../assets/design/styles.css";
import SmallBanner from "../../../components/smallBanner";

const ProductCataloguePage = () => {
  return (
    <Container fluid className="p-0 bgBaseColour">
      <SmallBanner />
    </Container>
  );
};

export default ProductCataloguePage;
