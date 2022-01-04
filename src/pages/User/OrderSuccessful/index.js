/*
Programmwe Name : Twinke Ignasius - TP054187,  Bachelor in Infomation Technology with a specialism of Mobile Technology (APU3F2105IT-MBT)
Program Name    : User / OrderSuccessful / index.js
Description     : this page shows user the list of orders they buy once thy have successfully place an order
First Written on: Saturday, 20-Nov-2021
Edited on       : Tuesday, 04-Jan-2022
*/

import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import "../../../assets/design/styles.css";
import SmallBanner from "../../../components/smallBanner";
import OrderImage from "../../../assets/images/hit3.jpg";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../api/firebase";
import { useAuth } from "../../../contexts/AuthContext";
import { useLocation } from "react-router-dom";

const OrderSuccessfulPage = () => {
  //constants
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);
  const { currentUser } = useAuth();
  const { state } = useLocation();
  const { cart, paymentDetails } = state;
  const q = query(
    collection(db, "orders"),
    where("userId", "==", currentUser.uid)
  );

  // fetch cart details
  const fetchOrderData = async () => {
    console.log("Fetching...");
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const orderData = doc.data();
      orderData.id = doc.id;
      setOrder((prevOrder) => [...prevOrder, orderData]);
    });
  };

  const calculateSum = () => {
    let sum = 0;
    cart.map((orderDetails) => {
      sum = sum + orderDetails.productPrice * orderDetails.quantity;
    });
    setTotal(sum);
  };

  //render when page load
  useEffect(() => {
    calculateSum();
    fetchOrderData();
    console.log(q);
  }, []);

  return (
    <Container fluid className="p-0 bgBaseColour">
      <SmallBanner />
      <Container>
        <p className=" text-center pt-5 brownBoldFont">Thank You!</p>
        <p className=" text-center greySoftText">
          your order is currently being process
        </p>
        <div className="row">
          <div className="col-lg-5 p-5 justify-content-around">
            <img src={OrderImage} alt="cart" className="w-100 h-100" />
          </div>
          <div className="col-lg-7 p-5">
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
                {cart.map((orderDetails, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <Image
                          src={orderDetails.productImage}
                          width={50}
                          height={50}
                          rounded
                        />
                      </td>
                      <td>{orderDetails.productName}</td>
                      <td>{orderDetails.quantity}</td>
                      <td>{orderDetails.productPrice}</td>
                    </tr>
                  );
                })}
                <tr>
                  <td colSpan={4} align="right" className="h4">
                    {" "}
                    Total Amount:{" RM "}
                    {total}
                  </td>
                </tr>
                <tr>
                  <td colSpan={4}>
                    <h6>
                      <b>Receiver Name:</b> {paymentDetails.receiverName}
                    </h6>
                  </td>
                </tr>
                <tr>
                  <td colSpan={4}>
                    <h6>
                      <b>Shipping Address:</b> {paymentDetails.receiverAddress}
                    </h6>
                  </td>
                </tr>
                <tr>
                  <td colSpan={4}>
                    <h6>
                      <b>Mobile Number:</b> {paymentDetails.receiverMobileNo}
                    </h6>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default OrderSuccessfulPage;
