import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

import { db } from "./firebase";

export default function AddComment() {
  // const query = collection(db, path);

  // const [docs, loading, error] = useCollectionData(query);

  return (
    <div>
      <form>
        <input />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}
