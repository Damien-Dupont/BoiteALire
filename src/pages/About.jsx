import React, { useEffect, useState } from "react";
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

function Comment(comment, reader) {
  return (
    <div>
      <span>{reader} a commenté:</span>
      <span>{comment}</span>
    </div>
  );
}

function DeleteButton() {
  return (
    // <button className="button" onClick={handleDelete}>
    `delete`
    // </button>
  );
}

export default function AboutPage() {
  const { bookId } = useParams();

  const [comments, setComments] = useState([
    { name: "Loading...", id: "initial" },
  ]);

  useEffect(
    () =>
      onSnapshot(collection(db, `books/${bookId}/comments`), (snapshot) => {
        setComments(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      }),
    []
  );

  const handleNewComment = async () => {
    const reader = prompt("Who are you");
    const comment = prompt("Enter a comment");

    const collectionRef = collection(db, `books/${bookId}/comments`);
    const payload = { comment, reader };
    const docRef = await addDoc(collectionRef, payload);

    // const docRef = doc(db, "books", bookId, "comments");
    // const payload = { comment: "texte", reader: "John Doe" };
    // await setDoc(docRef, payload);
  };

  return (
    <div className="container p-5">
      <div className="display-2 text-light"></div>
      <button className="button" onClick={handleNewComment}>
        New
      </button>
      {comments.map((comment) => (
        <li key={docRef.id}>
          <DeleteButton />
          <a href="#">*</a> <Comment comment={comment} reader={reader} />
        </li>
      ))}
    </div>
  );
}
