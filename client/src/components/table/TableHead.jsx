import React from "react";

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th className="table__head">Date</th>
        <th className="table__head">Name</th>
        <th className="table__head">Quantity</th>
        <th className="table__head">Distance</th>
      </tr>
    </thead>
  );
};

export default TableHead;
