import React from "react";

const FilterControls =() => {
    return (
        <div className ="mb-4">
            <h2 className="text-lg font-semibold mb-2">Filters</h2>
            <div className="flex gap-4">
                <input
                    type="text"
                    placeholder="Start year"
                    className="border border gray-300 px-2 py-1"
                />
                <input
                    type="text"
                    placeholder="End year"
                    className="border border gray-300 px-2 py-1"
                />
            </div>
        </div>
    );
};

export default FilterControls;