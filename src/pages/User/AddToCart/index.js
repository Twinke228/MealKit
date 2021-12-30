import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import "../../../assets/design/styles.css";
import SmallBanner from "../../../components/smallBanner";
import CartImage from "../../../../src/assets/images/cart.jpg";
import { useAuth } from "../../../contexts/AuthContext";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../api/firebase";
import { useLocation } from "react-router-dom";

const AddToCartPage = (props) => {
  //constants
  const [cart, setCart] = useState([]);
  const { currentUser } = useAuth();
  const q = query(
    collection(db, "cart"),
    where("userId", "==", currentUser.uid)
  );
  const { state } = useLocation();

  // fetch cart details
  const fetchCartData = async () => {
    console.log("Fetching...");
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const cartData = doc.data();
      cartData.id = doc.id;
      setCart((prevCart) => [...prevCart, cartData]);
    });
  };

  //render when page load
  useEffect(() => {
    fetchCartData();
  }, []);

  return (
    <Container fluid className="p-0 bgBaseColour">
      <SmallBanner />
      <Container>
        <p className=" text-center pt-5 brownBoldFont">Shopping Cart</p>
        <div className="row">
          <div className="col-lg-5 p-5 justify-content-around">
            <img src={CartImage} alt="cart" className="w-100 h-100" />
          </div>
          <div className="col-lg-7 p-5">
            <table className="table table-stripped table-sm">
              <thead className="thead-light">
                <tr>
                  <th>Product</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <Image
                          src={product.productImage}
                          width={50}
                          height={50}
                          rounded
                        />
                      </td>
                      <td>{product.productName}</td>
                      <td>{product.quantity}</td>
                      <td>{product.productPrice}</td>
                    </tr>
                  );
                })}
                <tr>
                  <td colSpan={2} style={{ textAlign: "center" }}>
                    {" "}
                    <button className="btnLink"> Update </button>{" "}
                  </td>
                  <td colSpan={2} style={{ textAlign: "center" }}>
                    {" "}
                    <button className="button"> Payment </button>{" "}
                  </td>
                </tr>
              </tbody>
            </table>
            <div align="left">test</div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default AddToCartPage;
