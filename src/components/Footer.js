/*
Programmwe Name : Twinke Ignasius - TP054187,  Bachelor in Infomation Technology with a specialism of Mobile Technology (APU3F2105IT-MBT)
Program Name    : Footer.js
Description     : this is the main footer section of the web applicaiton 
First Written on: Saturday, 20-Nov-2021
Edited on       : Tuesday, 04-Jan-2022
*/

import React from "react";
import { Container } from "react-bootstrap";
import "../assets/design/styles.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container fluid className="bgFooter">
      <Container>
        <div className="row footerPad">
          <div className="col-lg-3">
            <p className="h2 mb-3">Our Mission</p>
            <p className="text-start">We change the way people eat forever</p>
          </div>
          <div className="col-lg-3">
            <p className="h2 mb-3">Get In Touch</p>
            <p className="text-start">
              Jalan Teknologi 5 Taman Teknologi Malaysia 57000 Kuala Lumpur,
              Wilayah Persekutuan Kuala Lumpur
            </p>
            <p>TP054187@mail.apu.edu.my</p>
            <p>+601122228888</p>
          </div>
          <div className="col-lg-2">
            <p className="h2 mb-3">Pages</p>
            <ul>
              <li>
                <Link to="/productcatalogue" className="linkTxtColor">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="linkTxtColor">
                  Feedback
                </Link>
              </li>
              <li>
                <Link to="/aboutus" className="linkTxtColor">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="linkTxtColor">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" className="linkTxtColor">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="linkTxtColor">
                  Register
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <p className="h2 mb-3">Location</p>
            <div className="row google-map-code">
              <iframe
                title="Asia Pacific University"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15936.569805410489!2d101.68877547676183!3d3.056530614386145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4abb795025d9%3A0x1c37182a714ba968!2sAsia%20Pacific%20University%20of%20Technology%20%26%20Innovation%20(APU)!5e0!3m2!1sen!2smy!4v1639063177383!5m2!1sen!2smy"
                width="600"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Footer;
