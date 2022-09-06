import React, { useEffect, useState } from "react";
import Title from "../../../components/Title";
import AddBooks from "../../../components/AddBooks";
import Books from "../../../components/Books";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../../firebase-config.ts";
import { toUnicode } from "punycode";

export default function PrivateHome() {
  const [titles, setTitles] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "books"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let titlesArray = [];
      querySnapshot.forEach((doc) => {
        titlesArray.push({ ...doc.data(), id: doc.id });
      });
      setTitles(titlesArray);
    });
    return () => unsub();
  }, []);

  const handleEdit = async (book, title) => {
    await updateDoc(doc(db, "books", books.id), { title: title });
  };

  const toggleComplete = async (book) => {
    await updateDoc(doc(db, "books", books.id), {
      completed: !books.completed,
    });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "books", id));
  };

  return (
    <>
      <div className="container p-5">
        <h1 className="display-3 text-light mb-4">Home Sweet Private Home</h1>
        <iframe
          src="https://giphy.com/embed/WoWm8YzFQJg5i"
          width="480"
          height="351"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
        <p>
          <a href="https://giphy.com/gifs/cartoons-comics-sea-reading-WoWm8YzFQJg5i">
            via GIPHY
          </a>
        </p>
        <Title />
        <AddBooks />
      </div>
      <div className="books_container">
        {books.map((book) => (
          <Title
            key={book.id}
            title={book}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </>
  );
}
