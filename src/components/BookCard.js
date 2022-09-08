import React from "react";
import "./BookCard.scss";

export default function BookCard({ auteur, titre }) {
  return (
    <div heigth="100px">
      <article>
        <div class="cover-back"></div>
        <div class="pages">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="cover">
          <span class="title">{titre}</span>
        </div>
        <div class="spine">
          <span>{titre}</span>
          <span>{auteur}</span>
        </div>
        <div class="spine-shadow"></div>
      </article>
    </div>
  );
}

// Title.js
