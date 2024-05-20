import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import putAPI from "../../Api/axiosPut.js";

import "./EditForm.css";

const EditForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { book } = location.state;

  const [editedDetails, setEditedDetails] = useState({
    title: book.title,
    author: book.author,
    genre: book.genre,
    yearPublished: book.yearPublished,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await putAPI(`/book/${book._id}`, editedDetails);

      if (response && !response.hasError) {
        console.log("Response:", response.data.message);
        navigate("/");
      }
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Edit Book</h2>
      <form onSubmit={handleEditSubmit} className="edit-form">
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={editedDetails.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Author:
          <input
            type="text"
            name="author"
            value={editedDetails.author}
            onChange={handleChange}
          />
        </label>
        <label>
          Genre:
          <input
            type="text"
            name="genre"
            value={editedDetails.genre}
            onChange={handleChange}
          />
        </label>
        <label>
          Year Published:
          <input
            type="text"
            name="yearPublished"
            value={editedDetails.yearPublished}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="save-btn">
          Save
        </button>
        <button onClick={() => navigate("/")} className="cancel-btn">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditForm;
