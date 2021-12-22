import React, { useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import SmallBanner from "../../../components/smallBanner";
import "../../../assets/design/styles.css";
import { useAuth } from "../../../contexts/AuthContext";
import { toast, ToastContainer } from "react-toastify";

const FeedbackPage = () => {
  //constants
  const [productName, setProductName] = useState("");
  const [productComment, setProductComment] = useState("");

  //passing details to add feedback
  const { addFeedback } = useAuth();
  const submitFeedback = async () => {
    if (productName !== "" && productComment !== "") {
      addFeedback(productName, productComment);
      console.log("Feedback successfully added");
      toast.success("Feedback successfully added");
    } else {
      console.log("Feedback submission fail");
      toast.success("Feedback submission fail");
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
                  <option>Chinese</option>
                  <option>Western</option>
                  <option>Vegetarian</option>
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
              type="submit"
            >
              Submit Feedback
            </button>
          </Form>
        </div>
        <div className="row">
          <div className="col-lg-3"> Product Name</div>
          <div className="col-lg-7"> Product Comment</div>
          <div className="col-lg-2"> Upload time and Data</div>
        </div>
      </Container>
    </Container>
  );
};

export default FeedbackPage;
