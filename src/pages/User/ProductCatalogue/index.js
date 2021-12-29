import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../../../assets/design/styles.css";
import SmallBanner from "../../../components/smallBanner";
import ProductList from "../../../components/ProductCataloguePage/productList";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../api/firebase";
import Button from "../../../components/ProductCataloguePage/button";
const ProductCataloguePage = () => {
  //constants
  const productCategoryRef = collection(db, "products");

  // category filter
  const category = query(
    productCategoryRef,
    where("productCategory", "==", true)
  );

  const filter = async () => {
    const querySnapshot = await getDocs(category);
    querySnapshot.array.forEach((doc) => {
      return <Button>{querySnapshot.productCategory}</Button>;
    });
  };

  return (
    <Container fluid className="p-0 bgBaseColour">
      <SmallBanner />
      <Container>
        {filter}
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
