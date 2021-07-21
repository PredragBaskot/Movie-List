import React from "react";
import "antd/dist/antd.css";
import { Menu, Dropdown, Button } from "antd";
import "./AppHeader.css";

function AppHeader() {
    const menu = (
        <Menu>
            <Menu.Item key="1">
                MOVIE
            </Menu.Item>
            <Menu.Item key="2">
                SERIES
            </Menu.Item>
            <Menu.Item key="3">
                TV SHOW
            </Menu.Item>
        </Menu>
    );
    return (
        <>
            <Dropdown overlay={menu} className="btn-dropdown">
                <Button>TYPE</Button>
            </Dropdown>
        </>
    );
}

export default AppHeader;