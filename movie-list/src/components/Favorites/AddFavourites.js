import React, { useState } from "react";
import { CheckCircleOutlined } from "@ant-design/icons";

function AddFavourites({movie}) {
  const [isClicked, setIsClicked] = useState(false);

  const addFavorite = () => {
  let newStorageArray = [movie];
  const favoritesFromStorage = JSON.parse(localStorage.getItem("favorites"));
  if (favoritesFromStorage) {
      newStorageArray = [...newStorageArray, ...favoritesFromStorage];
    }
    localStorage.setItem("favorites", JSON.stringify(newStorageArray));
    setIsClicked(true);
  };
  
  const spanClass = () => isClicked ? 'favs-span-added' : 'favs-span'; //ovo je cistiji zapis kada imas jednu liniju koda
  //ova dva zapisa su apsolutno isti, samo je ovo gore sintaticki lepse
  // const spanClass = () => {
  //   return isClicked ? 'favs-span-added' : 'favs-span'
  // }

  return (
    <span className={spanClass()} onClick={addFavorite}> {/*sa Ternarnim operatorom mozes da resis sve ove dualne operacije, ili uradi ovo ili uradi ono */}
      Add To Favourites
      <CheckCircleOutlined />
    </span>
  );
}

export default AddFavourites;
