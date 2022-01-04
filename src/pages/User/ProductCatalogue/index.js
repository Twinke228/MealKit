/*
Programmwe Name : Twinke Ignasius - TP054187,  Bachelor in Infomation Technology with a specialism of Mobile Technology (APU3F2105IT-MBT)
Program Name    : User / ProductCatalogue / index.js
Description     : this page shows all the list product available base on the selected button select
First Written on: Saturday, 20-Nov-2021
Edited on       : Tuesday, 04-Jan-2022
*/

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
