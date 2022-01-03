import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "../pages/User/Home";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/User/Register";
import AccountPage from "../pages/User/Account";
import AboutUsPage from "../pages/User/AboutUs";
import ContactPage from "../pages/User/ContactUs";
import FeedbackPage from "../pages/User/Feedback";
import ProductCataloguePage from "../pages/User/ProductCatalogue";
import IndividualProductPage from "../pages/User/IndividualProduct/Index";
import ManageUserPage from "../pages/Admin/ManageUser";
import MngProductPage from "../pages/Admin/ManageProduct";
import ForgetPasswordPage from "../pages/User/ForgetPassword";
import AddToCartPage from "../pages/User/AddToCart";
import PaymentPage from "../pages/User/Payment";
import TrackingOrderPage from "../pages/User/TrackingOrder";
import OrderSuccessfulPage from "../pages/User/OrderSuccessful";
import ManageOrderPage from "../pages/Admin/ManageOrder";
import ManageContactUsPage from "../pages/Admin/ManageContactUs";
import ViewFeedbackPage from "../pages/User/ViewFeedBack";

const MealkitRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      {/* user */}
      <Route path="register" element={<RegisterPage />} />
      <Route path="home" element={<HomePage />} />
      <Route path="account" element={<AccountPage />} />
      <Route path="aboutus" element={<AboutUsPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="feedback" element={<FeedbackPage />} />
      <Route path="viewfeedback" element={<ViewFeedbackPage />} />
      <Route path="productcatalogue" element={<ProductCataloguePage />} />
      <Route path="individualproduct" element={<IndividualProductPage />} />
      <Route path="forgetpassword" element={<ForgetPasswordPage />} />
      <Route path="addtocart" element={<AddToCartPage />} />
      <Route path="payment" element={<PaymentPage />} />
      <Route path="trackingorder" element={<TrackingOrderPage />} />
      <Route path="ordersuccessful" element={<OrderSuccessfulPage />} />

      {/* admin */}
      <Route path="manageuser" element={<ManageUserPage />} />
      <Route path="manageproduct" element={<MngProductPage />} />
      <Route path="manageorder" element={<ManageOrderPage />} />
      <Route path="managecontactus" element={<ManageContactUsPage />} />
    </Routes>
  );
};

export default MealkitRouter;
