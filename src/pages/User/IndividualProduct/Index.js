import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../../../assets/design/styles.css";
import SmallBanner from "../../../components/smallBanner";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

const IndividualProductPage = (props) => {
  //constants
  const { currentUser, addToCart } = useAuth();
  const { state } = useLocation();

  return (
    <Container fluid className="p-0 bgBaseColour">
      <SmallBanner />
      <Container className="mt-5">
        <div className="row">
          <div className="col-lg-6 justify-content-around ">
            <img
              src={state.productImage}
              alt={state.productName}
              style={{
                heigth: "50%",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "50%",
              }}
            />
          </div>

          <div className="col-lg-6 justify-content-around pt-3">
            <p className="brownBoldFont mb-0">{state.productName}</p>
            <p className="brownBoldFont h5 pt-2">RM 8</p>
            <p className=" pt-2 mb-5">{state.productDescription}</p>
            <button
              className="w-100 mb-3 btnLink"
              onClick={() => {
                addToCart(currentUser.uid, state, 1);
              }}
              type="submit"
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className="row pt-5 justify-content-around  ">
          <p className="brownBoldFont text-center mb-0">
            Serving per{" "}
            <p
              style={{
                display: "inline",
                color: "orange",
              }}
            >
              Person{" "}
            </p>
          </p>

          <div className="row ">
            <p className="brownBoldFont font-weight-bold  ">Ingredients:</p>
            <div>
              <ul className="">
                {state.ingredients.map((item, id) => (
                  <li key={id}>{item.ingredients}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="row pt-5  justify-content-around  ">
          <div className="row ">
            <p className="brownBoldFont font-weight-bold  ">Instructions:</p>
            <div className="row">
              {state.instructions.map((item) => (
                <p>{item.instructions}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="row p-5 justify-content-center ">
          <div
            className="text-center"
            style={{ width: "500px", height: "400px" }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/DnNsGCX2aYc"
              title="Reference: Cookin1 (2019)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullScreen
            ></iframe>
            <p className="greySoftText">Cookin1 (2019)</p>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default IndividualProductPage;
