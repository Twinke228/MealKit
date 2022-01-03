import React from "react";
import { Container } from "react-bootstrap";
import "../../assets/design/styles.css";
import { useNavigate } from "react-router-dom";

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

  return (
    <Container fluid className="p-0">
      <p className="brownBoldFont"></p>
      <Container>
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
