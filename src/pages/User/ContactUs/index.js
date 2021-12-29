import React, { useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import SmallBanner from "../../../components/smallBanner";
import "../../../assets/design/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faClock,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";
import { useAuth } from "../../../contexts/AuthContext";

const ContactPage = () => {
  //constants
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhoneNo, setContactPhoneNo] = useState("");
  const [contactSubject, setContactSubject] = useState("");
  const [contactComment, setContactComment] = useState("");

  //passing values to contactUs function
  const { contactUs } = useAuth();
  const contactForm = async () => {
    if (
      contactName !== "" &&
      contactEmail !== "" &&
      contactPhoneNo !== "" &&
      contactSubject !== "" &&
      contactComment !== ""
    ) {
      await contactUs(
        contactName,
        contactEmail,
        contactPhoneNo,
        contactSubject,
        contactComment
      );
      console.log("successfully added contactUs to firestore");
      toast.success(
        "Thank you for contacting us! We will get back to you via email soon."
      );
    } else {
      console.log("Error - unable to add contactUs to firestore");
      toast.error("Error Occured");
    }
  };

  return (
    <Container fluid className="p-0 bgBaseColour">
      <ToastContainer />
      <SmallBanner />
      <Container className="mt-5 pb-5">
        <div className="row">
          <div className="col-lg-8 mb-3">
            <p className="brownBoldFont mb-0">Have any questions?</p>
            <p className="mb-3">
              Type your question into our virtual assistant who will help you
              find an answer to your question or put you in touch with our
              friendly customer care team.
            </p>
            <div>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      onChange={(e) => setContactName(e.target.value)}
                      value={contactName}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      onChange={(e) => setContactEmail(e.target.value)}
                      value={contactEmail}
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridMobileNo">
                    <Form.Control
                      type="text"
                      placeholder="Mobile Number"
                      onChange={(e) => setContactPhoneNo(e.target.value)}
                      value={contactPhoneNo}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridSubject">
                    <Form.Control
                      type="text"
                      placeholder="Subject"
                      onChange={(e) => setContactSubject(e.target.value)}
                      value={contactSubject}
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group controlId="formGridComment">
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "200px" }}
                      onChange={(e) => setContactComment(e.target.value)}
                      value={contactComment}
                    />
                  </Form.Group>
                </Row>

                <button
                  className="w-100 mb-5 mt-5 button"
                  onClick={contactForm}
                  type="submit"
                >
                  Submit
                </button>
              </Form>
            </div>
          </div>
          <div className="col-lg-4 p-4" style={{ background: "#D6C897" }}>
            <p className="blacksoftFont">
              {" "}
              <FontAwesomeIcon icon={faMapMarkedAlt} /> Shop Address
            </p>
            <p className="text-start">
              Jalan Teknologi 5 Taman Teknologi Malaysia 57000 Kuala Lumpur,
              Wilayah Persekutuan Kuala Lumpur
            </p>
            <p className="blacksoftFont">
              {" "}
              <FontAwesomeIcon icon={faClock} /> Operating Hour
            </p>
            <p>MON - FRIDAY: 8:00 AM to 9:00 PM </p>
            <p> SAT - SUN: 10:00 AM to 8:00 PM </p>
            <p className="blacksoftFont">
              {" "}
              <FontAwesomeIcon icon={faMobileAlt} /> Contact Us
            </p>
            <p>TP054187@mail.apu.edu.my</p>
            <p>+601122228888</p>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default ContactPage;
