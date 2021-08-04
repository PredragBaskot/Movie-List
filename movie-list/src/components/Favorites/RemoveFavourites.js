import React from "react";
import { CloseSquareOutlined } from "@ant-design/icons";

function RemoveFavourites({ removeFavs }) {
    return (
        <span className="favs-span" onClick={removeFavs}>
            Remove from favorites
            <CloseSquareOutlined />
        </span>
    );
}

export default RemoveFavourites;
