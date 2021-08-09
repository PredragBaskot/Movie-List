import React, { useEffect, useState } from "react";
import MovieList from "../../components/Movie/MovieList";
import "./Favorites.css";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favoritesFromLocalStorage =
      JSON.parse(localStorage.getItem("favorites")) ?? [];
    setFavorites(favoritesFromLocalStorage);
  }, [favorites]);

  return (
    <div>
      <h1>FAVORITES</h1>
      <div className="favorites">
        <MovieList movies={favorites} hasFavoritesButton={true} />
      </div>
    </div>
  );
}

export default Favorites;
