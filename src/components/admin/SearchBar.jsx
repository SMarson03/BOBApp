import React from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="flex justify-center mb-8">
      <input
        type="text"
        placeholder="Search by name, address, cuisine, or location..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="
          w-[450px]
          p-3
          border-4
          border-black
          bg-amber-50
          text-black
          placeholder:text-gray-500
          focus:outline-none
        "
      />
    </div>
  );
}

export default SearchBar;