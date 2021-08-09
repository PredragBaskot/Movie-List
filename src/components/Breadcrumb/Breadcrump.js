import React, { useEffect, useState } from "react";
import { Breadcrumb } from "antd";
import "./Breadcrumb.css";
import { Link, useLocation } from "react-router-dom";

function MyBreadcrumb() {
  const location = useLocation();

  const [breadcrumbs, setBreadcrumbs] = useState([]);

  const getPaths = () => {
    setBreadcrumbs([]);
    const seperatedPaths = location.pathname.split('/');
    const newPaths = [];
    seperatedPaths.forEach(path => {
      if (path) {
        newPaths.push(path);
      }
    })
    setBreadcrumbs(newPaths);
  }

  useEffect(() => {
    getPaths();
  }, [location])

  return (
    <div>
      <Breadcrumb className="breadcrumb">
        {breadcrumbs.length ?
          <Breadcrumb.Item>
            <Link to="/" >Home</Link>
          </Breadcrumb.Item> : <Breadcrumb.Item>
            <span>Home</span>
          </Breadcrumb.Item>
        }
        {breadcrumbs.map((breadcrumb, index) => {
          if (index === 1) return null;
          if (index === breadcrumbs.length - 1) {
            return <Breadcrumb.Item>
              <span>{breadcrumb}</span>
            </Breadcrumb.Item>
          }
          return <Breadcrumb.Item>
            <Link to={`/${breadcrumb}`} >{breadcrumb}</Link>
          </Breadcrumb.Item>
        })
        }
      </Breadcrumb>
    </div>
  );
}

export default MyBreadcrumb;
