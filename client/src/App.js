import React, { useEffect, useState } from "react";
import "../src/index.scss";
import Header from "./components/header/Header";
import Loader from "./components/loader/Loader";
import SearchBlock from "./components/table/sort/SearchBlock";
import sortData from "./components/table/sort/searchBlockData";
import Table from "./components/table/Table";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [clients, setClients] = useState([]); //data
  const [loading, setLoading] = useState(false);
  const [columnsFilter, setColumnsFilter] = useState("default");
  const [conditionFilter, setConditionFilter] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [clientsPerPage, setClientsPerPage] = useState(10);

  // Get sort data
  const filterConditionData = (items, inputTerm, activeFilter, filter) => {
    const lowerTerm = inputTerm.toLowerCase();
    switch (filter) {
      case "default":
        return items;
      case "equal":
        return items.filter((item) => {
          const lowerName = String(item[activeFilter]).toLowerCase();
          return lowerName === lowerTerm;
        });
      case "contain":
        return items.filter((item) => {
          const lowerName = String(item[activeFilter]).toLowerCase();
          return lowerName.indexOf(lowerTerm) > -1;
        });
      case "more":
        return sortData(activeFilter, items, lowerTerm, "more");

      case "less":
        return sortData(activeFilter, items, lowerTerm, "less");

      default:
        return items;
    }
  };

  const data = filterConditionData(
    clients,
    searchTerm,
    columnsFilter,
    conditionFilter
  );

  //Get current clients
  const indexOfLastClient = currentPage * clientsPerPage;
  const indexOfFirstClient = indexOfLastClient - clientsPerPage;
  const currentClients = data.slice(indexOfFirstClient, indexOfLastClient);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const onChangeClientsPerPage = (e) => {
    setClientsPerPage(e.target.value);
  };

  //Fetch
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch("https://table-welbex.herokuapp.com/delivery");

        const jsonData = await res.json();
        setClients(jsonData);
        setLoading(false);
      } catch (error) {
        alert("Error to fetch a data :(");
        console.error(error);
        throw error;
      }
    }

    fetchData();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="App-container">
      <Header />
      <SearchBlock
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setColumnsFilter={setColumnsFilter}
        setConditionFilter={setConditionFilter}
        clientsPerPage={clientsPerPage}
        onChangeClientsPerPage={onChangeClientsPerPage}
        totalClients={clients.length}
        columnsFilter={columnsFilter}
      />
      <Table
        paginate={paginate}
        currentClients={currentClients}
        currentPage={currentPage}
        clients={clients}
        clientsPerPage={clientsPerPage}
      />
    </div>
  );
}

export default App;
