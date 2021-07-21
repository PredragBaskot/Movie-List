import React from "react";
import "./Movielist.css";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="movie-listing" key={movie.imdbID}>
          <img src={movie.Poster} alt="movie"></img>
          <div></div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
