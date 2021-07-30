import React from "react";
import { CheckCircleOutlined } from "@ant-design/icons";

function AddFavourites({ onAdd }) {
  return (
    <span className="favs-span" onClick={onAdd}>
      Add To Favourites
      <CheckCircleOutlined />
    </span>
  );
}

export default AddFavourites;
