import React from "react";

export default function cover() {
  const bg = document.getElementById("bgcover");

  function authorColor(author) {
    let rgbcolors = [];
    const code = ("0" + author).split("").reduce(function (prev, curr) {
      return prev + curr.charCodeAt(0);
    });
    const colorA = (255 * code) / Math.pow(10, code.length - 1);
    const colorB = 255 * (colorA - parseInt(colorA));
    const colorC = 255 * (colorB - parseInt(colorB));

    rgbcolors.push(Math.floor(colorA), Math.floor(colorB), Math.floor(colorC));

    return rgbcolors;
  }

  bg.addEventListener("click", () => {
    bg.style.backgroundColor =
      "rgb(" +
      authorColor(author)[0] +
      "," +
      authorColor(author)[1] +
      "," +
      authorColor(author)[2] +
      ")";
  });
  return (
    <>
      <div id="coverzone"></div>
      <img src="bg.jpg"></img>
      <div id="bgcover"></div>
    </>
  );
}
