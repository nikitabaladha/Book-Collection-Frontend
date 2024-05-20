// src/components/BookForm.js
import React, { useState } from "react";

import "./Signup.css";
import postAPI from "../../Api/axiosPost.js";

const Signup = ({ onLoginClick }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await postAPI("/signup", formData, false);

      if (!response.hasError) {
        console.log("Signup successful Message:", response.data.message);
      } else {
        console.error("Signup Error:", response.message);
      }
    } catch (error) {
      console.error("Signup Error:", error);
    }

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };
  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
        <div className="mt-2">
          Already have an account?{" "}
          <span
            className="text-primary"
            style={{ cursor: "pointer" }}
            onClick={onLoginClick}
          >
            Login
          </span>
        </div>
      </form>
    </div>
  );
};

export default Signup;
