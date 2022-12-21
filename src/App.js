import "./styles.css";
import { useState } from "react";

const movies = {
  Horror: [
    { name: "Alien ", year: "1979", rating: "8.5/10" },
    { name: " The Exorcist ", year: "1973", rating: "8.1/10" },
    { name: "The Ring", year: "2002", rating: "7.9/10" }
  ],
  RomCom: [
    { name: "You've Got Mail", year: "1998", rating: "7.6/10" },
    { name: "500 Days of Summer", year: "2009", rating: "7.7/10" },
    { name: "Love Actually", year: "2003", rating: "7.4/10" }
  ],
  Scifi: [
    { name: "The Dark Knight", year: "2008", rating: "9/10" },
    { name: " V for Vendetta", year: "2005", rating: "8.4/10" },
    { name: "Avatar", year: "2009", rating: "8/10" }
  ],
  Thriller: [
    { name: " Memento", year: "2004", rating: "8.1/10" },
    { name: "Identity", year: "2003", rating: "7.8/10" },
    { name: "The Machinist", year: "2004", rating: "7.7/10" }
  ]
};
var moviesArray = Object.keys(movies);

export default function App() {
  const [selectedGenre, setGenre] = useState("Scifi");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1 className="header">Best Movies </h1>
      <h2>According to IMDB Rating</h2>

      <div className="button-section">
        {moviesArray.map(function (genre) {
          return (
            <button
              key={genre}
              onClick={() => {
                genreClickHandler(genre);
              }}
              className="genre-section"
              style={{ cursor: "pointer" }}
            >
              {genre}
            </button>
          );
        })}
      </div>

      <div className="movies">
        <ul className="list">
          {movies[selectedGenre].map((mov) => (
            <li
              key={mov.name}
              style={{
                listStyle: "none",
                border: "1px solid black",
                margin: "auto",
                marginBottom: "10px",
                width: "40vw"
              }}
            >
              <div style={{ fontSize: "1.2rem", padding: "3px" }}>
                {" "}
                {mov.name}{" "}
              </div>
              <div style={{ fontSize: "0.8rem", padding: "3px" }}>
                {" "}
                {mov.year}{" "}
              </div>
              <div style={{ fontSize: "1rem", padding: "3px" }}>
                {" "}
                {mov.rating}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="about">About</div>
    </div>
  );
}
