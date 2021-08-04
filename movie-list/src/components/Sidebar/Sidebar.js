import React, { useState } from "react";
import "antd/dist/antd.css";
import "./Sidebar.css";
import { Menu } from "antd";

const { SubMenu } = Menu;

const YEAR_FILTER_CHOICES = [
  2020,
  2019,
  2018,
  2017,
  2016,
];

const Sidebar = ({ onSelect, setPage }) => {
  const [selectedYear, setSelectedYear] = useState(null);


  const handleClick = (e) => {
    setSelectedYear(e.key)
  };

  return (

    <div className="sidebarcomp">

      <Menu
        mode="inline"

        onClick={handleClick}
        style={{ width: 200 }}
        defaultOpenKeys={["sub1"]}
        selectedKeys={[selectedYear]}
      >

        <SubMenu key="sub1" title="All movies" className="sub-menu">

          {YEAR_FILTER_CHOICES.map((year) => (
            <Menu.Item
              key={year}
              className="sub-menu"
              onClick={() => onSelect(year);
                              setPage(1);
            }
            >
              {year}
            </Menu.Item>
          ))}
        </SubMenu>
        <Menu.Item key="favourites">
          <a href="/favorites">Favourites</a>

        </Menu.Item>

      </Menu>

    </div>

  );
};

export default Sidebar;
