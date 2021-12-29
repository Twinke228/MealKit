import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../../../assets/design/styles.css";
import SmallBanner from "../../../components/smallBanner";
import WhyChooseUs from "../../../assets/images/whyChooseUs.jpg";
import { useNavigate, useLocation } from "react-router-dom";

const IndividualProductPage = (props) => {
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const { state } = useLocation();

  const addToCart = () => {
    navigate("/");
  };

  return (
    <Container fluid className="p-0 bgBaseColour">
      <SmallBanner />
      <Container className="mt-5">
        <div className="row">
          <div className="col-lg-6 justify-content-around ">
            <img
              src={state.productImage}
              alt={state.productName}
              className="w-100 h-100"
            />
          </div>

          <div className="col-lg-6 justify-content-around">
            <p className="brownBoldFont mb-0">{state.productName}</p>
            <p className="brownBoldFont h5 pt-2">RM 8</p>
            <p className=" pt-2 mb-5">{state.productDescription}</p>
            <button
              className="w-100 mb-3 btnLink"
              onClick={addToCart}
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

        <div className="row pt-5  justify-content-center  ">
          <div className="row ">VIDEO</div>
        </div>
      </Container>
    </Container>
  );
};

export default IndividualProductPage;
