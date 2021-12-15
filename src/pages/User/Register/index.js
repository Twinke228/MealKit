import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import "../../../assets/design/styles.css";

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { signup } = useAuth();

  const navigate = useNavigate();

  const registerUser = () => {
    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      phoneNumber !== "" &&
      password !== "" &&
      confirmPassword !== ""
    ) {
      signup(firstName, lastName, email, phoneNumber, password);
      navigate("/");
    }
  };

  return (
    <Container fluid className="bgRegistration">
      <div className="row justify-center transparent">
        <p className=" text-center pt-5 brownBoldFont">Registration</p>
        <div
          className="row justify-center"
          style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem" }}
        >
          <div className="col-lg-4 offset-lg-4">
            <Form>
              <Form.Group className="mb-3" controlId="registerFormFname">
                <Form.Control
                  className="p-2 formInputBox"
                  type="text"
                  placeholder="First name"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="registerFormLname">
                <Form.Control
                  className="p-2 formInputBox"
                  type="text"
                  placeholder="Last name"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="registerFormEmail">
                <Form.Control
                  className="p-2 formInputBox"
                  type="text"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="registerFormPhoneNo">
                <Form.Control
                  className="p-2 formInputBox"
                  type="text"
                  placeholder="Phone number"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="registerFormPassword">
                <Form.Control
                  className="p-2 formInputBox"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </Form.Group>
              <Form.Group className="mb-5" controlId="registerFormCnfrmPass">
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
                onClick={registerUser}
                type="submit"
              >
                Submit
              </button>

              <p className="text-center greySoftText">
                ALready a member?
                <Link className="greySoftBoldText" to="/">
                  {" "}
                  Login Here!
                </Link>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RegisterPage;
