import React from "react";
import "./SearchBlock.scss";
import { columns, conditions, pageValues } from "./searchBlockData";

const SearchBlock = ({
  clientsPerPage,
  onChangeClientsPerPage,
  searchTerm,
  setSearchTerm,
  setColumnsFilter,
  setConditionFilter,
  totalClients,
}) => {
  return (
    <div className="search-block-container">
      <select
        className="input-style select-style"
        name="columns"
        id="columns"
        defaultValue="Column"
        onChange={(e) => setColumnsFilter(e.target.value)}
      >
        <option value="default">Columns:</option>
        {columns.map(({ name, option }) => (
          <option key={name} value={name}>
            {option}
          </option>
        ))}
      </select>
      {
        <select
          className="input-style"
          name="condition"
          id="condition"
          defaultValue="default"
          onChange={(e) => setConditionFilter(e.target.value)}
        >
          <option value="default">Conditions:</option>
          {conditions.map(({ name, option }) => (
            <option key={name} value={name}>
              {option}
            </option>
          ))}
        </select>
      }
      <input
        className="input-style"
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <select
        className="input-style rows-quantity"
        defaultValue={clientsPerPage}
        onChange={onChangeClientsPerPage}
      >
        {pageValues.map(({ value }) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
        <option value={totalClients}>All</option>
      </select>
    </div>
  );
};

export default SearchBlock;
