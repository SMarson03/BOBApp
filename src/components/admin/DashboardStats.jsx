function DashboardStats({ places, categories, locations }) {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">

      <div className="border-2 border-black bg-yellow-100 p-4">
        <p className="text-sm">
          Businesses
        </p>

        <h2 className="text-3xl font-bold">
          {places.length}
        </h2>
      </div>


      <div className="border-2 border-black bg-yellow-100 p-4">
        <p className="text-sm">
          Categories
        </p>

        <h2 className="text-3xl font-bold">
          {categories.length}
        </h2>
      </div>


      <div className="border-2 border-black bg-yellow-100 p-4">
        <p className="text-sm">
          Boroughs
        </p>

        <h2 className="text-3xl font-bold">
          {locations.length}
        </h2>
      </div>


      <div className="border-2 border-black bg-yellow-100 p-4">
        <p className="text-sm">
          Today
        </p>

        <h2 className="text-xl font-bold">
          {new Date().toLocaleDateString()}
        </h2>
      </div>

    </div>
  );
}

export default DashboardStats;