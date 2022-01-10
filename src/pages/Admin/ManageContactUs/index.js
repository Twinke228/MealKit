/*
Programmwe Name : Twinke Ignasius - TP054187,  Bachelor in Infomation Technology with a specialism of Mobile Technology (APU3F2105IT-MBT)
Program Name    : Admin / ManageContactUs/ index.js
Description     : this page allows admin to view and delete the message from user - "ContactUs Page"
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
import { propTypes } from "react-bootstrap/esm/Image";

const ManageContactUsPage = () => {
  //constants
  const [contactUs, setContactUs] = useState([]);
  const contactUsCollectionRef = collection(db, "contactUs");

  // function for displaying contact us  list
  const fetchData = async () => {
    const querySnapshot = await getDocs(contactUsCollectionRef);
    querySnapshot.forEach((doc) => {
      const contactUsData = doc.data();
      contactUsData.id = doc.id;
      setContactUs((contactus) => [...contactus, contactUsData]);
    });
  };

  //load fetchData once the page is render
  useEffect(() => {
    fetchData();
  }, []);

  //delete user
  const { deleteContactUs } = useAuth();
  const removeContactUs = async (prod) => {
    await deleteContactUs(prod.id);
    console.log("Delete Comment Successfully");
    toast.success("Delete Comment Successfully");
  };

  return (
    <Container fluid className="p-0 bgBaseColour">
      <ToastContainer />
      <SmallBanner />
      <ManageTab />
      <Container>
        <div className="row">
          <p className=" text-center pt-5 brownBoldFont">List of Contact Us</p>
          <div className="col-lg-12 p-5">
            <div className="table-wrap">
              <table className="table table-stripped table-sm">
                <thead className="thead-light">
                  <tr>
                    <th>Date and Time</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Subject</th>
                    <th>Comment</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {contactUs.map((prod) => {
                    return (
                      <tr key={prod.id}>
                        <td>{prod.contactUsDNT}</td>
                        <td>{prod.contactName}</td>
                        <td>{prod.contactEmail}</td>
                        <td>{prod.contactPhoneNo}</td>
                        <td>{prod.contactSubject}</td>
                        <td>{prod.contactComment}</td>
                        <td>
                          <Button
                            variant="danger"
                            onClick={() => {
                              removeContactUs(prod);
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

export default ManageContactUsPage;
