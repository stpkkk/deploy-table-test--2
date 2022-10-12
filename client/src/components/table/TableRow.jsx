import React from "react";
import moment from "moment";

export const TableRow = ({ clients }) => {
  return (
    <>
      {clients.map((item, index) => (
        <tr key={index}>
          <td className="table__item">
            {moment(item.date).utc().format("DD-MM-YYYY")}
          </td>
          <td className="table__item">{item.name}</td>
          <td className="table__item">{item.quantity}</td>
          <td className="table__item">{item.distance}</td>
        </tr>
      ))}
    </>
  );
};

export default TableRow;
