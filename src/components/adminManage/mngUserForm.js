import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import "../../assets/design/styles.css";
import { useAuth } from "../../contexts/AuthContext";

const MngUserForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // const [users, setUsers] = useState([]);

  const { addNewUser } = useAuth();

  const createUser = async () => {
    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      phoneNumber !== "" &&
      password !== "" &&
      confirmPassword !== ""
    ) {
      addNewUser(firstName, lastName, email, phoneNumber);
    }
  };

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(userCollectionRef);
  //     setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };

  //   getUsers();
  // });

  return (
    <Container>
      <Form autoComplete="off">
        <Form.Group>
          <Form.Control
            className="p-2 mb-3 formInputBox"
            type="text"
            placeholder="First name"
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            className="p-2 mb-3 formInputBox"
            type="text"
            placeholder="Last name"
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
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            className="p-2 mb-3 formInputBox"
            type="text"
            placeholder="Phone number"
            onChange={(event) => {
              setPhoneNumber(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            className="p-2 mb-3 formInputBox"
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            className="p-2 mb-5 formInputBox"
            type="password"
            placeholder="Confirm Password"
            onChange={(event) => {
              setConfirmPassword(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <div className="row">
            <div className="col-lg-4">
              <button
                className="w-100 mb-3 button"
                type="button"
                onClick={createUser}
              >
                Add User
              </button>
            </div>
            <div className="col-lg-4">
              <button
                className="w-100 mb-3 button"
                type="addUser"
                onClick={() => {}}
              >
                Update User
              </button>
            </div>
            <div className="col-lg-4">
              <button
                className="w-100 mb-3 button"
                type="addUser"
                onClick={() => {}}
              >
                Delete User
              </button>
            </div>
          </div>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default MngUserForm;
