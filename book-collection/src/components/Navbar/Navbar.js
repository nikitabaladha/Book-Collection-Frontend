// components / Navbar / Navbar.js;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import "./Navbar.css";
import logoImage from "../../images/logo-1.png";
import BookForm from "../../components/BookForm/BookForm";

const Navbar = () => {
  const [showAddBookModal, setShowAddBookModal] = useState(false);

  const handleAddBookModalClose = () => setShowAddBookModal(false);
  const handleAddBookModalShow = () => setShowAddBookModal(true);
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
              <Link className="btn btn-login" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-signup" to="/signup">
                Signup
              </Link>
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
    </nav>
  );
};

export default Navbar;
