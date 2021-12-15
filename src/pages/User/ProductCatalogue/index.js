import React from "react";
import { Container } from "react-bootstrap";
import "../../../assets/design/styles.css";
import SmallBanner from "../../../components/smallBanner";
import ProductList from "../../../components/ProductCataloguePage/productList";

const ProductCataloguePage = () => {
  return (
    <Container fluid className="p-0 bgBaseColour">
      <SmallBanner />
      <Container>
        <div className="row mt-5">
          <div className="col-lg-3 d-flex justify-content-around ">
            <button onClick={() => {}}>All Category</button>
          </div>
          <div className="col-lg-3 d-flex justify-content-around ">
            <button onClick={() => {}}>Chinese</button>
          </div>
          <div className="col-lg-3 d-flex justify-content-around ">
            <button onClick={() => {}}>Western</button>
          </div>
          <div className="col-lg-3 d-flex justify-content-around ">
            <button onClick={() => {}}>Vegetarian</button>
          </div>
        </div>

        <div className="row">
          <ProductList />
        </div>
      </Container>
    </Container>
  );
};

export default ProductCataloguePage;
