import React, { useEffect } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MailIcon from "@mui/icons-material/Mail";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import ScrollTrigger from "gsap/ScrollTrigger";


export default function Footer() {
  const location = useLocation();
  const isSignupOrLogin =
    location.pathname === "/signup" ||
    location.pathname === "/login" ||
    location.pathname === "/auth";
 
  return isSignupOrLogin ? (
    ""
  ) : (
    <footer
      id="footer"
      className="flex md:flex-col justify-around items-start py-12 md:gap-16"
    >

    </footer>
  );
}
