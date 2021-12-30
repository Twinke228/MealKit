import React, { useEffect, useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import "../../../assets/design/styles.css";
import SmallBanner from "../../../components/smallBanner";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../../contexts/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../api/firebase";
import UpdateAccount from "../../../components/UserAccount/updateAccount";

const AccountPage = () => {
  //constances
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const [user, setUser] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  // logout user
  const logoutUser = () => {
    logout();
    navigate("../");
  };

  // direct to feedback page
  const feedback = () => {
    navigate("../feedback");
  };

  //direct to tracking order
  const trackingOrder = () => {
    navigate("../trackingorder");
  };

  //fetch user details
  const fetchData = async () => {
    console.log("Fetching...");
    const docSnap = await getDoc(doc(db, "users", currentUser.uid));
    if (docSnap.exists()) {
      setUser(docSnap.data());
      setUser((prevState) => ({ ...prevState, id: currentUser.uid }));
    }
  };

  // load fetchData once page render and set user details
  useEffect(() => {
    fetchData();
  }, []);

  //edit product via Modal - react-toastify
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
            Update Menu
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* content */}
          <UpdateAccount user={user} />
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <Container fluid className="p-0 bgBaseColour">
      <SmallBanner />
      <Container className="mt-5 pb-5">
        <div className="row">
          <Container className="col-lg-3 p-5 bgp">
            <div className="row transparent ">
              <button
                className="w-100 btnLink mt-2"
                onClick={trackingOrder}
                type="submit"
              >
                Tracking Order
              </button>
              <button
                className="w-100 btnLink mt-2"
                onClick={feedback}
                type="submit"
              >
                Feedback
              </button>

              <button
                className="w-100 btnOut mt-2"
                onClick={logoutUser}
                type="submit"
              >
                Logout
              </button>
            </div>
          </Container>
          <div className="col-lg-7 mb-3">
            <Container fluid>
              <div className="row justify-center">
                <div className="col-lg-11">
                  <p className=" text-left brownBoldFont">Account</p>
                </div>
                <div className="col-lg-1">
                  <FontAwesomeIcon
                    icon={faEdit}
                    onClick={() => {
                      const clickedUser = user;
                      setUser(clickedUser);
                      setModalShow(true);
                    }}
                  />
                  <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
                <div className="row justify-center">
                  <p>
                    <b> First Name:</b> {user ? user.firstName : "Not yet"}
                  </p>
                  <p>
                    <b> Last Name:</b> {user ? user.lastName : "Not yet"}
                  </p>
                  <p>
                    <b> Email:</b> {user ? user.email : "Not yet"}
                  </p>
                  <p>
                    <b> Phone Number:</b> {user ? user.phoneNumber : "Not yet"}
                  </p>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default AccountPage;
