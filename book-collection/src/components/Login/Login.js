// src/components/Login.js
import React, { useState } from "react";
import postAPI from "../../Api/axiosPost";
import "./Login.css";

const Login = ({ onSignupClick }) => {
  const [formData, setFormData] = useState({
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
      const response = await postAPI("/login", formData, false);
      console.log("RESPONSE", response);
      if (!response.hasError) {
        console.log("Login successful Message:", response.data.message);

        localStorage.setItem(
          "accessToken",
          JSON.stringify(response.data.token)
        );
      } else {
        console.error("Login Error:", response.data.message);
      }
    } catch (error) {
      console.error("Login Error:", error);
    }

    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
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
          Don't have an account?{" "}
          <span
            className="text-primary"
            style={{ cursor: "pointer" }}
            onClick={onSignupClick}
          >
            Signup
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
