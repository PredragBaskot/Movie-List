import React, { useState, useEffect } from "react";
import "./App.css";
import { Layout } from "antd";
import Searchbar from "./components/Searchbar/Searchbar";
import AppHeader from "./components/AppHeader/AppHeader";
import Sidebar from "./components/Sidebar/Sidebar";
import MovieListHeading from "./components/Movie/MovieListHeading";
import MovieList from "./components/Movie/MovieList";

const { Header, Sider, Content } = Layout;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=ccb01116`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="App">
      <Layout>
        <Sider>
          <Sidebar />
        </Sider>
        <Layout>
          <Header>
            <AppHeader />

            <Searchbar
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            ></Searchbar>
          </Header>

          <Content>
            <MovieList movies={movies} />
            <MovieListHeading />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
