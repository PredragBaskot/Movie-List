import { Space, Input } from "antd";
import React from "react";
import "./Searchbar.css";

const { Search } = Input;

const Searchbar = ({setPage, setSearchValue, searchValue}) => {

  return (
    <Space>
      <Search
        className="search"
        placeholder="Search movies"
        enterButton
        value={searchValue}
        onChange={(event) => {
          setPage(1);
          setSearchValue(event.target.value);
        }}
      />
    </Space>
  );
};

export default Searchbar;
