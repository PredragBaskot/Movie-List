import React from "react";
import "./Home.css";

import MovieListHeading from "../Movie/MovieListHeading";
import MovieList from "../Movie/MovieList";
import { Pagination } from "antd";

const Home = ({
  searchError,
  movies,
  currentPosts,
  setPage,
  postPerPage,
  total,
  page,
}) => {
  const addToFavorites = (movie) => {
    let newStorageArray = [movie];
    const favoritesFromStorage = JSON.parse(localStorage.getItem("favorites"));
    if (favoritesFromStorage) {
      newStorageArray = [newStorageArray, ...favoritesFromStorage];
    }
    console.log(newStorageArray);

    localStorage.setItem("favorites", JSON.stringify(newStorageArray));
  };

  return (
    <div className="home">
      <MovieListHeading />
      <div className="movieList">
        {searchError ? (
          <span style={{ color: "red" }}>{searchError} </span>
        ) : null}
        <MovieList
          movies={movies}
          addToFavorites={addToFavorites}
          hasFavoritesButton={true}
        />
        {currentPosts.map((movie) => (
          <div key={movie.imdbID}>{movie.Poster}</div>
        ))}
        <Pagination
          onChange={(value) => setPage(value)}
          pageSize={postPerPage}
          total={total}
          current={page}
          pageSizeOptions={[2, 5, 10]}
          showSizeChanger={true}
          responsive={true}
        />
      </div>
    </div>
  );
};

export default Home;
