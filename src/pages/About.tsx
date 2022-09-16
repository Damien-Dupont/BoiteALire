import React from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase-config";

type IAboutPageProps = {
  pathname?: string;
  bookId: string;
  author?: string;
  title?: string;
};

type IBookRef = { bookId: string };

const bookRef = ({ bookId }: IBookRef) => {
  doc(db, "books", bookId);
};

const AboutPage = ({ bookId }: IAboutPageProps) => {
  console.log(`About: ${bookId}`);
  return (
    <div className="container p-5">
      <h1 className="display-2 text-light">About</h1>
    </div>
  );
};

export default AboutPage;
