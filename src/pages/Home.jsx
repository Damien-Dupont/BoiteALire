import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import paperTree from "../media/paper-cut-tree.jpg";
import GetBooks from "../scripts/getBooks";

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  const { currentUser } = useContext(UserContext);
  const width: number =
    0.8 * (window.outerWidth > 500 ? 500 : window.outerWidth);

  const helloNewGuy: string = "Bienvenue dans l'Arbre à Lire.";
  const welcomeBack: string = "Heureux de vous retrouver";
  const pleaseJoin: string =
    "Pour poursuivre, merci de vous connecter ou de créer un compte. C'est rapide et gratuit!";
  const question: string = "Avez-vous lu de nouveaux livres récemment?";
  return (
    <div className="d-flex justify-content-center text-center">
      <div className="w-auto d-sm-flex flex-column m-3">
        <h1 className="display-4 text-light">
          {currentUser ? welcomeBack : helloNewGuy}
        </h1>
        <div className="text-center">
          <img className="img-fluid" src={paperTree} width={width} />
        </div>
        {!currentUser ? (
          <>
            <p className="text-light">{pleaseJoin}</p>
          </>
        ) : (
          <>
            <div className="text-light">
              <h3>{question}</h3>
              <GetBooks />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
