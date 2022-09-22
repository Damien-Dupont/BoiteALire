import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase-config";

import BookCard from "../components/BookCard";
import CommentsList from "../components/CommentsList";
import AddComment from "../components/AddComment";

export default function AboutPage() {
  const { bookId, auteur, titre } = useParams();
  const commentsPath = `books/${bookId}/comments`;

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
            titre={titre}
            auteur={auteur}
            key={bookId}
            bookId={bookId}
            commentaires={``}
          />
        </div>
        <div className="display-4 d-flex flex-column text-info">
          <div>{titre}</div>
          <div>{auteur}</div>
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
