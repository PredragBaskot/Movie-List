import React from "react";
import "./Movielist.css";


const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => (
                <div className="movie" key={movie.imdbID}>
                    <img src={movie.Poster} alt="movie" />
                </div>
            ))}
        </>
    );
};

export default MovieList;
