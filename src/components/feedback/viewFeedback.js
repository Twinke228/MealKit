/*
Programmwe Name : Twinke Ignasius - TP054187,  Bachelor in Infomation Technology with a specialism of Mobile Technology (APU3F2105IT-MBT)
Program Name    : viewFeedback.js
Description     : allows user to view all the feedback from other customer
First Written on: Saturday, 20-Nov-2021
Edited on       : Tuesday, 04-Jan-2022
*/

import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { db } from "../../api/firebase";
import { collection, getDocs } from "firebase/firestore";

const ViewFeedbacks = () => {
  //constants
  const [feedbacks, setFeedbacks] = useState([]);
  const feedbacksCollectionRef = collection(db, "feedbacks");

  // function for displaying feedback list
  const fetchData = async () => {
    const querySnapshot = await getDocs(feedbacksCollectionRef);
    querySnapshot.forEach((doc) => {
      const feedbackData = doc.data();
      feedbackData.id = doc.id;
      setFeedbacks((feedback) => [...feedback, feedbackData]);
    });
  };

  //load fetchData once the page is render
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container fluid className="p-0">
      <Container>
        <table className="table table-stripped table-sm">
          <thead className="thead-light">
            <tr>
              <th>Product Name</th>
              <th>Comments</th>
              <th>Date/Time</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((prod) => {
              return (
                <tr key={prod.id}>
                  <td>{prod.feedbackProductName}</td>
                  <td>{prod.feedbackComment}</td>
                  <td>{prod.feedbackDateTime}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Container>
    </Container>
  );
};

export default ViewFeedbacks;
