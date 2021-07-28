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
  return (
    <div className="home">
      <MovieListHeading />
      <div className="movieList">
        {searchError}
        <MovieList movies={movies} />
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