import React, { useState, useEffect } from "react";
import "./App.css";
import { Layout } from "antd";
import Searchbar from "./components/Searchbar/Searchbar";
import AppHeader from "./components/AppHeader/AppHeader";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Favorites from "./components/Favorites/Favorites";
import Home from "./components/Home/Home.js";
import Details from "./components/Details/Details";

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
          <Router>
            <Content>
              <div>
                <Switch>
                  <Route
                    path="/home"
                    component={() => (
                      <Home
                        searchError={searchError}
                        movies={movies}
                        currentPosts={currentPosts}
                        setPage={setPage}
                        postPerPage={postPerPage}
                        total={total}
                        page={page}
                      />
                    )}
                  />
                  <Route path="/favorites">
                    <Favorites />
                  </Route>
                  <Route path="/details">
                    <Details />
                  </Route>
                </Switch>
              </div>
            </Content>
          </Router>

        </Layout>
      </Layout >
    </div >
  );
};

export default App;
