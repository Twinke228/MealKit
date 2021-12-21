import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import "../../../assets/design/styles.css";
import SmallBanner from "../../../components/smallBanner";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../../contexts/AuthContext";

const AccountPage = () => {
  //constances
  const navigate = useNavigate();
  const { logout } = useAuth();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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

  //edit personal details
  const editUserProfile = () => {
    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      phoneNumber !== "" &&
      password !== "" &&
      confirmPassword !== ""
    ) {
      navigate("/");
    }
  };

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
                  <FontAwesomeIcon icon={faEdit} />
                </div>
                <div className="row justify-center">
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        className="p-2 formInputBox"
                        type="text"
                        placeholder="First name"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        className="p-2 formInputBox"
                        type="text"
                        placeholder="Last name"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        className="p-2 formInputBox"
                        type="text"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        className="p-2 formInputBox"
                        type="text"
                        placeholder="Phone number"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        value={phoneNumber}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control
                        className="p-2 formInputBox"
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                      />
                    </Form.Group>
                    <Form.Group className="mb-5" controlId="formBasicPassword">
                      <Form.Control
                        className="p-2 formInputBox"
                        type="password"
                        placeholder="Confirm password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                      />
                    </Form.Group>
                    <button
                      className="w-100 mb-3 button"
                      onClick={editUserProfile}
                      type="submit"
                    >
                      Update
                    </button>
                  </Form>
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
