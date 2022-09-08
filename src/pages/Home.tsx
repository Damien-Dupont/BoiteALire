import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import paperTree from "../media/paper-cut-tree.jpg";

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  const { currentUser } = useContext(UserContext);
  const width: number =
    0.8 * (window.outerWidth > 600 ? 600 : window.outerWidth);
  console.log(width);

  const message1: string = "Bienvenue dans l'Arbre à Lire.";
  const message2: string = "Heureux de vous retrouver";
  const pleaseJoin: string =
    "Pour poursuivre, merci de vous connecter ou de créer un compte. C'est rapide et gratuit!";
  const welcomeBack: string = "Avez-vous lu de nouveaux livres récemment?";
  return (
    <div className="container p-5">
      <h1 className="display-3 text-light">
        {currentUser ? message2 : message1}
      </h1>
      <img src={paperTree} width={width} />
      {!currentUser ? (
        <p className="text-light">{pleaseJoin}</p>
      ) : (
        <>
          <h2 className="text-light">{welcomeBack}</h2>
        </>
      )}
    </div>
  );
};

export default HomePage;
