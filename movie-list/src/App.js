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
  const [year, setYear] = useState("");

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?apikey=ccb01116&s=${searchValue}&y=${year}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue, year]);

  return (
    <div className="App">
      <Layout>
        <Sider>
          <Sidebar onSelect={setYear} />
        </Sider>
        <Layout>
          <Header>
            <AppHeader />

            <Searchbar
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </Header>

          <Content>
            <MovieListHeading />
            <div className="movieList">
              <MovieList movies={movies} />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
