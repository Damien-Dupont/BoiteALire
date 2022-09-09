import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import "./BookCard.scss";
import { useNavigate, Link } from "react-router-dom";
import { appendOwnerState } from "@mui/base";

export default function BookCard({ auteur, titre, commentaire }) {
  const bg = document.getElementById("bgcover");
  const lien = `${titre}_${auteur}`.replace(` `, `_`).replace(`&apos;`, ``);

  // const commentaireCount = commentaire ? commentaire.length : 0;
  // console.log(commentaireCount);

  const [isShown, setIsShown] = useState(false);
  // const navigate = useNavigate();
  // const handleOpenBook = () => {
  //   navigate("/commentaires", { state: { openBook } });
  // };

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
  const rgbStyleReverse = `rgba(${authorColor(auteur)[2]},${
    authorColor(auteur)[1]
  },${authorColor(auteur)[0]})`;

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
                <span className="title">Ce livre a des commentaires</span>(
                <span>
                  <span className="comments">💬</span>
                </span>
                <span className="author">Cliquer pour les lire</span>
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
            {titre} --- {auteur}
          </span>
        </div>
        <div className="spine-shadow"></div>
      </article>
    </div>
  );
}
