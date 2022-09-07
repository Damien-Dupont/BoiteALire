import { db } from "../firebase-config";

const booksList = document.querySelector("#books-lis");

function renderBooks(doc) {
  let li = document.createElement("li");
  let title = document.createElement("span");
  let author = document.createElement("span");

  li.setAttribute("data-id", doc.id);
  title.name = doc.data().titre;
  author.name = doc.data().auteur;

  li.appendChild(title);
  li.appendChild(author);

  booksList.appendChild(li);
}

// getting data
db.collection("books")
  .get()
  .then((snapshot) => {
    // console.log(snapshot.docs);
    snapshot.docs.forEach((doc) => {
      //   console.log(doc.data);
      renderBooks(doc);
    });
  });
