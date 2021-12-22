import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import "../../../assets/design/styles.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { toast, ToastContainer } from "react-toastify";

const ForgetPasswordPage = () => {
  const [email, setEmail] = useState("");

  const { forgetPassword } = useAuth();

  const forgetPass = () => {
    console.log(email);
    forgetPassword(email);
    // forgetPassword(email)
    //   .then((response) => {
    //     console.log(response);
    //     toast.success("Email sent, please check your email");
    //   })
    //   .catch((e) => console.log("error"));
  };

  return (
    <Container fluid className="bgRegistration">
      <ToastContainer />
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
                    required
                    className="p-2 formInputBox"
                    type="text"
                    placeholder="Email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
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
