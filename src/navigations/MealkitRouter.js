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
      <Route path="productcatalogue" element={<ProductCataloguePage />} />
      <Route path="individualproduct" element={<IndividualProductPage />} />
      <Route path="forgetpassword" element={<ForgetPasswordPage />} />
      <Route path="addtocart" element={<AddToCartPage />} />

      {/* admin */}
      <Route path="manageuser" element={<ManageUserPage />} />
      <Route path="manageproduct" element={<MngProductPage />} />
    </Routes>
  );
};

export default MealkitRouter;
