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

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  //constances
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

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
    return signInWithEmailAndPassword(auth, email, password);
  };

  //signing out user
  const logout = () => {
    signOut(auth);
  };

  //forget password
  const forgetPassword = async (email) => {
    console.log("email ", email);
    await sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset link sent!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //add new user to firestore
  const addNewUser = async (firstName, lastName, email, phoneNumber) => {
    const docRef = await addDoc(collection(db, "users"), {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
    });
    console.log("This is the ID: ", docRef.id);
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
  // const addFeedback = async (
  //   feedbackProductName,
  //   feedbackComment,
  //   feedbackDateTime
  // ) => {
  //   const docRef = await addDoc(collection(db, "feedbacks"), {
  //     feedbackProductName: feedbackProductName,
  //     feedbackComment: feedbackComment,
  //     feedbackDateTime: feedbackDateTime,
  //   });
  //   console.log("Successfully added - This is the ID: ", docRef.id);
  // };

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

  //allows thoe function to be called later in other pages
  const value = {
    currentUser,
    addToCart,
    contactUs,
    // addFeedback,
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
      {!loading && children}
    </AuthContext.Provider>
  );
};
