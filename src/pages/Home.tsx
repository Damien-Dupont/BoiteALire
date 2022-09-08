import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import paperTree from "../media/paper-cut-tree.jpg";
import GetBooks from "../scripts/getBooks";
import AboutPage from "./About";

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  const { currentUser } = useContext(UserContext);
  const width: number =
    0.8 * (window.outerWidth > 600 ? 600 : window.outerWidth);

  const helloNewGuy: string = "Bienvenue dans l'Arbre à Lire.";
  const welcomeBack: string = "Heureux de vous retrouver";
  const pleaseJoin: string =
    "Pour poursuivre, merci de vous connecter ou de créer un compte. C'est rapide et gratuit!";
  const question: string = "Avez-vous lu de nouveaux livres récemment?";
  return (
    <div className="container p-5">
      <h1 className="display-3 text-light">
        {currentUser ? welcomeBack : helloNewGuy}
      </h1>
      <img src={paperTree} width={width} />
      {!currentUser ? (
        <>
          <p className="text-light">{pleaseJoin}</p>
          <AboutPage />
        </>
      ) : (
        <>
          <div className="text-light">
            <h2>{question}</h2>
            <GetBooks />
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
