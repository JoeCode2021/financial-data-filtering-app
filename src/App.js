import React, { useEffect, useState } from "react";
import Table from "./components/Table";
import FilterControls from "./components/FilterControls";
import SortControls from "./components/SortControls";

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual&apikey=${process.env.REACT_APP_API_KEY}`
        );
        const result = await response.json();
        const formattedData = result.map((item) => ({
          date: item.date,
          revenue: item.revenue / 1e9, 
          netIncome: item.netIncome / 1e9,
          grossProfit: item.grossProfit / 1e9,
          eps: item.eps,
          operatingIncome: item.operatingIncome / 1e9,
        }));
        setData(formattedData);
        setFilteredData(formattedData);
        setSortedData(formattedData)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleFilter = (filters) => {
    const {
      startDate,
      endDate,
      minRevenue,
      maxRevenue,
      minNetIncome,
      maxNetIncome,
    } = filters;

    const filtered = data.filter((item) => {
      const year = parseInt(item.date.split("-")[0], 10);
      
      return (
        (!startDate || year >= parseInt(startDate, 10)) &&
        (!endDate || year <= parseInt(endDate, 10)) &&
        item.revenue >= minRevenue &&
        item.revenue <= maxRevenue &&
       item.netIncome >= minNetIncome &&
       item.netIncome <= maxNetIncome
      );
    });

    setFilteredData(filtered);
    setSortedData(filtered)
  };

  const handlSort = ({key, order})=> {
    const sorted =[...filteredData].sort((a, b) => {
      if (order === "asc") {
        return a[key] > b[key] ? 1 : -1;
      } else {
        return a[key] < b[key] ? 1 : -1;
      }
    });

    setSortedData(sorted);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Financial Data</h1>
      <FilterControls onFilter={handleFilter} />
      <SortControls onSort={handlSort}/>
      <Table data={sortedData} />
    </div>
  );
};

export default App;
