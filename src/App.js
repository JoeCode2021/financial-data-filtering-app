import React, { useEffect, useState } from "react";
import Table from "./components/Table";
import FilterControls from "./components/FilterControls";
import SortControls from "./components/SortControls";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual&apikey=${process.env.REACT_APP_API_KEY}`
        );
        const result = await response.json();
        const formattedData = result.map((item) => ({
          date: item.date,
          revenue: `$${(item.revenue / 1e9).toFixed(1)}B`,
          netIncome: `$${(item.netIncome / 1e9).toFixed(1)}B`,
          grossProfit: `$${(item.grossProfit / 1e9).toFixed(1)}B`,
          eps: `$${item.eps}`,
          operatingIncome: `$${(item.operatingIncome / 1e9).toFixed(1)}B`,
        }));
        setData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Financial Data</h1>
      <FilterControls />
      <SortControls />
      <Table data={data} />
    </div>
  );
};

export default App;
