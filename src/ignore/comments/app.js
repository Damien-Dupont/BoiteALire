import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import AddComment from "./AddComment";
import { db } from "./firebase";

export default function App() {
  const query = collection(db, "books");

  const [docs, loading, error] = useCollectionData(query);

  return (
    <div>
      <h1>books:</h1>
      {loading && "loading..."}
      <ul>
        {docs?.map((doc) => (
          <div key={Math.random()}>
            <li>
              {doc.titre} ({doc.auteur})
              <CommentsList path={`books/${doc.name}/commentaires/`} />
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
