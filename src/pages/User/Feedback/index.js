import React from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import SmallBanner from "../../../components/smallBanner";
import "../../../assets/design/styles.css";

const FeedbackPage = () => {
  const submitFeedback = () => {};
  return (
    <Container fluid className="p-0 bgBaseColour">
      <SmallBanner />
      <Container className="p-5">
        <div className="row mb-5">
          <Form>
            <Row>
              <Form.Group as={Col} controlId="formGridProductName">
                <Form.Label className="brownSoftFont">Product Name</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className="pt-5">
              <Form.Group controlId="formGridComment">
                <Form.Label className="brownSoftFont">Comment</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "200px" }}
                />
              </Form.Group>
            </Row>

            <button
              className="w-100 mb-3 button mt-5"
              onClick={submitFeedback}
              type="submit"
            >
              Update
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
