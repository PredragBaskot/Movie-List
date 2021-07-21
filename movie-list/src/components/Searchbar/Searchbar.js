import { Space, Input } from "antd";
import React from "react";
import "./Searchbar.css";

const { Search } = Input;

const Searchbar = (props) => {
  return (
    <Space>
      <Search
        className="search"
        placeholder="Search movies"
        enterButton
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
      />
    </Space>
  );
};

export default Searchbar;
