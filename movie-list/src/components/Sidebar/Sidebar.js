import React from "react";
import "antd/dist/antd.css";
import "./Sidebar.css";
import { Menu } from "antd";

const { SubMenu } = Menu;

const Sidebar = ({ onSelect }) => {
  return (
    <div>
      <Menu mode="inline">
        <SubMenu key="sub1" title="All movies" className="sub-menu">
          <Menu.Item
            key="2020"
            className="sub-menu"
            onClick={() => onSelect("2020")}
          >
            2020
          </Menu.Item>
          <Menu.Item
            key="2019"
            className="sub-menu"
            onClick={() => onSelect("2019")}
          >
            2019
          </Menu.Item>
          <Menu.Item
            key="2018"
            className="sub-menu"
            onClick={() => onSelect("2018")}
          >
            2018
          </Menu.Item>
          <Menu.Item
            key="2017"
            className="sub-menu"
            onClick={() => onSelect("2017")}
          >
            2017
          </Menu.Item>
          <Menu.Item
            key="2016"
            className="sub-menu"
            onClick={() => onSelect("2016")}
          >
            2016
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="favourites">
          <a href="/favorites">Favourites</a>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Sidebar;
