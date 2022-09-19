import { useState } from "react";
// import { useCollectionData } from "react-firebase-hooks/firestore";
import { Link } from "react-router-dom";
// import { db } from "../firebase-config";
// import AboutPage from "../pages/About";
import "./BookCard.scss";

export default function BookCard({ auteur, titre, commentaires, bookId }) {
  // console.log(`bookId: ${bookId}`);

  function lien(string) {
    return string
      .normalize("NFD")
      .replace(/[ |']/g, `_`)
      .replace(/[\u0300-\u036f]/g, ``);
  }

  const [isShown, setIsShown] = useState(false);

  function authorColor(auteur) {
    let rgbcolors = [];
    const code = ("0" + auteur).split("").reduce(function (prev, curr) {
      return prev + curr.charCodeAt(0);
    });
    const colorA = (255 * code) / Math.pow(10, code.length - 1);
    const colorB = 255 * (colorA - parseInt(colorA));
    const colorC = 300 * (colorB - parseInt(colorB));
    rgbcolors.push(Math.floor(colorA), Math.floor(colorB), Math.floor(colorC));
    return rgbcolors;
  }

  const rgbStyle = `rgba(${authorColor(auteur)[0]},${authorColor(auteur)[1]},${
    authorColor(auteur)[2]
  })`;
  const rgbStyleReverse = `rgba(200,200,200)`;

  // insérer ici une fonction pour compter le nombre de commentaires avant de les afficher sur la couverture du livre

  return (
    <div className="w-auto d-sm-flex flex-wrap m-3">
      <Link to={`/livre/${bookId}/${lien(auteur)}/${lien(titre)}`}>
        <article
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          <div className="cover-back"></div>
          <div className="pages">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div>
            {isShown && commentaires ? (
              <div
                className="cover"
                style={{
                  backgroundColor: rgbStyleReverse,
                }}
              >
                <span className="title">Voir les commentaires</span>
                <span>
                  <span className="comments">💬</span>
                </span>
                <span className="author">Cliquez...</span>
              </div>
            ) : (
              <div
                className="cover"
                style={{
                  backgroundColor: rgbStyle,
                }}
              >
                <span className="title">{titre}</span>(
                {commentaires ? (
                  <span>
                    <span className="comments">💬</span>

                    {/* <span className="commentscount">{howManyComments}</span> */}
                  </span>
                ) : (
                  ""
                )}
                <span className="author">{auteur}</span>
              </div>
            )}
          </div>
          <div className="spine">
            <span>
              {`${titre}${auteur}`.length > 38
                ? `${titre}`
                : `${titre} - ${auteur}`}
            </span>
          </div>
          <div className="spine-shadow"></div>
        </article>
      </Link>
    </div>
  );
}
