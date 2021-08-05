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
import MyBreadcrumb from "./components/Breadcrumb/Breadcrump";
import { API_URL, API_KEY } from "./constants";

const { Header, Sider, Content } = Layout;

const RESULT_TYPES = [
  { key: "movie", label: "MOVIE" },
  { key: "series", label: "SERIES" },
  { key: "episode", label: "EPISODE" },
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
    const url = `${API_URL}/?apikey=${API_KEY}&s=${
      searchValue || "white"
    }&y=${year}&type=${type}&page=${page}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
      setSearchError(null);
      setTotal(responseJson.totalResults);
    }

    if (responseJson.Response === "False") {
      setMovies([]);
      setTotal(0);
      setSearchError(
        responseJson.Error || "Something went wrong! Please try again!"
      );
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
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
          <Sidebar onSelect={setYear} setPage={setPage} />
        </Sider>

        <Layout>
          <Header>
            <MyBreadcrumb />
            <AppHeader
              onSelect={setType}
              setPage={setPage}
              types={RESULT_TYPES}
            />

            <Searchbar
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              setPage={setPage}
            />
          </Header>
          <Router>
            <Content>
              <div>
                <Switch>
                  <Route
                    exact
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
                  <Route exact path="/favorites">
                    <Favorites />
                  </Route>
                  <Route path="/details/:id">
                    <Details hasFavoritesButton={true} />
                  </Route>
                </Switch>
              </div>
            </Content>
          </Router>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
