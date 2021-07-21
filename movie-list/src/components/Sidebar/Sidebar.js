import React from "react";
import "antd/dist/antd.css";
import "./Sidebar.css";
import { Menu } from "antd";

const { SubMenu } = Menu;

const Sidebar = () => {
  return (
    <div>
      <Menu mode="inline">
        <SubMenu key="sub1" title="All movies" className="sub-menu">
          <Menu.Item key="2020" className="sub-menu">
            2020
          </Menu.Item>
          <Menu.Item key="2019" className="sub-menu">
            2019
          </Menu.Item>
          <Menu.Item key="2018" className="sub-menu">
            2018
          </Menu.Item>
          <Menu.Item key="2017" className="sub-menu">
            2017
          </Menu.Item>
          <Menu.Item key="2016" className="sub-menu">
            2016
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title="Favorites" className="sub-menu"></SubMenu>
      </Menu>
    </div>
  );
};

export default Sidebar;
