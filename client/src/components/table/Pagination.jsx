import React from "react";

export const Pagination = ({ clientsPerPage, totalClients, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalClients / clientsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li key={number}>
          <a
            onClick={(e) => {
              e.preventDefault();
              paginate(number);
            }}
            href="!#"
            className="pagination-numbers"
          >
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
