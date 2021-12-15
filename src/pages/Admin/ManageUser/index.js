import React from "react";
import { Container } from "react-bootstrap";
import "../../../assets/design/styles.css";
import SmallBanner from "../../../components/smallBanner";
import ManageTab from "../../../components/AdminDashboard/manageTab";
import MngUserForm from "../../../components/adminManage/mngUserForm";

const ManageUserPage = () => {
  return (
    <Container fluid className="p-0 bgBaseColour">
      <SmallBanner />
      <ManageTab />
      <Container>
        <div className="row">
          <p className=" text-center pt-5 brownBoldFont">Manage User</p>
          <div className="col-lg-5 p-5">
            <MngUserForm />
          </div>
          <div className="col-lg-7 p-5">List of Users</div>
        </div>
      </Container>
    </Container>
  );
};

export default ManageUserPage;
