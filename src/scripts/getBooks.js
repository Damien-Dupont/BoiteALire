import { db } from "../firebase-config";

const booksList = document.querySelector("#books-lis");

function renderBooks(doc) {
  let li = document.createElement("li");
  let title = document.createElement("span");
  let author = document.createElement("span");
  let cross = document.createElement("div");

  li.setAttribute("data-id", doc.id);
  title.textContent = doc.data().titre;
  author.textContent = doc.data().auteur;
  cross.textContent = "x";

  li.appendChild(title);
  li.appendChild(author);
  li.appendChild(cross);

  booksList.appendChild(li);
  cross.addEventListener("click", (e) => {
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute("data-id");
    db.collection("books").doc(id).delete;
  });
}

// getting data

// realtime listener
db.collection(
  "books".orderBy("auteur").onSnapshot((snapshot) => {
    let changes = snapshot.docChanges();
    changes.forEach((change) => {
      if (change.type === "added") {
        renderBooks(change.doc);
      } else if (change.type === "removed") {
        let li = booksList.querySelector("[data-id=" + change.doc.id + "]");
        booksList.removeChild(li);
      }
    });
  })
);

db.collection("books")
  // .where('auteur', '==', 'KeoT')
  // .where('comment', '!==', 'null')
  // . where('titre', '==', 'Roule Papy')
  // penser à la casse
  // .orderBy('titre')
  .get()
  .then((snapshot) => {
    // console.log(snapshot.docs);
    snapshot.docs.forEach((doc) => {
      //   console.log(doc.data);
      renderBooks(doc);
    });
  });

//   import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// // TODO: Replace the following with your app's Firebase project configuration
// // See: https://firebase.google.com/docs/web/learn-more#config-object
// const firebaseConfig = {
//     // ...
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);

// READ
// import { collection, getDocs } from "firebase/firestore";

// const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });
