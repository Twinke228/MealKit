import React, { useEffect, useState } from "react";
import { Button, Container, Form, Image, Modal } from "react-bootstrap";
import "../../../assets/design/styles.css";
import SmallBanner from "../../../components/smallBanner";
import CartImage from "../../../../src/assets/images/cart.jpg";
import { useAuth } from "../../../contexts/AuthContext";
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../../api/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast, ToastContainer } from "react-toastify";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const AddToCartPage = (props) => {
  //constants
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const q = query(
    collection(db, "cart"),
    where("userId", "==", currentUser.uid)
  );

  // fetch cart details
  const fetchCartData = async () => {
    console.log("Fetching...");
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const cartData = doc.data();
      cartData.id = doc.id;
      setCart((prevCart) => [...prevCart, cartData]);
    });
  };

  // update quantity to firestore
  const updateQuantity = async (cartId, quant) => {
    console.log("Updating...");
    const cartDocRef = doc(db, "cart", cartId);
    await updateDoc(cartDocRef, {
      quantity: quant,
    }).then((response) => {
      console.log("Cart updated Successfully!");
      toast.success("Updated Item Quantity!");
    });
  };

  //add more item
  const LinkBackProductCatalogue = () => {
    navigate("../ProductCatalogue");
  };

  //render when page load
  useEffect(() => {
    fetchCartData();
  }, []);

  //delete cart
  const { deleteCart } = useAuth();
  const removeCart = async (product) => {
    await deleteCart(product.id);
    console.log("Delete Cart Item Successfully");
    toast.success("Delete One Item from Cart");
  };

  // function for update cart quantity model
  function UpdateCart(props) {
    const [quant, setQuant] = useState(0);

    // render when updateCart being called - model click
    useEffect(() => {
      if (props.cart) {
        setQuant(props.cart.quantity);
      }
    }, []);

    return (
      <Container>
        <ToastContainer />
        <Form autoComplete="off">
          <Form.Group>
            <Form.Control
              className="p-2 mb-3 formInputBox"
              type="number"
              value={quant}
              onChange={(e) => setQuant(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <div className="row">
              <div>
                <button
                  className="w-100 mb-3 button"
                  type="button"
                  onClick={() => {
                    updateQuantity(props.cart.id, quant);
                  }}
                >
                  Update Quantity
                </button>
              </div>
            </div>
          </Form.Group>
        </Form>
      </Container>
    );
  }

  // model - pop when user click edit cart
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
            Update Item Quantity
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateCart cart={product} />
        </Modal.Body>
      </Modal>
    );
  }

  //function for total amount
  function total() {
    let x = 0;
    cart.map((product) => {
      x += product.productPrice * product.quantity;
    });
    return x;
  }

  //proceed payment
  const ProceedPayment = (cart) => {
    navigate("../payment");
  };

  return (
    <Container fluid className="p-0 bgBaseColour">
      <ToastContainer />
      <SmallBanner />
      <Container>
        <p className=" text-center pt-5 brownBoldFont">Shopping Cart</p>
        <div className="row">
          <div className="col-lg-5 p-5 justify-content-around">
            <img src={CartImage} alt="cart" className="w-100 h-100" />
          </div>
          <div className="col-lg-7 p-5">
            <table className="table table-stripped table-sm">
              <thead className="thead-light">
                <tr>
                  <th>Product</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <Image
                          src={item.productImage}
                          width={50}
                          height={50}
                          rounded
                        />
                      </td>
                      <td>{item.productName}</td>
                      <td>{item.quantity}</td>
                      <td>RM {item.quantity * item.productPrice}</td>
                      <td>
                        <div className="col-lg-6">
                          <Button
                            variant="primary"
                            onClick={() => {
                              setProduct(item);
                              setModalShow(true);
                            }}
                          >
                            <FontAwesomeIcon icon={faEdit} />
                          </Button>
                        </div>
                        <div className="col-lg-6">
                          <Button
                            variant="danger"
                            onClick={() => {
                              removeCart(item);
                            }}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </tbody>
            </table>
            <div>
              <button
                className="btnLink mt-3"
                onClick={LinkBackProductCatalogue}
              >
                Add Cart
              </button>
            </div>
            <div align="right">
              <p className="h6 pt-3">Delivery Fee: Free of Charge</p>
              <p className="h5">Total Amount: RM {total()}</p>
              <button className="button mt-3" onClick={ProceedPayment}>
                {" "}
                Proceed Payment{" "}
              </button>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default AddToCartPage;
