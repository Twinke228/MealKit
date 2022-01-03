import React, { useContext, useState, useEffect, createContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
} from "@firebase/auth";
import {
  collection,
  doc,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { auth, db } from "../api/firebase";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  //constances
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  //render once page load
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });
  }, [currentUser]);

  // signup new user
  const signup = (firstName, lastName, email, phoneNumber, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setCurrentUser(user);
        setDoc(doc(db, "users", user.uid), {
          firstName: firstName,
          lastName: lastName,
          email: email,
          phoneNumber: phoneNumber,
        });
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  //login user check
  const login = (email, password) => {
    if (email === "twinke_ignasius@gmail.com" && password === "123456789") {
      toast.success("Welcome Admin - Twinke Ignasius");
      navigate("/manageuser");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Login Successfully");
        navigate("/home");
      })
      .catch((error) => {
        toast.error("Login Failed", error);
      });
  };

  //signing out user
  const logout = () => {
    signOut(auth);
  };

  //forget password
  const forgetPassword = async (email) => {
    await sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset link sent.");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //add new user to firestore
  const addNewUser = async (firstName, lastName, email, phoneNumber) => {
    await addDoc(collection(db, "users"), {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
    }).then(() => {
      toast.success("New user successfully added.");
    });
  };

  //update user
  const updateUser = async (
    userId,
    firstName,
    lastName,
    email,
    phoneNumber
  ) => {
    await updateDoc(doc(db, "users", userId), {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
    })
      .then(() => {
        console.log("Successfully update user: ", email);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //delete user
  const deleteUser = async (id) => {
    await deleteDoc(doc(db, "users", id));
  };

  //add new product to firestore
  const addProduct = async (
    productImage,
    productName,
    productPrice,
    productStock,
    productDescription,
    productCategory,
    ingredients,
    instructions
  ) => {
    const docRef = await addDoc(collection(db, "products"), {
      productImage: productImage,
      productName: productName,
      productPrice: productPrice,
      productStock: productStock,
      productDescription: productDescription,
      productCategory: productCategory,
      ingredients: ingredients,
      instructions: instructions,
    });
    console.log("Successfully added - This is the ID: ", docRef.id);
  };

  //Update product
  const updateProduct = async (
    productId,
    productImage,
    productName,
    productPrice,
    productStock,
    productDescription,
    productCategory,
    ingredients,
    instructions
  ) => {
    await updateDoc(doc(db, "products", productId), {
      productImage: productImage,
      productName: productName,
      productPrice: productPrice,
      productStock: productStock,
      productDescription: productDescription,
      productCategory: productCategory,
      ingredients: ingredients,
      instructions: instructions,
    })
      .then(() => {
        console.log("Successfully update product: ", productName);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //delete product
  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, "products", id));
  };

  //add user feedback to firestore
  const addFeedback = async (feedbackProductName, feedbackComment) => {
    // for capturing the input date and time
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January stands for 0
    var yyyy = today.getFullYear();

    var currentDate = `${mm}/${dd}/${yyyy} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

    // add data
    const docRef = await addDoc(collection(db, "feedbacks"), {
      feedbackProductName: feedbackProductName,
      feedbackComment: feedbackComment,
      feedbackDateTime: currentDate,
    });
    console.log("Successfully added - This is the ID: ", docRef.id);
  };

  //add contact us details to firestore
  const contactUs = async (
    contactName,
    contactEmail,
    contactPhoneNo,
    contactSubject,
    contactComment
  ) => {
    const docRef = await addDoc(collection(db, "contactUs"), {
      contactName: contactName,
      contactEmail: contactEmail,
      contactPhoneNo: contactPhoneNo,
      contactSubject: contactSubject,
      contactComment: contactComment,
    });
    console.log("Successfully added contact us to firestore - ", docRef.id);
  };

  //delete contact us
  const deleteContactUs = async (id) => {
    await deleteDoc(doc(db, "contactUs", id));
  };

  //add to cart
  const addToCart = async (userId, product, quantity) => {
    const docRef = await addDoc(collection(db, "cart"), {
      userId: userId,
      productId: product.id,
      productImage: product.productImage,
      productName: product.productName,
      productPrice: product.productPrice,
      quantity: quantity,
    });
    console.log(
      "Successfully added to cart - This is the cart ID: ",
      docRef.id
    );
  };

  //delete cart
  const deleteCart = async (id) => {
    await deleteDoc(doc(db, "cart", id));
  };

  //add order
  const addOrder = async (userId, cart, paymentDetails, status) => {
    await addDoc(collection(db, "orders"), {
      userId: userId,
      cart: cart,
      paymentDetails: paymentDetails,
      status: status,
    })
      .then((response) => {
        console.log("Added to Order Database Successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //delete order
  const deleteOrder = async (id) => {
    await deleteDoc(doc(db, "orders", id));
  };

  //update order status
  const updateOrder = async (orderId, status) => {
    await updateDoc(doc(db, "orders", orderId), {
      status: status,
    })
      .then(() => {
        console.log("Successfully update order status: ", status);
        toast.success("Update Order Status Successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //allows those function to be called later in other pages
  const value = {
    currentUser,
    updateOrder,
    deleteOrder,
    addOrder,
    deleteCart,
    addToCart,
    deleteContactUs,
    contactUs,
    addFeedback,
    deleteProduct,
    updateProduct,
    addProduct,
    deleteUser,
    updateUser,
    addNewUser,
    signup,
    login,
    logout,
    forgetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      <ToastContainer />
      {children}
    </AuthContext.Provider>
  );
};
