import React from "react";
import "./Filter.css";

const alphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i)
);

export default function Filter({ filterCharacter, filterByCharacter }) {
  return (
    <div>
      {alphabet.map((char) => (
        <a
          href="#"
          key={char}
          className={`character ${
            filterCharacter === char ? "selected-character" : null
          }`}
          onClick={(_) =>
            filterByCharacter(filterCharacter === char ? "" : char)
          }
        >
          {char}
        </a>
      ))}
    </div>
  );
}
