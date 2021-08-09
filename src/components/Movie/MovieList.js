import React from "react";
import "./Movielist.css";
import { Link } from "react-router-dom";
import AddFavourites from "../../Pages/Favorites/AddFavourites";

const MovieList = (props) => {
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
          ) : null}
        </div>
      ))}
    </>
  );
};

export default MovieList;
