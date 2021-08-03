import React from "react";
import { CheckCircleOutlined } from "@ant-design/icons";

function AddFavourites({movie}) {
  const addFavorite = () => {
   let newStorageArray = [movie];
    const favoritesFromStorage = JSON.parse(localStorage.getItem("favorites"));
    if (favoritesFromStorage) {
      newStorageArray = [...newStorageArray, ...favoritesFromStorage];
    }
    //favoritesFromStorage.push(movie);
    localStorage.setItem("favorites", JSON.stringify(newStorageArray));
  };
  return (
    <span className="favs-span" onClick={addFavorite}>
      Add To Favourites
      <CheckCircleOutlined />
    </span>
  );
}

export default AddFavourites;
