import React from "react";
import "antd/dist/antd.css";
import { Select } from "antd";
import "./AppHeader.css";

const { Option } = Select;

const AppHeader = ({ onSelect, types }) => {
  return (
    <>
      <Select
        defaultValue={types[0].label}
        className="btn-select"
        onSelect={onSelect}
      >
        {types.map(({ key, label }) => (
          <Option key={key} value={key}>
            {label}
          </Option>
        ))}
      </Select>
    </>
  );
};

export default AppHeader;
