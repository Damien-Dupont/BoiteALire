import { db } from "../firebase-config";
import { collection, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import BookCard from "../components/BookCard";

const GetBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "books"), (snapshot) => {
      setBooks(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  return (
    <div className="row d-flex justify-content-center">
      <div className="col-md-10">
        <div className="d-flex flex-wrap">
          {books.map((book) => (
            <BookCard
              titre={book.titre}
              auteur={book.auteur}
              key={book.id}
              commentaire={book.commentaire}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default GetBooks;
