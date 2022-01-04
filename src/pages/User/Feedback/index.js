/*
Programmwe Name : Twinke Ignasius - TP054187,  Bachelor in Infomation Technology with a specialism of Mobile Technology (APU3F2105IT-MBT)
Program Name    : User / Feedback / index.js
Description     : this page allows user that have bought their items on MealKit to post their opinion 
First Written on: Saturday, 20-Nov-2021
Edited on       : Tuesday, 04-Jan-2022
*/

import React, { useEffect, useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import SmallBanner from "../../../components/smallBanner";
import "../../../assets/design/styles.css";
import { useAuth } from "../../../contexts/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../api/firebase";

const FeedbackPage = () => {
  //constants
  const [productName, setProductName] = useState("");
  const [productComment, setProductComment] = useState("");
  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, "products");

  // function for displaying product list
  const fetchProductData = async () => {
    const querySnapshot = await getDocs(productsCollectionRef);
    querySnapshot.forEach((doc) => {
      const feedbackData = doc.data();
      feedbackData.id = doc.id;
      setProducts((feedback) => [...feedback, feedbackData]);
    });
  };

  //load fetchData once the page is render
  useEffect(() => {
    fetchProductData();
  }, []);

  //passing details to add feedback
  const { addFeedback } = useAuth();

  const submitFeedback = async () => {
    if (productName !== "" && productComment !== "") {
      addFeedback(productName, productComment);
      console.log("Feedback successfully added");
      toast.success("Feedback successfully added");
    } else {
      console.log("Feedback submission fail");
      toast.error("Feedback submission fail, please try again.");
    }
  };

  return (
    <Container fluid className="p-0 bgBaseColour">
      <ToastContainer />
      <SmallBanner />

      <Container className="p-5">
        <div className="row mb-5">
          <Form>
            <Row>
              <Form.Group as={Col} controlId="formGridProductName">
                <Form.Label className="brownSoftFont">Product Name</Form.Label>
                <Form.Select
                  className="p-2 mb-3 formInputBox"
                  onChange={(event) => {
                    setProductName(event.target.value);
                  }}
                >
                  {products.map((prod) => {
                    return <option>{prod.productName}</option>;
                  })}
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className="pt-5">
              <Form.Group controlId="formGridComment">
                <Form.Label className="brownSoftFont">Comment</Form.Label>
                <Form.Control
                  className="p-2 mb-3 formInputBox"
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "200px" }}
                  onChange={(event) => {
                    setProductComment(event.target.value);
                  }}
                />
              </Form.Group>
            </Row>

            <button
              className="w-100 mb-3 button mt-5"
              onClick={submitFeedback}
              type="button"
            >
              Submit Feedback
            </button>
          </Form>
        </div>
      </Container>
    </Container>
  );
};

export default FeedbackPage;
