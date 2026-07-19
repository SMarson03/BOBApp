import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const locations = [
  "Brooklyn",
  "Bronx",
  "Manhattan",
  "Queens",
  "Staten Island",
];

function Therapy() {
  const [myData, setMyData] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    fetch("https://bobapp-e93h.onrender.com/NoirX/places")
      .then(res => res.json())
      .then(data =>
        setMyData(
          data.filter(item => item.category === "Therapy")
        )
      )
      .catch(err => console.error("Error fetching therapy:", err));
  }, []);

  const filteredData = selectedLocation
    ? myData.filter(item => item.location === selectedLocation)
    : myData;


  function openDirections(item) {
    const destination = encodeURIComponent(
      item.address || item.name
    );

    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${destination}`,
      "_blank"
    );
  }


  return (
    <div className="min-h-screen bg-yellow-600 flex justify-center p-3 sm:p-6">

      <div className="
        relative
        w-full
        max-w-7xl
        bg-amber-50
        shadow-xl
        overflow-hidden
      ">


        {/* HEADER */}

        <header className="
          flex
          justify-between
          items-start
          gap-5
          p-4
          sm:p-5
        ">

          <div className="text-xl font-bold">
            NOIREX
          </div>


          <nav className="
            flex
            gap-4
            text-sm
            whitespace-nowrap
            overflow-x-auto
          ">

            <Link to="/Home">Home</Link>
            <Link to="/Eats">Eats</Link>
            <Link to="/Drinks">Drinks</Link>
            <Link to="/Arts">Art</Link>
            <Link to="/Law">Law</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/About">About</Link>

          </nav>

        </header>



        {/* CARDS */}

        <main className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-5
          p-5
        ">

          {filteredData.map(item => (

            <div
              key={item.id}
              onClick={() => openDirections(item)}
              className="cursor-pointer"
            >


              <div className="
                border-2
                border-black
                h-44
                p-3
                flex
                justify-center
                items-center
              ">

                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="
                    w-full
                    h-full
                    object-contain
                  "
                />

              </div>


              <div className="
                mt-3
                text-sm
                font-bold
              ">

                <p>{item.name}</p>
                <p>{item.address}</p>
                <p>{item.location}</p>

              </div>


              <button
                className="
                  mt-4
                  w-16
                  h-8
                  border-2
                  border-black
                  bg-amber-50
                  text-sm
                "
                onClick={(e)=>e.stopPropagation()}
              >

                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                </a>

              </button>


            </div>

          ))}

        </main>


      </div>



      {/* LOCATION PANEL */}

      <aside className="
        absolute
        top-24
        right-4
        text-right
        text-sm
      ">

        <div className="text-xl font-semibold">
          025
        </div>

        <div className="text-xl font-semibold">
          NYC EDITION
        </div>


        <div className="mt-2 space-y-1">

          <div
            onClick={() => setSelectedLocation(null)}
            className="cursor-pointer hover:underline"
          >
            All
          </div>


          {locations.map(location => (

            <div
              key={location}
              onClick={() => setSelectedLocation(location)}
              className={`
                cursor-pointer
                hover:underline
                ${
                  selectedLocation === location
                    ? "font-bold"
                    : ""
                }
              `}
            >
              {location}
            </div>

          ))}

        </div>

      </aside>




      {/* RESULTS */}

      <aside className="
        fixed
        bottom-5
        right-5
        w-40
        max-h-52
        overflow-y-auto
        bg-black
        text-white
        p-3
        text-right
        text-sm
      ">


        {filteredData.length ? (

          filteredData.map(item => (

            <div
              key={item.id}
              onClick={() => openDirections(item)}
              className="
                border-b
                pb-2
                mb-2
                cursor-pointer
              "
            >

              <h2 className="font-semibold">
                {item.name}
              </h2>

              <p className="text-yellow-500">
                {item.location}
              </p>

            </div>

          ))

        ) : (

          <p>No therapists found.</p>

        )}


      </aside>


    </div>
  );
}

export default Therapy;