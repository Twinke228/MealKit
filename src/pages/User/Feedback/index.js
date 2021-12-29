import React, { useEffect, useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import SmallBanner from "../../../components/smallBanner";
import "../../../assets/design/styles.css";
import { useAuth } from "../../../contexts/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import ViewFeedbacks from "../Feedback";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../api/firebase";

const FeedbackPage = () => {
  //constants
  const [productName, setProductName] = useState("");
  const [productComment, setProductComment] = useState("");
  //constants
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const productsCollectionRef = collection(db, "products");

  // function for displaying product list
  const fetchData = async () => {
    const querySnapshot = await getDocs(productsCollectionRef);
    querySnapshot.forEach((doc) => {
      const productData = doc.data();
      productData.id = doc.id;
      setProducts((product) => [...product, productData]);
    });
  };

  //load fetchData once the page is render
  useEffect(() => {
    fetchData();
  }, []);

  //passing details to add feedback
  // const { addFeedback } = useAuth();
  // const submitFeedback = async () => {
  //   if (productName !== "" && productComment !== "") {
  //     addFeedback(productName, productComment, inputDT);
  //     console.log("Feedback successfully added");
  //     toast.success("Feedback successfully added");
  //   } else {
  //     console.log("Feedback submission fail");
  //     toast.success("Feedback submission fail");
  //   }
  // };

  const datetime = () => {
    var showdate = new Date();
    var displaytodaydate =
      showdate.getDate() +
      "/" +
      showdate.getMonth() +
      "/" +
      showdate.getFullYear();
    return (
      <div>
        <input type="text" value={displaytodaydate} readOnly="true" />
      </div>
    );
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
              //onClick={submitFeedback}
              type="submit"
            >
              Submit Feedback
            </button>
          </Form>
        </div>
        {/* <ViewFeedbacks /> */}
      </Container>
    </Container>
  );
};

export default FeedbackPage;
