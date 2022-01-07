/*
Programmwe Name : Twinke Ignasius - TP054187,  Bachelor in Infomation Technology with a specialism of Mobile Technology (APU3F2105IT-MBT)
Program Name    : updateAccount.js
Description     : this is a model that allows user to edit their profile details
First Written on: Saturday, 20-Nov-2021
Edited on       : Tuesday, 04-Jan-2022
*/

import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import "../../assets/design/styles.css";
import { useAuth } from "../../contexts/AuthContext";
import { toast, ToastContainer } from "react-toastify";

const UpdateAccount = (props) => {
  //constants
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  //render once page run
  useEffect(() => {
    console.log("USER ID", props.user);
    if (props.user.firstName !== "") {
      setFirstName(props.user.firstName);
    }
    if (props.user.lastName !== "") {
      setLastName(props.user.lastName);
    }
    if (props.user.email !== "") {
      setEmail(props.user.email);
    }
    if (props.user.phoneNumber !== "") {
      setPhoneNumber(props.user.phoneNumber);
    }
  }, [props.user]);

  //update user profile
  const { updateUser } = useAuth();
  const editAccount = async () => {
    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      phoneNumber !== ""
    ) {
      await updateUser(props.user.id, firstName, lastName, email, phoneNumber);
      console.log("successfully update user profile to firestore");
      toast.success("Your details have been successfully updated");
    } else {
      console.log("Error - unable to update user profile to firestore");
      toast.error(
        "Oops! No empty filled are allowed. Your details have not been updated"
      );
    }
  };

  return (
    <Container>
      <ToastContainer />
      <Form autoComplete="off">
        <Form.Group>
          <Form.Control
            className="p-2 mb-3 formInputBox"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            className="p-2 mb-3 formInputBox"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            className="p-2 mb-3 formInputBox"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            className="p-2 mb-3 formInputBox"
            as="textarea"
            rows={3}
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(event) => {
              setPhoneNumber(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <div className="row">
            <div>
              <button
                className="w-100 mb-3 button"
                type="button"
                onClick={editAccount}
              >
                Update Profile
              </button>
            </div>
          </div>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default UpdateAccount;
