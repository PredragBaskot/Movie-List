import React from "react";
import "./Movielist.css";
import { Link } from "react-router-dom";
import AddFavourites from "../Favorites/AddFavourites";
import RemoveFavourites from "../Favorites/RemoveFavourites";

const MovieList = (props) => {

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
                  ? "https://thumbs.dreamstime.com/z/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"
                  : movie.Poster
              }
              alt="movie"
            />
          </Link>
          {props.hasFavoritesButton ? (
            <div className="overlay">
              <AddFavourites movie={movie} />
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
