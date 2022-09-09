import React, { useEffect } from "react";
import { ReactDOM } from "react";
import "./BookCard.scss";

export default function BookCard({ auteur, titre }) {
  const bg = document.getElementById("bgcover");

  function authorColor(auteur) {
    let rgbcolors = [];
    const code = ("0" + auteur).split("").reduce(function (prev, curr) {
      return prev + curr.charCodeAt(0);
    });
    const colorA = (255 * code) / Math.pow(10, code.length - 1);
    const colorB = 255 * (colorA - parseInt(colorA));
    const colorC = 255 * (colorB - parseInt(colorB));
    rgbcolors.push(Math.floor(colorA), Math.floor(colorB), Math.floor(colorC));
    return rgbcolors;
  }
  console.log(`auteur: ${auteur} - rgbA: ${authorColor(auteur)}`);
  const rgbStyle = `rgba(${authorColor(auteur)[0]},${authorColor(auteur)[1]},${
    authorColor(auteur)[2]
  })`;

  return (
    <div className="w-auto d-sm-flex flex-wrap m-3">
      <article>
        <div className="cover-back"></div>
        <div className="pages">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div>
          <div
            className="cover"
            style={{
              backgroundColor: rgbStyle,
            }}
          >
            <span className="title">{titre}</span>
            <span className="author">{auteur}</span>
          </div>
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
