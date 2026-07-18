import React from "react";

function Filters({
  locations,
  categories,
  selectedLocation,
  setSelectedLocation,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div
      className="
        absolute
        top-24
        right-4
        text-right
        space-y-6
        z-20
      "
    >
      <div className="text-2xl font-semibold">
        ADMIN
      </div>

      {/* Categories */}
      <div>
        <p className="font-bold mb-2">
          Category
        </p>

        <div
          onClick={() => setSelectedCategory(null)}
          className={`cursor-pointer hover:underline ${
            selectedCategory === null
              ? "font-bold text-white"
              : ""
          }`}
        >
          All
        </div>

        {categories.map((category) => (
          <div
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`cursor-pointer hover:underline ${
              selectedCategory === category
                ? "font-bold text-white"
                : ""
            }`}
          >
            {category.replaceAll("_", " ")}
          </div>
        ))}
      </div>

      {/* Locations */}
      <div>
        <p className="font-bold mb-2">
          Location
        </p>

        <div
          onClick={() => setSelectedLocation(null)}
          className={`cursor-pointer hover:underline ${
            selectedLocation === null
              ? "font-bold text-white"
              : ""
          }`}
        >
          All
        </div>

        {locations.map((location) => (
          <div
            key={location}
            onClick={() => setSelectedLocation(location)}
            className={`cursor-pointer hover:underline ${
              selectedLocation === location
                ? "font-bold text-white"
                : ""
            }`}
          >
            {location.replaceAll("_", " ")}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filters;