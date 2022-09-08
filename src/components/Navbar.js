import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
// import { INavbar, IAppContext } from "../@Types/lectures";

export default function Navbar() {
  const width = window.matchMedia("(min-width: 564px)").matches;
  const midWidth = window.matchMedia("(min-width: 682px)").matches;
  console.log(midWidth);

  const { toggleModals, currentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch {
      alert("Erreur à la déconnexion. Veuillez réessayer ultérieurement.");
    }
  };
  return (
    <nav className="navbar navbar-light bg-light px-4">
      <Link to="/" className="navbar-brand">
        <span role="img" aria-label="Deciduous Tree">
          🌳
        </span>
        {midWidth || !width ? " L'Arbre à Lire " : " "}
        <span role="img" aria-label="bookpile">
          📚
        </span>
      </Link>
      <div>
        {currentUser ? (
          <div>
            <button
              onClick={() => navigate("/private/private-home/")}
              className="btn border-success ms-2 btn-add"
            >
              {width ? "Mon profil" : ""}{" "}
              <span role="img" aria-label="tabanata tree">
                🎋
              </span>
            </button>
            <button
              onClick={() => toggleModals("addBookModal")}
              className="btn border-success ms-2 btn-add"
            >
              {width ? "Ajouter un livre" : ""}{" "}
              <span role="img" aria-label="bookpile">
                🪴
              </span>
            </button>
            <button
              onClick={logOut}
              className="btn border-danger ms-2 btn-quit"
            >
              {width ? "Déconnexion" : ""}{" "}
              <span role="img" aria-label="Fallen Leaf">
                🍂
              </span>
            </button>
          </div>
        ) : (
          <div>
            <button
              onClick={() => toggleModals("SignUp")}
              className="btn border-success ms-2 btn-signup"
            >
              {width ? "S'inscrire" : ""}{" "}
              <span role="img" aria-label="Seedling">
                🌱
              </span>
            </button>
            <button
              onClick={() => toggleModals("SignIn")}
              className="btn border-primary ms-2 btn-signin"
            >
              {width ? "S'identifier" : ""}{" "}
              <span role="img" aria-label="Herb">
                🌿
              </span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
