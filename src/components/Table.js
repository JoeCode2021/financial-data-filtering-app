import React from "react";

const Table = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className=" min-w-full table-auto border-collaps border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Revenue</th>
            <th className="px-4 py-2">Net Income</th>
            <th className="px-4 py-2">Gross Profit</th>
            <th className="px-4 py-2">EPS</th>
            <th className="px-4 py-2">
              Operating Income
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{row.date}</td>
              <td className="border border-gray-300 px-4 py-2">
                {row.revenue}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {row.netIncome}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {row.grossProfit}
              </td>
              <td className="border border-gray-300 px-4 py-2">{row.eps}</td>
              <td className="border border-gray-300 px-4 py-2">
                {row.operatingIncome}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
