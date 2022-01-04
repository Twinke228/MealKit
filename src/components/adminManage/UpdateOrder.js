/*
Programmwe Name : Twinke Ignasius - TP054187,  Bachelor in Infomation Technology with a specialism of Mobile Technology (APU3F2105IT-MBT)
Program Name    : UpdateOrder.js
Description     : allows admin to update order status - model 
First Written on: Saturday, 20-Nov-2021
Edited on       : Tuesday, 04-Jan-2022
*/

import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import "../../assets/design/styles.css";
import { useAuth } from "../../contexts/AuthContext";

const UpdateOrder = (props) => {
  //constants
  const [status, setStatus] = useState("");

  //render once page load
  useEffect(() => {
    if (props.orderStatus.status !== "") {
      setStatus(props.orderStatus.status);
    }
  }, [props.orderStatus.status]);

  //update order status
  const { updateOrder } = useAuth();
  const editOrder = async () => {
    if (status !== "") {
      updateOrder(props.orderStatus.id, status);
      console.log("Update Order Status Successfully");
    }
  };

  return (
    <Container>
      <Form autoComplete="off">
        <Form.Group>
          <p>{props.orderStatus.id}</p>
        </Form.Group>
        <Form.Group>
          <Form.Select
            className="p-2 mb-3 formInputBox"
            value={status}
            onChange={(event) => {
              setStatus(event.target.value);
            }}
          >
            <option>Processing</option>
            <option>Out for delivery</option>
            <option>Received</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <div className="row">
            <button
              className="w-100 mb-3 button"
              type="button"
              onClick={editOrder}
            >
              Update Order Status
            </button>
          </div>
        </Form.Group>
      </Form>
    </Container>
  );
};
export default UpdateOrder;
