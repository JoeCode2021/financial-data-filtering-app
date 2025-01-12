import React, { useState } from "react";

const FilterControls = ({ onFilter }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [minRevenue, setMinRevenue] = useState("");
  const [maxRevenue, setMaxRevenue] = useState("");
  const [minNetIncome, setMinNetIncome] = useState("");
  const [maxNetIncome, setMaxNetIncome] = useState("");

  const handleFilter = () => {
    onFilter({
      startDate,
      endDate,
      minRevenue: parseFloat(minRevenue) || 0,
      maxRevenue: parseFloat(maxRevenue) || Infinity,
      minNetIncome: parseFloat(minNetIncome) || 0,
      maxNetIncome: parseFloat(maxNetIncome) || Infinity,
    });
  };

  return (
    <div className="md-full mb-4">
      <h2 className="text-lg font-semibold mb-2">Filters</h2>
      <div className="md-full flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <input
            type="date"
            placeholder="Start Year (YYYY)"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="date"
            placeholder="End Year (YYYY)"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="p-2 border rounded"
          />
        </div>
        <div className="flex-gap-4">
          <input
            type="number"
            placeholder="Min Revenue (in billions)"
            value={minRevenue}
            onChange={(e) => setMinRevenue(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Max Revenue (in billions)"
            value={maxRevenue}
            onChange={(e) => setMaxRevenue(e.target.value)}
            className="p-2 border rounded"
          />
        </div>
        <div className="flex-gap-4">
          <input
            type="number"
            placeholder="Min Net Income (in billions)"
            value={minNetIncome}
            onChange={(e) => setMinNetIncome(e.target.value)}
            className="border border-gray-300 px-2 py-1"
          />
          <input
            type="number"
            placeholder="Max Net Income (in billions)"
            value={maxNetIncome}
            onChange={(e) => setMaxNetIncome(e.target.value)}
            className="border border-gray-300 px-2 py-1"
          />
        </div>
        <button
          onClick={handleFilter}
          className="bg-red-500 text-white px-2 py-4 rounded"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterControls;
