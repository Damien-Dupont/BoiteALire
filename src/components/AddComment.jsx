import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";

export default function AddComment(path) {
  const handleNewComment = async () => {
    const reader = prompt("Lecteur, qui êtes-vous ?");
    const comment = prompt("Entrez ici votre commentaire:");
    const collectionRef = collection(db, path);
    const payload = { comment, reader };
    if (comment.length > 2 && reader != "") {
      await addDoc(collectionRef, payload);
    }
  };

  return (
    <div>
      <button className="button" onClick={handleNewComment}>
        Entrer un nouveau commentaire
      </button>
    </div>
  );
}
