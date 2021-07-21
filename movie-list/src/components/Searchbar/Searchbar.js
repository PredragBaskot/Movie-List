import { Input } from "antd";
import React from "react";
import "./Searchbar.css";

const Searchbar = () => {
  return (
    <div className="search">
      <Input size="default" placeholder="Search movies" />
    </div>
  );
};

export default Searchbar;
