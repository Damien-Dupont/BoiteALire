import { db } from "../firebase-config";
import { collection, onSnapshot } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import BookCard from "../components/BookCard";

const GetBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "books"), (snapshot) => {
      setBooks(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  return (
    <div className="container">
      {books.map((book) => (
        <BookCard titre={book.titre} auteur={book.auteur} key={book.id} />
      ))}
    </div>
  );
};
export default GetBooks;
