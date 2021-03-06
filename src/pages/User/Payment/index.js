/*
Programmwe Name : Twinke Ignasius - TP054187,  Bachelor in Infomation Technology with a specialism of Mobile Technology (APU3F2105IT-MBT)
Program Name    : User / Payment / index.js
Description     : this page shows user the item on their cart and prompt user for thier reciever details and payment details before confirm placing an order
First Written on: Saturday, 20-Nov-2021
Edited on       : Tuesday, 04-Jan-2022
*/

import React, { useEffect, useState } from "react";
import "../../../assets/design/styles.css";
import SmallBanner from "../../../components/smallBanner";
import { toast, ToastContainer } from "react-toastify";
import PaymentImage from "../../../../src/assets/images/payment.jpg";
import { Container, Form, Row, Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { db } from "../../../api/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const PaymentPage = (props) => {
  //constants
  const [receiverName, setReceiverName] = useState("");
  const [receiverMobileNo, setReceiverMobileNo] = useState("");
  const [receiverAddress, setReceiverAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpirationDate, setCardExpirationDate] = useState("");
  const [cardExpirationYear, setCardExpirationYear] = useState("");
  const [cardCCV, setCardCCV] = useState("");
  const status = "Pending";
  const navigate = useNavigate();
  const [cart, setCarts] = useState([]);
  const { addOrder, currentUser, removeCart } = useAuth();
  const usersCollectionRef = collection(db, "cart");
  const q = query(usersCollectionRef, where("userId", "==", currentUser.uid));

  // function for displaying user list
  const fetchData = async () => {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const cartData = doc.data();
      cartData.id = doc.id;
      setCarts((cart) => [...cart, cartData]);
    });
  };

  //add cart item, shipping and payment details then remove cart item from firebase
  const submitPayment = () => {
    if (
      receiverName !== "" &&
      receiverMobileNo !== "" &&
      receiverAddress !== "" &&
      cardNumber !== "" &&
      cardExpirationDate !== "" &&
      cardExpirationYear !== "" &&
      cardCCV !== ""
    ) {
      const paymentDetails = {
        receiverName: receiverName,
        receiverMobileNo: receiverMobileNo,
        receiverAddress: receiverAddress,
        cardNumber: cardNumber,
        cardExpirationDate: cardExpirationDate,
        cardExpirationYear: cardExpirationYear,
        cardCCV: cardCCV,
      };
      addOrder(currentUser.uid, cart, paymentDetails, status);
      removeCart(cart);
      toast.success("Order Place!");
      let passData = {
        cart: cart,
        paymentDetails: paymentDetails,
      };
      navigate("/ordersuccessful", {
        state: passData,
      });
    } else {
      console.log("empty fill");
      toast.error("Please fill up the empty filled");
    }
  };

  //cancel payment
  const LinkBackToCart = () => {
    navigate("../AddToCart");
  };

  //render when page load
  useEffect(() => {
    console.log(props.cart);
    fetchData();
  }, []);

  //function for total amount
  function total() {
    let x = 0;
    cart.map((product) => {
      x += product.productPrice * product.quantity;
    });
    return x;
  }

  return (
    <Container fluid className="p-0 bgBaseColour">
      <ToastContainer />
      <SmallBanner />
      <Container>
        <p className="brownBoldFont pt-5 text-center">
          One Last Step to Received your -{" "}
          <p
            style={{
              display: "inline",
              color: "orange",
            }}
          >
            MealKit's{" "}
          </p>
        </p>
        {/* cart items  */}
        <div className="row">
          <table className="table table-stripped table-sm">
            <thead className="thead-light">
              <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <Image
                        src={product.productImage}
                        width={50}
                        height={50}
                        rounded
                      />
                    </td>
                    <td>{product.productName}</td>
                    <td>{product.quantity}</td>
                    <td>RM {product.quantity * product.productPrice}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div align="right">
          <p className="h5">Total Amount: RM {total()}</p>
        </div>
        {/* shipping and payment */}
        <div className="row">
          <div className="col-lg-5 p-3 justify-content-around">
            <img src={PaymentImage} alt="payment" className="w-100 h-100" />
          </div>
          <div className="col-lg-7 p-3">
            <Form autoComplete="off">
              <p className="blacksoftFont">Shipping Details</p>
              <Form.Group>
                <Form.Control
                  required
                  className="p-2 mb-3 formInputBox"
                  type="text"
                  value={receiverName}
                  placeholder="Receiver Name"
                  onChange={(event) => {
                    setReceiverName(event.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  required
                  className="p-2 mb-3 formInputBox"
                  type="text"
                  value={receiverMobileNo}
                  placeholder="Receiver Mobile Number"
                  onChange={(event) => {
                    setReceiverMobileNo(event.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  required
                  className="p-2 mb-3 formInputBox"
                  type="text"
                  value={receiverAddress}
                  placeholder="Receiver Address"
                  onChange={(event) => {
                    setReceiverAddress(event.target.value);
                  }}
                />
              </Form.Group>
              <p className="blacksoftFont pt-3">Payment Details</p>
              <Form.Group>
                <Form.Control
                  required
                  className="p-2 mb-3 formInputBox"
                  type="text"
                  value={cardNumber}
                  placeholder="Card Number"
                  onChange={(event) => {
                    setCardNumber(event.target.value);
                  }}
                />
              </Form.Group>
              <Row>
                <Form.Group as={Col} className="col-lg-4">
                  <Form.Control
                    required
                    className="p-2 mb-3 formInputBox"
                    type="text"
                    value={cardExpirationDate}
                    placeholder="Date"
                    onChange={(event) => {
                      setCardExpirationDate(event.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group as={Col} className="col-lg-4">
                  <Form.Control
                    required
                    className="p-2 mb-3 formInputBox"
                    type="text"
                    value={cardExpirationYear}
                    placeholder="Year"
                    onChange={(event) => {
                      setCardExpirationYear(event.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group as={Col} className="col-lg-4">
                  <Form.Control
                    required
                    className="p-2 mb-3 formInputBox"
                    type="text"
                    value={cardCCV}
                    placeholder="CCV"
                    onChange={(event) => {
                      setCardCCV(event.target.value);
                    }}
                  />
                </Form.Group>
              </Row>
              <Form.Group>
                <div className="row mt-3">
                  <div className="col-lg-6">
                    <button
                      className="w-100 mb-3 button btnLink"
                      type="button"
                      onClick={LinkBackToCart}
                    >
                      Cancel
                    </button>
                  </div>
                  <div className="col-lg-6">
                    <button
                      className="w-100 mb-3 button"
                      type="button"
                      onClick={submitPayment}
                    >
                      Submit Payment
                    </button>
                  </div>
                </div>
              </Form.Group>
            </Form>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default PaymentPage;
