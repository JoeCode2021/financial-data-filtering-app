import React from "react";

const SortControls = ({onSort}) => {
    const handleSort = (key, order) => {
        onSort ({key, order});
    };

    return (
        <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Sort Options</h2>
            <div className="flex gap-4">
                <button
                    onClick={() => handleSort("date", "asc")}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                >Date (Asc)
                </button>
                <button
                    onClick={() => handleSort ("date", "desc")}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Date (Desc)
                </button>
                <button
                    onClick={() => handleSort ("revenue", "asc")}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Revenue (Asc)
                </button>
                <button
                    onClick={() => handleSort ("revenue", "desc")}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Revenue (Desc)
                </button>
                <button
                    onClick={() => handleSort ("netIncome", "asc")}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Net Income (Asc)
                </button>
                <button
                    onClick={() => handleSort ("netIncome", "desc")}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Net Income (Desc)
                </button>
            </div>            
        </div>
    );
};

export default SortControls;