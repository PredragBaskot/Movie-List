import React from "react";
import "antd/dist/antd.css";
import { Pagination } from "antd";
import "./Pagination.css";

const MyPagination = () => {
  const handlePageChange = (value) => {
    console.log(value);
  };

  return (
    <Pagination
      defaultCurrent={1}
      total={10}
      onChange={handlePageChange}
      className="btn-pag"
      defaultPageSize={2}
      pageSizeOptions={[2, 5, 10]}
      showSizeChanger={true}
      responsive={true}
    />
  );
};

export default MyPagination;
