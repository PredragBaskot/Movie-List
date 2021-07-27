import React, { useState, useEffect } from "react";
import "./App.css";
import { Layout } from "antd";
import Searchbar from "./components/Searchbar/Searchbar";
import AppHeader from "./components/AppHeader/AppHeader";
import Sidebar from "./components/Sidebar/Sidebar";
import MovieListHeading from "./components/Movie/MovieListHeading";
import MovieList from "./components/Movie/MovieList";
import { Pagination } from "antd";

const { Header, Sider, Content } = Layout;

const RESULT_TYPES = [
  { key: 'movie', label: 'MOVIE' },
  { key: 'series', label: 'SERIES' },
  { key: 'episode', label: 'EPISODE' },
];

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchError, setSearchError] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState(RESULT_TYPES[0].key);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [postPerPage] = useState(10);
  const [currentPosts] = useState([]);

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?apikey=ccb01116&s=${searchValue || "white"}&y=${year}&type=${type}&page=${page}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
      setSearchError(null);
      setTotal(responseJson.totalResults);
    }

    if (responseJson.Response === 'False') {
      setMovies([]);
      setTotal(0);
      setSearchError(
        responseJson.Error || "Something went wrong! Please try again!"
      );
    }
  };

  useEffect(() => {
    // if (true) {
    getMovieRequest(searchValue);
    // }
  }, [searchValue, year, type, page]);

  useEffect(() => {
    if (!searchValue.trim()) {
      setMovies([]);
      setSearchError(null);
    }
  }, [searchValue]);

  return (
    <div className="App">
      <Layout>
        <Sider>
          <Sidebar onSelect={setYear} />
        </Sider>

        <Layout>
          <Header>
            <AppHeader onSelect={setType} types={RESULT_TYPES} />

            <Searchbar
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </Header>

          <Content>

            <MovieListHeading />

            <div className="movieList">
              {searchError ? <span style={{ color: 'red' }}>{searchError} </span> : null}
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
          </Content>
        </Layout>
      </Layout >
    </div >
  );
};

export default App;
