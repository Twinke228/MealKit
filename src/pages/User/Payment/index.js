import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import "../../../assets/design/styles.css";
import SmallBanner from "../../../components/smallBanner";
import { toast, ToastContainer } from "react-toastify";

const PaymentPage = (props) => {
  useEffect(() => {
    console.log(props.cart);
  }, []);
  return (
    <Container fluid className="p-0 bgBaseColour">
      <ToastContainer />
      <SmallBanner />
      <Container></Container>
    </Container>
  );
};

export default PaymentPage;
