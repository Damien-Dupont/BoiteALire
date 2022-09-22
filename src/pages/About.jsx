import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  onSnapshot,
  doc,
  getDoc,
  getDocFromCache,
} from "firebase/firestore";
import { db } from "../firebase-config";

import BookCard from "../components/BookCard";
import CommentsList from "../components/CommentsList";
import AddComment from "../components/AddComment";

async function bookInfo(bookRef) {
  try {
    const bookSnap = await getDoc(bookRef);

    const currentBook = [
      { auteur: bookSnap.data().auteur, titre: bookSnap.data().titre },
    ];

    return currentBook;
  } catch (err) {
    console.warn(err);
  }
}

export default function AboutPage() {
  const [livre, setLivre] = useState([{ auteur: "", titre: "" }]);
  const { bookId } = useParams();
  const commentsPath = `books/${bookId}/comments`;

  const currentBook = bookInfo(doc(db, "books", bookId));
  setLivre(currentBook);

  const [comments, setComments] = useState([
    { name: "Loading...", id: "initial" },
  ]);

  useEffect(() => {
    onSnapshot(collection(db, `books/${bookId}/comments`), (snapshot) => {
      setComments(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  return (
    <div className="container p-5">
      <div className="d-flex flex-row">
        <div className="d-flex flex-wrap">
          <BookCard
            titre={currentBook.titre}
            auteur={currentBook.auteur}
            key={bookId}
            bookId={bookId}
            commentaires={``}
          />
        </div>
        <div className="display-4 d-flex flex-column text-info">
          <div>{currentBook.titre}</div>
          <div>{currentBook.auteur}</div>
        </div>
      </div>
      <div className="text-light">
        <AddComment path={commentsPath} />

        <CommentsList path={commentsPath} />

        {comments.length > 2 ? <AddComment path={commentsPath} /> : ""}
      </div>
    </div>
  );
}
