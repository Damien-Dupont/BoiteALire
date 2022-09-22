import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
// import AddComment from "./AddComment";
import { db } from "../firebase-config";

export default function CommentsList({ path }) {
  const query = collection(db, path);
  const [docs, loading] = useCollectionData(query);

  return (
    <div className="text-muted">
      {loading && "Loading..."}
      {docs?.map((doc) => (
        <span key={Math.random()}>
          <span> {doc.reader} a partagé le commentaire suivant :</span>
          <span>
            <p>💬 {doc.comment}</p>
            {/* <DeleteButton /> */}
          </span>
        </span>
      ))}
      <p></p>
    </div>
  );
}

function DeleteButton() {
  return (
    <div>
      <button className="button">Supprimer</button>;
    </div>
  );
}
