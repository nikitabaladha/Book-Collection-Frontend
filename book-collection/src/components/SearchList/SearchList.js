// // ViewBook.js

// import React, { useState, useEffect } from "react";
// import getAPI from "../../Api/axiosGet";

// import "./SearchList.css";

// const SearchList = () => {
//   return (
//     <div className="container mt-4">
//       <h3 className="heading">All Your search result is here</h3>
//       <div className="row justify-content-center">
//         <div className="col-xs-12 col-md-3 col-sm-6">
//           <div className="card my-hover-effect">
//             <img
//               src={book.coverImage}
//               alt={book.title}
//               className="card-img-top"
//             />

//             <div className="card-body">
//               <h5 className="card-title">{title}</h5>
//               <p className="small-text">
//                 {" "}
//                 <span className="card-text"> Author : </span>
//                 <span className="inner-text">{author}</span>{" "}
//               </p>
//               <p className="small-text">
//                 {" "}
//                 <span className="card-text">Genre : </span>
//                 {genre}
//               </p>
//               <p className="small-text">
//                 {" "}
//                 <span className="card-text"> Year Published : </span>
//                 {yearPublished}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchList;

import React, { useState, useEffect } from "react";

import getAPI from "../../Api/axiosGet";

import "./SearchList.css";

const SearchList = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [hasError, setHasError] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await getAPI(`/search?q=${searchQuery}`);
        const { data } = response;
        if (data.hasError) {
          setHasError(true);
          setMessage(data.message);
        } else {
          setBooks(data.data);
        }
      } catch (error) {
        console.error(error);
        setHasError(true);
        setMessage("Internal Server Error");
      }
    };

    fetchBooks();
  }, [searchQuery]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="container mt-4">
      <h3 className="heading">Your search result is here</h3>
      <input
        type="search"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search for a book"
      />
      {hasError ? (
        <p className="error-message">{message}</p>
      ) : (
        <div className="row justify-content-center">
          {books.map((book) => (
            <div className="col-xs-12 col-md-3 col-sm-6" key={book._id}>
              <div className="card my-hover-effect">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="card-img-top"
                />

                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="small-text">
                    {" "}
                    <span className="card-text"> Author : </span>
                    <span className="inner-text">{book.author}</span>{" "}
                  </p>
                  <p className="small-text">
                    {" "}
                    <span className="card-text">Genre : </span>
                    {book.genre}
                  </p>
                  <p className="small-text">
                    {" "}
                    <span className="card-text"> Year Published : </span>
                    {book.yearPublished}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchList;
