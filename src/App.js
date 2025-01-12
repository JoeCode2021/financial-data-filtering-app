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
    <div className="flex flex-col">
      <h1 className="bg-blue-500 text-white text-white text-center p-4 py-2 rounde">Financial Data</h1>
      <main className="flex-1 overflow-y-auto">
      <FilterControls onFilter={handleFilter} />
      <SortControls onSort={handlSort}/>
      <div>
      <Table data={sortedData} />
      </div>
      </main>  
    </div>
  );
};

export default App;
