import React, { useEffect, useState } from "react";
import MovieList from "../Movie/MovieList";
import "./Favorites.css";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favoritesFromLocalStorage =
      JSON.parse(localStorage.getItem("favorites")) ?? [];
    setFavorites(favoritesFromLocalStorage);
  }, []);

  return (
    <div>
      <h1>FAVORITES</h1>
      <div className="favorites">
        <MovieList movies={favorites} />
      </div>
    </div>
  );
}

export default Favorites;
