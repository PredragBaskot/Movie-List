import React from "react";
import { Breadcrumb } from "antd";
import "./Breadcrumb.css";

function MyBreadcrumb() {
  return (
    <div>
      <Breadcrumb className="breadcrumb">
        <Breadcrumb.Item>
          <a href="/home">Home</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/favorites">Favorites</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/details">Details</a>
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default MyBreadcrumb;
