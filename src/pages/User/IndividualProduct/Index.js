import React from "react";
import { Container } from "react-bootstrap";
import "../../../assets/design/styles.css";
import SmallBanner from "../../../components/smallBanner";
import WhyChooseUs from "../../../assets/images/whyChooseUs.jpg";
import { useNavigate } from "react-router-dom";

const IndividualProductPage = () => {
  const navigate = useNavigate();

  const addToCart = () => {
    navigate("/");
  };
  return (
    <Container fluid className="p-0 bgBaseColour">
      <SmallBanner />
      <Container className="mt-5">
        <div className="row">
          <div className="col-lg-6 justify-content-around">
            <img
              src={WhyChooseUs}
              alt="meal kit logo"
              className="w-100 h-100"
            />
          </div>

          <div className="col-lg-6 justify-content-around">
            <p className="brownBoldFont mb-0">Chicken Rice</p>
            <p className="brownBoldFont h5 pt-2">RM 8</p>
            <p className="blacksoftFont h5 pt-2">
              Description XXXXXXXXXX XXXXXXX XXXXXXXXXXXXX XXXXXXXX XXXXXXXXXXX{" "}
            </p>
            <button
              className="w-100 mb-3 btnLink"
              onClick={addToCart}
              type="submit"
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className="row pt-5  justify-content-around  ">
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
                <li>
                  {" "}
                  <p className="blacksoftFont h5 pt-2">2x Chicken</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row pt-5  justify-content-around  ">
          <div className="row ">
            <p className="brownBoldFont font-weight-bold  ">Instractions:</p>
            <div className="row">
              <div className="col-lg-3" style={{ backgroundColor: "pink" }}>
                IMAGES
              </div>
              <div className="col-lg-9" style={{ backgroundColor: "yellow" }}>
                STEPS
              </div>
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
