import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
/// Scroll
import LogoutPage from "./Logout";
/// Imag
import { useContext } from "react";
import { UserContext } from "../../../App";

const Header = ({ onNote, toggle, onProfile, onActivity, onNotification }) => {

  let { user, setUser } = useContext(UserContext);

  const [rec, setrec] = useState([]);
  const [pic, setpic] = useState("");
  const [facname, setfacname] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
         console.log(user.email);
        const res = await axios.get(
          `/api/profiles/${user && user.email}`
        );
     
        const d=res.data;
        setpic(d.pic);
        setfacname(d.username);
        console.log(facname);
      //   setrec(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  });

  // console.log(user);
  // console.log(isAuthenticated);
  // console.log(isLoading);
  var path = window.location.pathname.split("/");
  var name = path[path.length - 1].split("-");
  var filterName = name.length >= 3 ? name.filter((n, i) => i > 0) : name;
  var finalName = filterName.includes("app")
    ? filterName.filter((f) => f !== "app")
    : filterName.includes("ui")
    ? filterName.filter((f) => f !== "ui")
    : filterName.includes("uc")
    ? filterName.filter((f) => f !== "uc")
    : filterName.includes("basic")
    ? filterName.filter((f) => f !== "basic")
    : filterName.includes("form")
    ? filterName.filter((f) => f !== "form")
    : filterName.includes("table")
    ? filterName.filter((f) => f !== "table")
    : filterName.includes("page")
    ? filterName.filter((f) => f !== "page")
    : filterName.includes("email")
    ? filterName.filter((f) => f !== "email")
    : filterName.includes("ecom")
    ? filterName.filter((f) => f !== "ecom")
    : filterName.includes("chart")
    ? filterName.filter((f) => f !== "chart")
    : filterName.includes("editor")
    ? filterName.filter((f) => f !== "editor")
    : filterName;

  var page_name =
    finalName.join(" ") === "" ? "Dashboard" : finalName.join(" ");

  return (
    <div className="header">
      <div className="header-content">
        <nav className="navbar navbar-expand">
          <div className="collapse navbar-collapse justify-content-between">
            <div className="header-left">
              <div
                className="dashboard_bar"
                style={{ textTransform: "capitalize" }}
              >
                {"BMSCE ISE"}
              </div>
            </div>

            <ul className="navbar-nav header-right">
              <li className="nav-item"></li>
              {user && (
                <>
                  <li className="nav-item dropdown notification_dropdown">
          
                    <div
                      className={`dropdown-menu dropdown-menu-right ${
                        toggle === "activity" ? "show" : ""
                      }`}
                    >
                   
                    </div>
                  </li>
                </>
              )}
              {!user && <div className="banner-btn"></div>}
              <li
                className={`nav-item dropdown header-profile ${
                  toggle === "profile" ? "show" : ""
                }`}
                onClick={() => onProfile()}
              >
                <Link
                  to={"#"}
                  className="nav-link"
                  role="button"
                  data-toggle="dropdown"
                >
                  <div className="header-info">
                    <small>{user && "HELLO"}</small>
                    {user && <span>{ facname}</span>}
                  </div>
                  {user && <img src={pic} width="20" alt="" />}

                </Link>
                <div
                  className={`dropdown-menu dropdown-menu-right ${
                    toggle === "profile" ? "show" : ""
                  }`}
                >
                  <Link to="/app-profile" className="dropdown-item ai-icon">
                    <svg
                      id="icon-user1"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-primary"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span className="ml-2">Profile</span>
                  </Link>
                  <LogoutPage />
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
