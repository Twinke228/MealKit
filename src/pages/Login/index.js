import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "../../assets/design/styles.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { currentUser, login } = useAuth();
  const navigate = useNavigate();
  const loginUser = () => {
    login(email, password);
    navigate("/home");
  };

  console.log("Current User: ", currentUser);

  if (currentUser !== null) {
    navigate("/home");
  } else {
    navigate("/");
  }

  if (email !== "" && password !== "") {
    return loginUser;
  }

  return (
    <Container fluid className="bgLogin">
      <div className="row justify-center transparent">
        <div className="row justify-center padding12">
          <div className="col-lg-3 offset-lg-3">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-3 brownBoldFont">Login</Form.Label>
                <Form.Control
                  className="p-2 formInputBox"
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
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
              <Form.Group
                className="d-flex justify-content-end mb-3 "
                controlId="formBasicCheckbox"
              >
                <Link className="greySoftText" to="/">
                  Forgot Password?
                </Link>
              </Form.Group>
              <button
                className="w-100 mb-3 button"
                onClick={loginUser}
                type="submit"
              >
                Login
              </button>
              <p className="text-center greySoftText">
                Not a member yet?
                <Link className="greySoftBoldText" to="/register">
                  {" "}
                  Register Here!
                </Link>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;
