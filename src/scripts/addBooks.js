import React from "react";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore;";

// saving data
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // try { const docRef = await addDoc(collection(db, "books"),{
  //   titre: form.title.value,
  //  auteur: form.author.value,
  // })} catch (err) {console.warn("error adding item: ", err)}

  db.collection("books").add({
    titre: form.title.value,
    auteur: form.author.value,
  });
  form.title.value = "";
  form.author.value = "";
});

export default function createBooks() {
  return (
    <div>
      <form id="add-books-form">
        <input type="text" name="title" placeholder="Book title" />
        <input type="text" name="author" placeholder="Author name" />
        <button>Add book</button>
      </form>
    </div>
  );
}
