import React, { useEffect, useState } from "react";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound";
import Navbar from "./Pages/Navbar/Navbar";
// import Login from "./pages/Login/Login";
// import Signup from "./pages/Signup/Signup";
import Footer from "./Pages/Footer/Footer";
import "./App.scss";
// import Auth from "./pages/Auth/Auth";
// import Form from "./pages/Form/Form";
// import { saveuser, logout } from "./features/User";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import About from "./pages/About/About";
// import PrivacyPolicy from "./Components/PrivacyPolicy";
// import ProtectedRoute from "./Components/ProtectedRoute";
// import Spinnerf from "./Components/Spinnerf";
// import NBFC from "./pages/NBFC/NBFC";
// import StrategicConsulting from "./pages/StrategicConsulting/StrategicConsulting";
// import OperationalExcellence from "./pages/OperationalExcellence/OperationalExcellence";
// import PrivateRoute from "./Components/PrivateRoute";
// import OtpProtected from "./Components/OtpProtected";
// import { Navigate } from "react-router-dom";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { useMediaQuery } from "react-responsive";

// gsap.registerPlugin(ScrollTrigger);
export default function App() {
  // const dispatch = useDispatch();
  // const user = JSON.parse(localStorage.getItem("user"));
  // const userdata = useSelector((state) => state.user.user);

  // useEffect(() => {
  //   if (user) {
  //     dispatch(
  //       saveuser({
  //         email: user.email,
  //         token: user.token,
  //         username: user.username,
  //         isVerified: user.isVerified,
  //       })
  //     );
  //   }
  // }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
