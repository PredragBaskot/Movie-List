import React from "react";
import "./Movielist.css";
import { Link } from "react-router-dom";
import AddFavourites from "../Favorites/AddFavourites";
import RemoveFavourites from "../Favorites/RemoveFavourites";

const MovieList = (props) => {
  const addToFavorites = (movie) => {
    let newStorageArray = [movie];
    const favoritesFromStorage = JSON.parse(localStorage.getItem("favorites"));
    if (favoritesFromStorage) {
      newStorageArray = [...newStorageArray, ...favoritesFromStorage];
    }

    localStorage.setItem("favorites", JSON.stringify(newStorageArray));
  };

  const removeFromFavourites = (movie) => {
    let newStorageArray = newStorageArray.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
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
          ) : <div className="overlay">
            <RemoveFavourites
              removeFavs={() => removeFromFavourites(movie)}
            />
          </div>}
        </div>
      ))}
    </>
  );
};

export default MovieList;
