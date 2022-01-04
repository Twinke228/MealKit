/*
Programmwe Name : Twinke Ignasius - TP054187,  Bachelor in Infomation Technology with a specialism of Mobile Technology (APU3F2105IT-MBT)
Program Name    : App.js
Description     : the initial file - act as a container that holds all other components
First Written on: Saturday, 20-Nov-2021
Edited on       : Tuesday, 04-Jan-2022
*/

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import MealkitRouter from "./navigations/MealkitRouter";
import MealkitNavbar from "./components/MealkitNavbar";
import Footer from "./components/Footer";
import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
  return (
    // AuthProvider -> its for the checking purpose for Firebase
    <AuthProvider>
      <MealkitNavbar />
      <MealkitRouter />
      <Footer />
    </AuthProvider>
  );
};

export default App;
