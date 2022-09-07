// import { db } from "../firebase-config";

// const booksList = document.querySelector("#books-lis");

// function renderBooks(doc) {
//   let li = document.createElement("li");
//   let titre = document.createElement("span");
//   let auteur = document.createElement("span");

//   li.setAttribute("data-id", doc.id);
//   titre.name = doc.data().titre;
//   auteur.name = doc.data().auteur;

//   li.appendChild(titre);
//   li.appendChild(auteur);

//   booksList.appendChild(li);
// }

// db.collection("books")
//   .get()
//   .then((snapshot) => {
//     // console.log(snapshot.docs);
//     snapshot.docs.forEach((doc) => {
//       //   console.log(doc.data);
//       renderBooks(doc);
//     });
//   });

import React from "react";
import { db } from "../firebase-config";

// saving data
form.addEventListener("submit", (e) => {
  e.preventDefault();
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
