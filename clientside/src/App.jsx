import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/auth/Register";
import LoginPage from './pages/auth/Login';
import ForgetPassword from './pages/auth/ForgetPassword'
import HomePage from "./pages/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Profile from "./pages/Profile";
// css for swiper slider
// In your root layout or component file (e.g., App.jsx or Home.jsx)
import 'swiper/css';
import 'swiper/css/pagination';
// toast notifications
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Features from "./pages/Features";
import Saved from "./pages/Saved";


function App() {
  return (
    <>
    <ToastContainer/>
    <Navbar/>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/privay-policy" element={<PrivacyPolicy/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/features" element={<Features/>}/>
        <Route path="/saved" element={<Saved/>}/>
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
