// src/components/BookForm.js

import React, { useState } from "react";
import "./BookForm.css";
import postAPI from "../../Api/axiosPost";

const BookForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await postAPI("/book ", formData);

      console.log("Response:", response.data.message);
    } catch (error) {
      console.error("Error:", error);
    }

    setFormData({});
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            className="form-control"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            className="form-control"
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="yearPublished">Year Published</label>
          <input
            type="number"
            className="form-control"
            id="yearPublished"
            name="yearPublished"
            value={formData.yearPublished}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookForm;
