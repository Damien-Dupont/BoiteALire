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

  const shuffleArray = (books) => {
    // Fisher-Yates shuffling algorithm
    for (let i = books.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = books[i];
      books[i] = books[j];
      books[j] = temp;
    }
  };

  shuffleArray(books);

  return (
    <div className="row d-flex justify-content-center">
      <div className="col-md-10">
        <div className="d-flex flex-wrap">
          {books.map((book) => (
            <BookCard
              titre={book.titre}
              auteur={book.auteur}
              key={book.id}
              bookId={book.id}
              commentaires={`books/${book.id}/commentaires`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default GetBooks;
