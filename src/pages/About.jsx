import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  addDoc,
  getDocs,
  onSnapshot,
  getFirestore,
  firestore,
  getDocFromCache,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase-config";
import { useCollectionData } from "react-firebase-hooks/firestore";

import BookCard from "../components/BookCard";
// import { useFirestoreDocument } from "@react-query-firebase/firestore";
// import { getAutoHeightDuration } from "@mui/material/styles/createTransitions";

// const db = getFirestore();

// type IAboutPageProps = {
//   pathname?: string;
//   bookId: string;
//   author?: string;
//   title?: string;
// };

// type IBookRef = { bookId: string }; kPn2q1L6J9zyd4pasyXi
export default function AboutPage() {
  const { bookId, auteur, titre } = useParams();
  const commentsPath = `books/${bookId}/comments`;

  const [comments, setComments] = useState([
    { name: "Loading...", id: "initial" },
  ]);

  function Comment({ path }) {
    const query = collection(db, path);
    const [docs, loading] = useCollectionData(query);

    return (
      <div className="text-muted">
        {loading && "Loading..."}
        {docs?.map((doc) => (
          <li key={Math.random()}>
            <span>{doc.reader} a commenté:</span>
            <span>
              <p>{doc.comment}</p>
              {/* <DeleteButton /> */}
            </span>
          </li>
        ))}
        <p></p>
      </div>
    );
  }

  function AddNew({ path, reader, comment }) {
    const name = useRef();

    async function handleSubmit(e) {
      e.preventDefault();

      const docRefReader = doc(db, path, reader.current.value);
      // addDoc génère un id automatique au lieu de reader.current.value
      await setDoc(docRefReader, {
        reader: reader.current.value,
        comment: comment.current.value,
      });

      e.target.reset();
    }

    return (
      <li>
        <form onSubmit={handleSubmit}>
          <input ref={reader} placeholder="Nom du lecteur" />
          <input ref={comment} placeholder="Votre commentaire" />
          <button type="submit">Add</button>
        </form>
      </li>
    );
  }

  function DeleteButton() {
    return <button className="button">Supprimer</button>;
  }

  const handleNewComment = async () => {
    const reader = prompt("Who are you ?");
    const comment = prompt("Enter a comment:");
    const collectionRef = collection(db, commentsPath);
    const payload = { comment, reader };
    const docRef = await addDoc(collectionRef, payload);

    // const docRef = doc(db, "books", bookId, "comments");
    // const payload = { comment: "texte", reader: "John Doe" };
    // await setDoc(docRef, payload);
  };

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
        <div className="d-flex flex-column">
          <div>{titre}</div>
          <div>{auteur}</div>
        </div>
      </div>
      <div className="text-light">
        <button className="button" onClick={handleNewComment}>
          Entrer un nouveau commentaire
        </button>

        <div></div>
        <Comment path={commentsPath} />

        {comments ? (
          <div>
            <button className="button" onClick={handleNewComment}>
              Entrer un nouveau commentaire
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
