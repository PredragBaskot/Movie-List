import React from "react";
import "./Movielist.css";
import { Link } from "react-router-dom";
import AddFavourites from "../Favorites/AddFavourites";

const MovieList = (props) => {
  const addToFavorites = (movie) => {
    let newStorageArray = [movie];
    const favoritesFromStorage = JSON.parse(localStorage.getItem("favorites"));
    if (favoritesFromStorage) {
      newStorageArray = [...newStorageArray, ...favoritesFromStorage];
    }
    console.log(newStorageArray);

    // favoritesFromStorage.push(movie);
    // console.log(favoritesFromStorage);
    localStorage.setItem("favorites", JSON.stringify(newStorageArray));
  };

  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="movie" key={movie.imdbID}>
          <Link to={`/details/${movie.imdbID}`}>
            <img
              src={
                movie.Poster === "N/A"
                  ? "https://i.redd.it/ds1luav7dl851.jpg"
                  : movie.Poster
              }
              alt="movie"
            />
          </Link>
          {props.hasFavoritesButton ? (
            <div className="overlay">
              <AddFavourites onAdd={() => addToFavorites(movie)} />
            </div>
          ) : null}
        </div>
      ))}
    </>
  );
};

export default MovieList;
