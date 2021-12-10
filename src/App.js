import MealkitRouter from "./navigations/MealkitRouter";
import "bootstrap/dist/css/bootstrap.min.css";
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
