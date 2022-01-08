/*
Programmwe Name : Twinke Ignasius - TP054187,  Bachelor in Infomation Technology with a specialism of Mobile Technology (APU3F2105IT-MBT)
Program Name    : User / ForgetPassword / index.js
Description     : this page prompt user their email then send them a link to reset their password. 
First Written on: Saturday, 20-Nov-2021
Edited on       : Tuesday, 04-Jan-2022
*/

import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import "../../../assets/design/styles.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

const ForgetPasswordPage = () => {
  const [email, setEmail] = useState("");

  const { forgetPassword } = useAuth();

  const forgetPass = () => {
    console.log(email);
    forgetPassword(email);
  };

  return (
    <Container fluid className="bgRegistration">
      <div className="row justify-center transparent">
        <p className=" text-center pt-5 brownBoldFont">Reset Password</p>
        <p className=" text-center greySoftBoldText">
          Please enter your email address to request a password reset.
        </p>
        <div
          className="row justify-center"
          style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem" }}
        >
          <div className="col-lg-4 offset-lg-4">
            <Container>
              <Form>
                <Form.Group className="mb-3" controlId="registerFormEmail">
                  <Form.Control
                    className="p-2 formInputBox"
                    type="text"
                    placeholder="Email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                    required
                  />
                </Form.Group>

                <button
                  className="w-100 mb-3 mt-3 button"
                  onClick={forgetPass}
                  type="button"
                >
                  Submit
                </button>
                <p className="text-center greySoftText mt-5">
                  Already a member?
                  <Link className="greySoftBoldText" to="/">
                    {" "}
                    Login Here!
                  </Link>
                </p>
              </Form>
            </Container>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ForgetPasswordPage;
