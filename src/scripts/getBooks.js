import { db } from "../firebase-config";
import { collection, onSnapshot } from "firebase/firestore";
import React, { useState, useEffect } from "react";

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
        <li key={book.id}>
          <a>
            {book.titre} ({book.auteur})
          </a>
        </li>
      ))}
    </div>
  );
};
export default GetBooks;
