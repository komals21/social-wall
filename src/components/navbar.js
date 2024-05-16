import React, { useEffect, useState } from "react";
import { NavLink, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import logo from "./logo.svg";
import "./navbar.css";
import HeaderMenu from "./headerMenu";

const Navbar = () => {

  const [isSticky, setIsSticky] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);




  return (
    <div>
      <div className={`navbar1 ${isSticky ? "sticky" : ""}`}>
        <nav className="navbar navbar-expand-lg navbar-light bg-red">
          <div className="container-fluid my-0">
            <NavLink className="navbar-brand" to="/">
              <div className="logo-cls">
                <h5
                  className="logotext"
                  style={{
                    marginLeft: "10px",
                    marginTop: "5px",
              
                    WebkitBackgroundClip: "text",
                    color: "white",
                    fontFamily: "Helvetica Neue",
                  }}
                >
                  {" "}
                  <b> Social Media Wall</b>
                </h5>
              </div>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick="" ///some handler were calling from here
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <HeaderMenu/>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
