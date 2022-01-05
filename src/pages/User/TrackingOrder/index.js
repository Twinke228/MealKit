/*
Programmwe Name : Twinke Ignasius - TP054187,  Bachelor in Infomation Technology with a specialism of Mobile Technology (APU3F2105IT-MBT)
Program Name    : User / TrackingOrder / index.js
Description     : this page allows user to see their order status 
First Written on: Saturday, 20-Nov-2021
Edited on       : Tuesday, 04-Jan-2022
*/

import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import "../../../assets/design/styles.css";
import SmallBanner from "../../../components/smallBanner";
import { db } from "../../../api/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useAuth } from "../../../contexts/AuthContext";

const TrackingOrderPage = () => {
  //constants
  const [orders, setOrders] = useState([]);
  const { currentUser } = useAuth();
  const ordersCollectionRef = collection(db, "orders");
  const q = query(ordersCollectionRef, where("userId", "==", currentUser.uid));

  // function for displaying order list
  const fetchOrderData = async () => {
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      return;
    }

    querySnapshot.forEach((doc) => {
      const orderData = doc.data();
      orderData.id = doc.id;
      setOrders((order) => [...order, orderData]);
    });
  };

  //total amount
  const GetTotal = ({ cart }) => {
    let total = 0;
    cart.forEach((product) => {
      total = total + product.productPrice * product.quantity;
    });
    return <p>RM {total}</p>;
  };

  //render when page load
  useEffect(() => {
    fetchOrderData();
  }, []);

  return (
    <Container fluid className="p-0 bgBaseColour">
      <SmallBanner />
      <Container>
        <p className=" text-center pt-5 brownBoldFont">Tracking Order</p>
        <div className="row p-5">
          <div className="table-wrap">
            <table className="table table-stripped table-sm ">
              <thead className="thead-light">
                <tr>
                  <th>Order ID</th>
                  <th>Product</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Total Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, i) => {
                  return (
                    <tr key={i}>
                      <td>{order.id}</td>
                      <td>
                        {order.cart.map((product, i) => {
                          return (
                            <Image
                              key={i}
                              style={{ padding: 4 }}
                              src={product.productImage}
                              width={50}
                              height={50}
                              rounded
                            />
                          );
                        })}
                      </td>
                      <td>
                        {order.cart.map((product, i) => {
                          return <p key={i}>{product.productName}</p>;
                        })}
                      </td>
                      <td>
                        {order.cart.map((product, i) => {
                          return <p key={i}>{product.quantity} set</p>;
                        })}
                      </td>
                      <td>
                        <GetTotal cart={order.cart} />
                      </td>
                      <td>
                        <p>{order.status}</p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default TrackingOrderPage;
