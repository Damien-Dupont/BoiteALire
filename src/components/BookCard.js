import { useState } from "react";
import { Link } from "react-router-dom";
import "./BookCard.scss";

export default function BookCard({ auteur, titre, commentaire }) {
  const lien = `${titre}_${auteur}`.replace(` `, `_`).replace(`&apos;`, ``);
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
  console.log(`auteur: ${auteur} - rgbA: ${authorColor(auteur)}`);
  const rgbStyle = `rgba(${authorColor(auteur)[0]},${authorColor(auteur)[1]},${
    authorColor(auteur)[2]
  })`;
  const rgbStyleReverse = `rgba(200,200,200)`;

  return (
    <div className="w-auto d-sm-flex flex-wrap m-3">
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
          {isShown && commentaire ? (
            <Link to={`/livre/${lien}`}>
              <div
                className="cover"
                style={{
                  backgroundColor: rgbStyleReverse,
                }}
              >
                <span className="title">Ce livre a des commentaires</span>
                <span>
                  <span className="comments">💬</span>
                </span>
                <span className="author">Cliquez pour les lire</span>
              </div>
            </Link>
          ) : (
            <div
              className="cover"
              style={{
                backgroundColor: rgbStyle,
              }}
            >
              <span className="title">{titre}</span>(
              {commentaire ? (
                <span>
                  <span className="comments">💬</span>

                  {/* <span className="commentscount">{commentaireCount}</span> */}
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
    </div>
  );
}
