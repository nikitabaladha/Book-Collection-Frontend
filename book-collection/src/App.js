// App.js

import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import BookForm from "./components/BookForm/BookForm";
import ViewBook from "./components/ViewBook/ViewBook";
import NotFound from "./components/NotFound/NotFound.js";
import SearchList from "./components/SearchList/SearchList.js";
import Books from "./components/Books/Books.js";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<BookForm />} />
        <Route path="/view-book" element={<ViewBook />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/search" element={<SearchList />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
