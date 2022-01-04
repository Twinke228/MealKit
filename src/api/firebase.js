/*
Programmwe Name : Twinke Ignasius - TP054187,  Bachelor in Infomation Technology with a specialism of Mobile Technology (APU3F2105IT-MBT)
Program Name    : firebase.js
Description     : details of the firebase that allows the app to communicate with the firebase (SDK setup and configuration)
First Written on: Saturday, 20-Nov-2021
Edited on       : Saturday, 20-Nov-2021
*/

import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import "firebase/compat/storage";

const app = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(app);
} else {
  firebase.app();
}

const auth = getAuth();
const db = getFirestore();
const storage = firebase.storage();

export { auth, db, storage };
export default app;
