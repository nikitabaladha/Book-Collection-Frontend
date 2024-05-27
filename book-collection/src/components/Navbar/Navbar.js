// src/components/Navbar/Navbar.js

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import "./Navbar.css";
import logoImage from "../../images/logo.png";
import BookForm from "../../components/BookForm/BookForm";
import Login from "../../components/Login/Login";
import Signup from "../../components/Signup/Signup";

const Navbar = () => {
  const navigate = useNavigate();
  const [showAddBookModal, setShowAddBookModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleModalClose = (setModalState) => () => setModalState(false);
  const handleModalShow = (setModalState) => () => setModalState(true);

  const handleSignupSuccess = () => {
    console.log("Signup successful");
    setShowSignupModal(false);
    setShowLoginModal(true);
  };

  const handleLoginSuccess = () => {
    console.log("Login successful");
    setShowLoginModal(false);
    setIsLoggedIn(true);
  };

  const handleAddBookSuccess = () => {
    console.log("Book submission successful");
    setShowAddBookModal(false);
  };

  const handleViewBookSuccess = () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      alert("Please log in to view books.");
      return;
    }
    navigate("/view-book");
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img id="brand-logo" src={logoImage} alt="Logo" />
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
          className="collapse navbar-collapse middlePart"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={handleModalShow(setShowAddBookModal)}
              >
                Add Book
              </button>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                onClick={handleViewBookSuccess}
                to="/view-book"
              >
                View Book
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">
            {isLoggedIn ? (
              <li className="nav-item">
                <button
                  className="nav-link logout-button"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <button
                    className="nav-link login-button"
                    onClick={handleModalShow(setShowLoginModal)}
                  >
                    Login
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link signup-button"
                    onClick={handleModalShow(setShowSignupModal)}
                  >
                    Signup
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

      <Modal
        show={showAddBookModal}
        onHide={handleModalClose(setShowAddBookModal)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BookForm
            onSuccess={handleAddBookSuccess}
            onClose={handleModalClose(setShowAddBookModal)}
          />
        </Modal.Body>
      </Modal>

      <Modal show={showLoginModal} onHide={handleModalClose(setShowLoginModal)}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login
            onSignupClick={() => {
              setShowLoginModal(false);
              setShowSignupModal(true);
            }}
            onSuccess={handleLoginSuccess}
            onClose={handleModalClose(setShowLoginModal)}
          />
        </Modal.Body>
      </Modal>

      <Modal
        show={showSignupModal}
        onHide={handleModalClose(setShowSignupModal)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Signup
            onLoginClick={() => {
              setShowSignupModal(false);
              setShowLoginModal(true);
            }}
            onSuccess={handleSignupSuccess}
            onClose={handleModalClose(setShowSignupModal)}
          />
        </Modal.Body>
      </Modal>
    </nav>
  );
};

export default Navbar;
