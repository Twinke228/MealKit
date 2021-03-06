/*
Programmwe Name : Twinke Ignasius - TP054187,  Bachelor in Infomation Technology with a specialism of Mobile Technology (APU3F2105IT-MBT)
Program Name    : User / Register / index.js
Description     : this page allows new user to create their account
First Written on: Saturday, 20-Nov-2021
Edited on       : Tuesday, 04-Jan-2022
*/

import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import "../../../assets/design/styles.css";
import { toast, ToastContainer } from "react-toastify";

const RegisterPage = () => {
  //constants
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { signup } = useAuth();

  const navigate = useNavigate();

  //passing values to signup function
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
      toast.success("Registered Successfully");
      navigate("/");
    }
  };

  return (
    <Container fluid className="bgRegistration">
      <ToastContainer />
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
                  required
                  className="p-2 formInputBox"
                  type="text"
                  placeholder="First name"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="registerFormLname">
                <Form.Control
                  required
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
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="registerFormPhoneNo">
                <Form.Control
                  required
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
                  pattern="(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}"
                  title="Must contain at least one number one special character and one uppercase and lowercase letter, and at least 8 or more characters"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-5" controlId="registerFormCnfrmPass">
                <Form.Control
                  className="p-2 formInputBox"
                  type="password"
                  placeholder="Confirm password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  pattern="(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}"
                  title="Must contain at least one number one special character and one uppercase and lowercase letter, and at least 8 or more characters and must be the same as your password"
                  required
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
                Already a member?
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
