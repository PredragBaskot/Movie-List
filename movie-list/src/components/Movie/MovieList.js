import React from "react";
import "./Movielist.css";
import { Link } from "react-router-dom";
import AddFavourites from "../Favorites/AddFavourites";

const MovieList = (props) => {

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
              <AddFavourites movie={movie} />
            </div>
          ) : null}
        </div>
      ))}
    </>
  );
};

export default MovieList;
