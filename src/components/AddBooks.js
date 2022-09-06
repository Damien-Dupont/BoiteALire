import { FirebaseError } from "firebase/app";
import React, { useState } from "react";
import { db } from "../firebase-config.ts";
import { collection, addDoc } from "firebase/firestore";

export default function AddBooks() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "books"), {
        title,
        author,
        completed: false,
        comment: null,
      });
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input_container">
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="btn_container">
        <button>Add</button>
      </div>
    </form>
  );
}
