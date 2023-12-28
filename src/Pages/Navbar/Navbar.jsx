import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TfiAlignLeft } from "react-icons/tfi";
import { saveuser, logout } from "../../features/User";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { useNavigate, useLocation } from "react-router-dom";
import {
  faBars,
  faCancel,
  faCartShopping,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
// import {
//   Dropdown,
//   DropdownTrigger,
//   DropdownMenu,
//   DropdownSection,
//   DropdownItem,
// } from "@nextui-org/react";
// import { Button } from "@nextui-org/react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [menu, setmenu] = useState(false);
  const user = useSelector((state) => state.user.user);

  const logoutf = async () => {
    dispatch(logout());
    localStorage.clear();
    window.location.href = "/";
  };

  const isSignupOrLogin =
    location.pathname === "/signup" ||
    location.pathname === "/login" ||
    location.pathname === "/auth";

  const menuf = () => {
    setmenu(!menu);
  };

  const isActiveTab = (path) => {
    return location.pathname === path;
  };
  const mobilenavf = (link) => {
    navigate(`/${link}`);
    setmenu(!menu);
  };
  return isSignupOrLogin ? (
    ""
  ) : (
    <nav
      id="navbar"
      className="fixed top-0 left-0 w-screen flex justify-around lg:justify-between md:justify-between items-center py-6 lg:px-8 z-50 md:px-6"
    >
      <TfiAlignLeft
        className={`hidden cursor-pointer md:block text-white ${
          !menu ? "block" : "hidden"
        }`}
        onClick={menuf}
      />

      {menu ? (
        <>
          <div
            className="fixed w-screen h-screen top-0 left-0 z-30"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.353)" }}
            onClick={menuf}
          />
          <ul
            className="flex flex-col fixed z-50 justify-center gap-12 left-0 top-0 items-center text-white"
            style={{
              width: "70vw",
              height: "100vh",
              backgroundColor: "#242420",
            }}
          >
            <FaXmark
              className={`z-50 absolute cursor-pointer  top-10 text-white left-5 ${
                menu ? "block" : "hidden"
              }`}
              onClick={menuf}
            />
            <li>
              <a href="/#about" onClick={menuf}>
                About us
              </a>
            </li>
            <li>
              <a href="/#HowtoClaim" onClick={menuf}>
                How to Claim
              </a>
            </li>
            <li>
              <a href="/#Tokenism" onClick={menuf}>
                Tokenism
              </a>
            </li>
            <li>
              <a href="/#Roadmap" onClick={menuf}>
                Roadmap
              </a>
            </li>
            <li>
              <a href="/#Faq" onClick={menuf}>
                FAQ
              </a>
            </li>
            <Link to="/shortlisted">
              <button className="circular-button-filled text-white flex items-center justify-center mt-8">
                Connect Wallet
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19 7H18V6C18 5.20435 17.6839 4.44129 17.1213 3.87868C16.5587 3.31607 15.7956 3 15 3H5C4.20435 3 3.44129 3.31607 2.87868 3.87868C2.31607 4.44129 2 5.20435 2 6V18C2 18.7956 2.31607 19.5587 2.87868 20.1213C3.44129 20.6839 4.20435 21 5 21H19C19.7956 21 20.5587 20.6839 21.1213 20.1213C21.6839 19.5587 22 18.7956 22 18V10C22 9.20435 21.6839 8.44129 21.1213 7.87868C20.5587 7.31607 19.7956 7 19 7ZM5 5H15C15.2652 5 15.5196 5.10536 15.7071 5.29289C15.8946 5.48043 16 5.73478 16 6V7H5C4.73478 7 4.48043 6.89464 4.29289 6.70711C4.10536 6.51957 4 6.26522 4 6C4 5.73478 4.10536 5.48043 4.29289 5.29289C4.48043 5.10536 4.73478 5 5 5ZM20 15H19C18.7348 15 18.4804 14.8946 18.2929 14.7071C18.1054 14.5196 18 14.2652 18 14C18 13.7348 18.1054 13.4804 18.2929 13.2929C18.4804 13.1054 18.7348 13 19 13H20V15ZM20 11H19C18.2043 11 17.4413 11.3161 16.8787 11.8787C16.3161 12.4413 16 13.2044 16 14C16 14.7956 16.3161 15.5587 16.8787 16.1213C17.4413 16.6839 18.2043 17 19 17H20V18C20 18.2652 19.8946 18.5196 19.7071 18.7071C19.5196 18.8946 19.2652 19 19 19H5C4.73478 19 4.48043 18.8946 4.29289 18.7071C4.10536 18.5196 4 18.2652 4 18V8.83C4.32127 8.94302 4.65943 9.00051 5 9H19C19.2652 9 19.5196 9.10536 19.7071 9.29289C19.8946 9.48043 20 9.73478 20 10V11Z"
                    fill="white"
                  />
                </svg>
              </button>
            </Link>
          </ul>
        </>
      ) : null}

      <div className="md:hidden"></div>
      <ul
        className="flex z-50 justify-around items-center md:hidden text-white navbar-pc-menu"
        style={{ gap: "2vw" }}
      >
        <li>
          <a href="/#about">About us</a>
        </li>
        <li>
          <a href="/#HowtoClaim">How to Claim</a>
        </li>
        <li>
          <a href="/#Tokenism">Tokenism</a>
        </li>
        <li>
          <a href="/#Roadmap">Roadmap</a>
        </li>
        <li>
          <a href="/#FAQ">FAQ</a>
        </li>
      </ul>
      <Link to="/shortlisted">
        <button className="circular-button-filled text-white flex items-center justify-center">
          Connect Wallet
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19 7H18V6C18 5.20435 17.6839 4.44129 17.1213 3.87868C16.5587 3.31607 15.7956 3 15 3H5C4.20435 3 3.44129 3.31607 2.87868 3.87868C2.31607 4.44129 2 5.20435 2 6V18C2 18.7956 2.31607 19.5587 2.87868 20.1213C3.44129 20.6839 4.20435 21 5 21H19C19.7956 21 20.5587 20.6839 21.1213 20.1213C21.6839 19.5587 22 18.7956 22 18V10C22 9.20435 21.6839 8.44129 21.1213 7.87868C20.5587 7.31607 19.7956 7 19 7ZM5 5H15C15.2652 5 15.5196 5.10536 15.7071 5.29289C15.8946 5.48043 16 5.73478 16 6V7H5C4.73478 7 4.48043 6.89464 4.29289 6.70711C4.10536 6.51957 4 6.26522 4 6C4 5.73478 4.10536 5.48043 4.29289 5.29289C4.48043 5.10536 4.73478 5 5 5ZM20 15H19C18.7348 15 18.4804 14.8946 18.2929 14.7071C18.1054 14.5196 18 14.2652 18 14C18 13.7348 18.1054 13.4804 18.2929 13.2929C18.4804 13.1054 18.7348 13 19 13H20V15ZM20 11H19C18.2043 11 17.4413 11.3161 16.8787 11.8787C16.3161 12.4413 16 13.2044 16 14C16 14.7956 16.3161 15.5587 16.8787 16.1213C17.4413 16.6839 18.2043 17 19 17H20V18C20 18.2652 19.8946 18.5196 19.7071 18.7071C19.5196 18.8946 19.2652 19 19 19H5C4.73478 19 4.48043 18.8946 4.29289 18.7071C4.10536 18.5196 4 18.2652 4 18V8.83C4.32127 8.94302 4.65943 9.00051 5 9H19C19.2652 9 19.5196 9.10536 19.7071 9.29289C19.8946 9.48043 20 9.73478 20 10V11Z"
              fill="white"
            />
          </svg>
        </button>
      </Link>
    </nav>
  );
}
