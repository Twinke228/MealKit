import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
} from "@firebase/auth";
import React, { useContext, useState, useEffect, createContext } from "react";
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

    // try {
    //   sendPasswordResetEmail(auth, email, {
    //     url: "http://localhost:3000/",
    //   });
    //   alert("Password reset link sent!");
    // } catch (err) {
    //   console.error(err);
    //   alert(err.message);
    // }
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
    const docRef = await updateDoc(doc(db, "products", productId), {
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

  //allows thoe function to be called later in other pages
  const value = {
    currentUser,
    deleteProduct,
    updateProduct,
    addProduct,
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
