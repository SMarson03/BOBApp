function DashboardStats({ places, categories, locations }) {

  return (

    <div className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-4
      gap-4
      mb-6
    ">


      {/* TOTAL BUSINESSES */}

      <div className="
        border-2
        border-black
        bg-yellow-100
        p-4
      ">

        <p className="text-sm">
          Businesses
        </p>

        <h2 className="
          text-3xl
          font-bold
        ">
          {places.length}
        </h2>

      </div>





      {/* CATEGORIES */}

      <div className="
        border-2
        border-black
        bg-yellow-100
        p-4
      ">

        <p className="
          text-sm
          font-bold
          mb-2
        ">
          Categories
        </p>


        <div className="
          space-y-1
          text-sm
        ">

          {categories.map(category => (

            <div
              key={category}
              className="
                flex
                justify-between
                gap-3
              "
            >

              <span>
                {category.replaceAll("_"," ")}
              </span>


              <span className="font-bold">

                {
                  places.filter(
                    place =>
                      place.category === category
                  ).length
                }

              </span>


            </div>

          ))}

        </div>

      </div>







      {/* BOROUGHS */}

      <div className="
        border-2
        border-black
        bg-yellow-100
        p-4
      ">


        <p className="
          text-sm
          font-bold
          mb-2
        ">
          Boroughs
        </p>



        <div className="
          space-y-1
          text-sm
        ">


          {locations.map(location => (

            <div
              key={location}
              className="
                flex
                justify-between
                gap-3
              "
            >

              <span>
                {location}
              </span>


              <span className="font-bold">

                {
                  places.filter(
                    place =>
                      place.location === location
                  ).length
                }

              </span>


            </div>

          ))}


        </div>


      </div>








      {/* DATE */}

      <div className="
        border-2
        border-black
        bg-yellow-100
        p-4
      ">


        <p className="text-sm">
          Today
        </p>


        <h2 className="
          text-xl
          font-bold
        ">

          {new Date().toLocaleDateString()}

        </h2>


      </div>



    </div>

  );

}


export default DashboardStats;