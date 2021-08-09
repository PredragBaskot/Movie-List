import React, { useState, useEffect } from "react";

function AddFavourites({ movie }) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    let newStorageArray = [movie];

    const { imdbID } = movie;

    const favoritesFromStorage = JSON.parse(localStorage.getItem("favorites")); //dohvatili smo favorite

    if (favoritesFromStorage) {
      const foundObject = favoritesFromStorage.find(
        (movie) => movie.imdbID === imdbID
      );

      setIsFav(!!foundObject); //u odnosu na to settuje isFav promenljivu,
      // console.log(foundObject); // pronadji film po ID
      newStorageArray = [...newStorageArray, ...favoritesFromStorage]; //Dohvati iz local storage-a favorite, proveri da li je film iz propsa unutar tog local storage niza
    }
  }, []); //kada se use effect ponasa kao koja lifecycle metoda?

  const addFavorite = (index) => {
    let newStorageArray = [movie];
    const favoritesFromStorage = JSON.parse(localStorage.getItem("favorites"));
    if (favoritesFromStorage) {
      newStorageArray = [...newStorageArray, ...favoritesFromStorage];
    }
    localStorage.setItem("favorites", JSON.stringify(newStorageArray));
    setIsFav(true);
  };

  function RemoveFavorites() {
    const favoritesFromStorage = JSON.parse(localStorage.getItem("favorites"));
    let newFilteredFavorites = favoritesFromStorage.filter(
      (movieFromStorage) => movieFromStorage.imdbID !== movie.imdbID
    );
    localStorage.setItem("favorites", JSON.stringify(newFilteredFavorites));
    setIsFav(false);
  }

  const spanClass = () => (isFav ? "favs-span-add" : "favs-span");
  const changeFav = () => (isFav ? RemoveFavorites : addFavorite);

  return (
    <span className={spanClass()} onClick={changeFav()}>
      {isFav ? `Remove From Favorites` : `Add To Favorites`}
    </span>
  );
}

export default AddFavourites;
