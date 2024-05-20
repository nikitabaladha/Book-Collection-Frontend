// components / Navbar / Navbar.js;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import "./Navbar.css";
import logoImage from "../../images/logo-1.png";
import BookForm from "../../components/BookForm/BookForm";
import Login from "../../components/Login/Login";
import Signup from "../../components/Signup/Signup";

const Navbar = () => {
  const [showAddBookModal, setShowAddBookModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleAddBookModalClose = () => setShowAddBookModal(false);
  const handleAddBookModalShow = () => setShowAddBookModal(true);

  const handleLoginModalClose = () => setShowLoginModal(false);
  const handleLoginModalShow = () => setShowLoginModal(true);

  const handleSignupModalClose = () => setShowSignupModal(false);
  const handleSignupModalShow = () => setShowSignupModal(true);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img id="brand-logo" src={logoImage} alt="Logo" />
        </Link>

        <div className="justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={handleAddBookModalShow}>
                Add-Book
              </button>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/view-book">
                View-Book
              </Link>
            </li>
          </ul>
        </div>

        <div className="justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <button
                className="nav-link login-button"
                onClick={handleLoginModalShow}
              >
                Login
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link signup-button"
                onClick={handleSignupModalShow}
              >
                Signup
              </button>
            </li>
          </ul>
        </div>
      </div>

      <Modal show={showAddBookModal} onHide={handleAddBookModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BookForm />
        </Modal.Body>
      </Modal>

      <Modal show={showLoginModal} onHide={handleLoginModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login
            onSignupClick={() => {
              handleLoginModalClose();
              handleSignupModalShow();
            }}
          />
        </Modal.Body>
      </Modal>

      <Modal show={showSignupModal} onHide={handleSignupModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Signup
            onLoginClick={() => {
              handleSignupModalClose();
              handleLoginModalShow();
            }}
          />
        </Modal.Body>
      </Modal>
    </nav>
  );
};

export default Navbar;
