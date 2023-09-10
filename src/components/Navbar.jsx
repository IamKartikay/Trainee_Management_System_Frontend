import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import navLogo from "../assets/navLogo.png";
import "./Navbar.css";
import Context from "../context/StateContext";

const Navbar = () => {
  const { loggedIn, setLoggedIn } = useContext(Context);
  const navigate = useNavigate();
  const Logout = async () => {
    await setLoggedIn(false);
    localStorage.removeItem("admin");
    localStorage.removeItem("labname");
    navigate("/");
  };

  return (
    <nav
      className="navbar navbar-expand-lg text-white"
      style={{ backgroundColor: "#241468" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={navLogo} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse position-absolute end-0 right"
          id="navbarSupportedContent"
        >
          <div className="navbar-nav me-auto mb-2 mb-lg-0">
            <div className="nav-item">
              <Link
                className="nav-link active text-white"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </div>
            <div className="nav-item">
              <Link className="nav-link text-white" href="#">
                About System
              </Link>
            </div>
            {!loggedIn && (
              <>
                <div className="nav-item">
                  <Link className="nav-link text-white" to="/login">
                    Admin-Login
                  </Link>
                </div>
                <div className="nav-item">
                  <Link className="nav-link text-white" to="/signup">
                    Admin-SignUp
                  </Link>
                </div>
              </>
            )}
            {loggedIn && (
              <div className="nav-item">
                <button className="nav-link text-white" onClick={Logout}>
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
