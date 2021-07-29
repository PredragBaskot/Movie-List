import React from "react";
import "./Movielist.css";
import { Link } from "react-router-dom";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="movie" key={movie.imdbID}>
            <Link to={`/details/${movie.imdbID}`}>
              <img src={movie.Poster === 'N/A' ? "https://i.redd.it/ds1luav7dl851.jpg" : movie.Poster} alt="movie" />
            </Link>
        </div>
      ))}
    </>
  );
};


export default MovieList;

