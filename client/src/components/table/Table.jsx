import React from "react";
import TableRow from "./TableRow";
import Pagination from "./Pagination";
import TableHead from "./TableHead";
import "./Table.scss";

const Table = ({ clients, paginate, currentClients, clientsPerPage }) => {
  return (
    <>
      <table className="table">
        <TableHead />
        <tbody>
          <TableRow clients={currentClients} />
        </tbody>
      </table>
      <Pagination
        clientsPerPage={clientsPerPage}
        totalClients={clients.length}
        paginate={paginate}
      />
    </>
  );
};

export default Table;
