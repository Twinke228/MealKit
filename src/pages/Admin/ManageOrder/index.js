/*
Programmwe Name : Twinke Ignasius - TP054187,  Bachelor in Infomation Technology with a specialism of Mobile Technology (APU3F2105IT-MBT)
Program Name    : Admin / ManageOrder/ index.js
Description     : this page allows admin to view and delete orders. It also contain 1 component which allows admin to edit order status
First Written on: Saturday, 20-Nov-2021
Edited on       : Tuesday, 10-Jan-2022
*/

import React, { useEffect, useState } from "react";
import { Container, Button, Image, Modal } from "react-bootstrap";
import "../../../assets/design/styles.css";
import SmallBanner from "../../../components/smallBanner";
import ManageTab from "../../../components/AdminDashboard/manageTab";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../api/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../../contexts/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import UpdateOrder from "../../../components/adminManage/UpdateOrder";
import { query, orderBy } from "firebase/firestore";

const ManageOrderPage = () => {
  //constants
  const [orders, setOrders] = useState([]);
  const [orderStatus, setOrderStatus] = useState(null);
  const ordersCollectionRef = collection(db, "orders");
  const q = query(ordersCollectionRef, orderBy("orderDNT", "desc"));
  const [modalShow, setModalShow] = useState(false);

  // function for displaying order
  const fetchData = async () => {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const ordersData = doc.data();
      ordersData.id = doc.id;
      setOrders((order) => [...order, ordersData]);
    });
  };

  // total amount
  const GetTotal = ({ cart }) => {
    let total = 0;
    cart.forEach((product) => {
      total = total + product.productPrice * product.quantity;
    });
    return <p>RM {total}</p>;
  };

  //delete order
  const { deleteOrder } = useAuth();
  const removeOrder = async (order) => {
    await deleteOrder(order.id);
    console.log("Delete Order Successfully");
    toast.success("Delete Order Successfully");
  };

  //load fetchData once the page is render
  useEffect(() => {
    fetchData();
  }, []);

  //edit product via Modal
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Order Status
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* content */}
          <UpdateOrder orderStatus={orderStatus} />
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <Container fluid className="p-0 bgBaseColour">
      <ToastContainer />
      <SmallBanner />
      <ManageTab />
      <Container>
        <div className="row">
          <p className=" text-center pt-5 brownBoldFont">List of Orders</p>
          <div className="col-lg-12 p-5">
            <div className="table-wrap">
              <table className="table table-stripped table-sm">
                <thead className="thead-light">
                  <tr>
                    <th>Order ID</th>
                    <th>Order Date</th>
                    <th>Receiver Name</th>
                    <th>Mobile No</th>
                    <th>Shipping Address</th>
                    <th>Status</th>
                    <th>Product</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Total Amount</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, i) => {
                    return (
                      <tr key={i}>
                        <td>{order.id}</td>
                        <td>{order.orderDNT}</td>
                        <td>{order.paymentDetails.receiverName}</td>
                        <td>{order.paymentDetails.receiverMobileNo}</td>
                        <td>{order.paymentDetails.receiverAddress}</td>
                        <td>{order.status}</td>
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
                          <div className="row">
                            <div className="col-lg-6">
                              <Button
                                variant="primary"
                                onClick={() => {
                                  const clickedOrder = order;
                                  setOrderStatus(clickedOrder);
                                  console.log("order status ", orderStatus);
                                  setModalShow(true);
                                }}
                              >
                                <FontAwesomeIcon icon={faEdit} />
                              </Button>
                            </div>
                          </div>
                          <Button
                            variant="danger"
                            onClick={() => {
                              removeOrder(order);
                            }}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Container>
    </Container>
  );
};

export default ManageOrderPage;
