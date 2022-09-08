import React from "react";
// import "./BookCard.scss";

export default function BookCard({ auteur, titre }) {
  return (
    <div>
      {/* <div>
        <div>
          <div className="cover-back"></div>
          <div className="pages">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="cover">
            <span className="title">{titre}</span>
          </div>
          <div className="spine">
            <span>
              {titre} - {auteur}
            </span>
          </div>
          <div className="spine-shadow"></div>
        </div>
      </div> */}
      <div className="container">
        {titre} {auteur}
      </div>
    </div>
  );
}

// Title.js
