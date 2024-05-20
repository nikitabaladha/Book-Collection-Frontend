import React, { useState, useEffect } from "react";
import getAPI from "../../Api/axiosGet";
import "./ViewBook.css"; // Import the CSS file

const ViewBook = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await getAPI("/book");
        setBooks(response.data.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    }

    fetchBooks();
  }, []);

  const handleEdit = (bookId) => {
    console.log("Editing book with id:", bookId);
  };

  const handleDelete = (bookId) => {
    console.log("Deleting book with id:", bookId);
  };

  return (
    <div className="container mt-4">
      <h1>All Books</h1>
      <div className="books-list">
        {books.map((book, index) => (
          <React.Fragment key={book._id}>
            <div className="book-card">
              <h3>Title: {book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Genre: {book.genre}</p>
              <p>Year Published: {book.yearPublished}</p>
              <div className="book-buttons">
                <button
                  onClick={() => handleEdit(book._id)}
                  className="edit-btn"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(book._id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            </div>
            {/* Add a new row after every 3rd book */}
            {(index + 1) % 3 === 0 && <div className="clearfix" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ViewBook;
