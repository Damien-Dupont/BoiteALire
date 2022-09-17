import { db } from "../firebase-config";

db.collection("books").doc(id).update({ props });
