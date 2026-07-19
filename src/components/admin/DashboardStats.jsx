function DashboardStats({ places, categories, locations }) {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">

      <div className="border-2 border-black bg-yellow-100 p-4">
        <p className="text-sm">Businesses</p>
        <h2 className="text-3xl font-bold">
          {places.length}
        </h2>
      </div>

      <div className="border-2 border-black bg-yellow-100 p-4">
        <p className="text-sm">Categories</p>

        {categories.map(category => (
          <div
            key={category}
            className="flex justify-between text-sm mt-1"
          >
            <span>{category.replaceAll("_", " ")}</span>

            <span>
              {
                places.filter(
                  place => place.category === category
                ).length
              }
            </span>
          </div>
        ))}
      </div>

      <div className="border-2 border-black bg-yellow-100 p-4">
        <p className="text-sm">Boroughs</p>

        {locations.map(location => (
          <div
            key={location}
            className="flex justify-between text-sm mt-1"
          >
            <span>{location}</span>

            <span>
              {
                places.filter(
                  place => place.location === location
                ).length
              }
            </span>
          </div>
        ))}
      </div>

      <div className="border-2 border-black bg-yellow-100 p-4">
        <p className="text-sm">Today</p>

        <h2 className="text-xl font-bold">
          {new Date().toLocaleDateString()}
        </h2>
      </div>

    </div>
  );
}

export default DashboardStats;