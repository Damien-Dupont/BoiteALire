import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import AddComment from "./AddComment";
import { db } from "./firebase";

export default function CommentsList({ path }) {
  const query = collection(db, path);

  const [docs, loading, error] = useCollectionData(query);

  return (
    <div>
      <h1>books:</h1>
      {loading && "Veuillez patienter un instant..."}
      <ul>
        {docs?.map((doc) => (
          <li key={Math.random()}>{doc.name}</li>
        ))}
        <AddComment path={path} />
      </ul>
    </div>
  );
}
