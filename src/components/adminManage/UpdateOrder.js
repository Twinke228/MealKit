import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "../../assets/design/styles.css";
import { useAuth } from "../../contexts/AuthContext";
import { List, ListItem, ListItemText } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

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
