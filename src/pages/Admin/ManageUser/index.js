/*
Programmwe Name : Twinke Ignasius - TP054187,  Bachelor in Infomation Technology with a specialism of Mobile Technology (APU3F2105IT-MBT)
Program Name    : Admin / ManageUser/ index.js
Description     : this page allows admin to view and delete the user from firebase
First Written on: Saturday, 20-Nov-2021
Edited on       : Tuesday, 04-Jan-2022
*/

import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import "../../../assets/design/styles.css";
import SmallBanner from "../../../components/smallBanner";
import ManageTab from "../../../components/AdminDashboard/manageTab";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../api/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../../contexts/AuthContext";
import { toast, ToastContainer } from "react-toastify";

const ManageUserPage = () => {
  //constants
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  // function for displaying user list
  const fetchData = async () => {
    const querySnapshot = await getDocs(usersCollectionRef);
    querySnapshot.forEach((doc) => {
      const userData = doc.data();
      userData.id = doc.id;
      setUsers((user) => [...user, userData]);
    });
  };

  //load fetchData once the page is render
  useEffect(() => {
    fetchData();
  }, []);

  //delete user
  const { deleteUser } = useAuth();
  const removeUser = async (prod) => {
    await deleteUser(prod.id);
    console.log("Delete User Successfully");
    toast.success("Delete User Successfully");
  };

  return (
    <Container fluid className="p-0 bgBaseColour">
      <ToastContainer />
      <SmallBanner />
      <ManageTab />
      <Container>
        <div className="row">
          <p className=" text-center pt-5 brownBoldFont">List of User</p>
          <div className="col-lg-12 p-5">
            <div className="table-wrap">
              <table className="table table-stripped table-sm">
                <thead className="thead-light">
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((prod) => {
                    return (
                      <tr key={prod.id}>
                        <td>{prod.firstName}</td>
                        <td>{prod.lastName}</td>
                        <td>{prod.email}</td>
                        <td>{prod.phoneNumber}</td>
                        <td>
                          <Button
                            variant="danger"
                            onClick={() => {
                              removeUser(prod);
                            }}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default ManageUserPage;
