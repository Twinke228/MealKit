import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "../../../assets/design/styles.css";
import SmallBanner from "../../../components/smallBanner";
import ProductList from "../../../components/ProductCataloguePage/productList";
import { Button } from "@mui/material";

const ProductCataloguePage = () => {
  //constants
  const [filteredCategory, setFilteredCategory] = useState("");

  return (
    <Container fluid className="p-0 bgBaseColour">
      <SmallBanner />
      <Container>
        <div className="row mt-5">
          <div className="col-lg-3 d-flex justify-content-around ">
            <Button variant="outlined" color="success">
              All Menu
            </Button>
          </div>
          <div className="col-lg-3 d-flex justify-content-around ">
            <Button
              color="success"
              variant="outlined"
              onClick={() => {
                setFilteredCategory("Chinese");
              }}
            >
              Chinese
            </Button>
          </div>
          <div className="col-lg-3 d-flex justify-content-around ">
            <Button
              color="success"
              variant="outlined"
              onClick={() => {
                setFilteredCategory("Western");
              }}
            >
              Western
            </Button>
          </div>
          <div className="col-lg-3 d-flex justify-content-around ">
            <Button
              color="success"
              variant="outlined"
              onClick={() => {
                setFilteredCategory("Vegetarian");
              }}
            >
              Vegetarian
            </Button>
          </div>
        </div>

        <div className="row">
          <ProductList category={filteredCategory} />
        </div>
      </Container>
    </Container>
  );
};

export default ProductCataloguePage;
