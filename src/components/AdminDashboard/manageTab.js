/*
Programmwe Name : Twinke Ignasius - TP054187,  Bachelor in Infomation Technology with a specialism of Mobile Technology (APU3F2105IT-MBT)
Program Name    : manageTab.js
Description     : admin navigation tab
First Written on: Saturday, 20-Nov-2021
Edited on       : Tuesday, 04-Jan-2022
*/

import React from "react";
import { Container } from "react-bootstrap";
import "../../assets/design/styles.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";

const ManageTab = () => {
  const navigate = useNavigate();

  //fucntions to link
  const linkManageUser = () => {
    navigate("../manageuser");
  };
  const linkManageProduct = () => {
    navigate("../manageproduct");
  };
  const linkManageOrder = () => {
    navigate("../manageorder");
  };
  const linkManageContactUs = () => {
    navigate("../managecontactus");
  };

  //admin logout
  const AdminLogout = () => {
    navigate("../");
    toast.success("logout successful");
  };

  return (
    <Container fluid className="p-0">
      <ToastContainer />
      <Container>
        <div align="right">
          <FontAwesomeIcon icon={faSignOutAlt} onClick={AdminLogout} />
        </div>
        <div className="row p-5">
          <div className="col-lg-3 text-center">
            <button
              className="w-100 mb-2  linkMngeUser linkTxtColorBold text-uppercase"
              onClick={linkManageUser}
              type="submit"
            >
              Manage User
            </button>
          </div>
          <div className="col-lg-3 text-center ">
            <button
              className="w-100 mb-2 linkMngeCat linkTxtColorBold text-uppercase"
              onClick={linkManageProduct}
              type="submit"
            >
              Manage Product
            </button>
          </div>
          <div className="col-lg-3 text-center ">
            <button
              className="w-100  mb-2 linkMngeOrder linkTxtColorBold text-uppercase"
              onClick={linkManageOrder}
              type="submit"
            >
              Manage Order
            </button>
          </div>
          <div className="col-lg-3 text-center">
            <button
              className="w-100 mb-2 linkMngeProd linkTxtColorBold text-uppercase"
              onClick={linkManageContactUs}
              type="submit"
            >
              Manage Contact Us
            </button>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default ManageTab;
