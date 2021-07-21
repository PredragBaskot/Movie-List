import React from "react";
import "antd/dist/antd.css";
import { Select } from "antd";
import "./AppHeader.css";

const { Option } = Select;

function AppHeader() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <Select
        defaultValue="MOVIES"
        onChange={handleChange}
        className="btn-select"
      >
        <Option value="movies">MOVIES</Option>
        <Option value="series">SERIES</Option>
        <Option value="tvshow">TV SHOW</Option>
      </Select>
    </>
  );
}

export default AppHeader;
