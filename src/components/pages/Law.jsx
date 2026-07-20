import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const locations = [
  "Brooklyn",
  "Bronx",
  "Manhattan",
  "Queens",
  "Staten Island",
];


function Law() {

  const [lawyers, setLawyers] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showLocations, setShowLocations] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {

    fetch("https://bobapp-e93h.onrender.com/NoirX/places")
      .then((res) => res.json())
      .then((data) => {

        const filtered = data.filter(
          (item) => item.category === "Legal"
        );

        setLawyers(filtered);

      })
      .catch((err) =>
        console.error("Error fetching legal:", err)
      );

  }, []);



  const filteredData = selectedLocation
    ? lawyers.filter(
        (item) => item.location === selectedLocation
      )
    : lawyers;



  function buildMapsUrl(item) {

    const destination =
      item.lat && item.lng
        ? `${item.lat},${item.lng}`
        : item.address || item.name;


    return `https://www.google.com/maps/dir/?api=1&${new URLSearchParams(
      {
        destination,
        origin: "Current Location",
        travelmode: "driving",
      }
    )}`;

  }



  function openDirections(item) {

    window.open(
      buildMapsUrl(item),
      "_blank"
    );

  }



  return (

    <div className="
      min-h-screen
      bg-yellow-600
      flex
      justify-center
      p-3
      sm:p-6
    ">



      <div className="
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
          gap-4
          p-4
          sm:p-5 border-b border-black
        ">

          <div className="min-w-0">
 
     <h1 className="text-xl font-bold">NOIREX <span className="text-xs">BETA</span></h1>
 
    <h2 className="
      text-5xl
      sm:text-6xl
      lg:text-8xl
      font-bold
      
    ">
      LAW SERVICES
      </h2>

      <div className="flex flex-col gap-2 min-w-0">
      <nav className="
            flex
            gap-3
            text-xs
            sm:text-sm
            whitespace-nowrap
            font-semibold
            overflow-x-auto
            max-w-full
          ">

            <button
    onClick={() => setShowMenu(!showMenu)}
    className="
      font-semibold
      hover:underline
    "
  >
    MENU +
  </button>

  {showMenu && (
    <div className="
      mt-2
      space-x-2
    ">
            <Link to="/Home">Home</Link>
            <Link to="/Eats">Eats</Link>
            <Link to="/Drinks">Drinks</Link>         
            <Link to="/Arts">Art</Link>
            <Link to="/Therapy">Therapy</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/About">About Us</Link>       
</div>  
  )}
          </nav>
<div>
  <button
    onClick={() => setShowLocations(!showLocations)}
    className="
      flex
      gap-3
      text-xs
      sm:text-sm
      whitespace-nowrap
      font-semibold
      hover:underline
    "
  >
    LOCATION +
  </button>

  {showLocations && (
    <div className="
      flex
      gap-3
      mt-2
      text-xs
      sm:text-sm
      whitespace-nowrap
      font-semibold
    ">

      <div
        onClick={() => setSelectedLocation(null)}
        className="cursor-pointer hover:underline"
      >
        All
      </div>

      {locations.map((location) => (
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
  )}
</div>
    </div>
    </div>
 
        
          
{/* Location Filter */}
          <div className="
            text-right
            text-xs
            sm:text-sm
            space-y-1
          ">
            <div className="font-semibold text-sm sm:text-xl">
              026
            </div>

            <div className="font-semibold text-sm sm:text-xl">
              NYC EDITION
            </div>

           
          </div>

          
        </header>
        {/* TITLE + FILTER */}


        <section className="
          flex
          justify-between
          items-start
          px-5
          pt-4
          pb-6
        ">

       
        </section>

        {/* CARDS */}


        <main className="
          px-5
          pb-8
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
        ">


          {filteredData.length > 0 ? (

            filteredData.map((item)=>(


              <article

                key={item.id}

                className="cursor-pointer"

                onClick={() =>
                  openDirections(item)
                }

              >



                <div className="
                  h-48
                  border-2
                  border-black
                  bg-white
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






                <div className="mt-3">


                  <h2 className="
                    text-lg
                    font-bold
                  ">

                    {item.name}

                  </h2>



                  <p className="text-sm">
                    {item.address}
                  </p>



                  <p className="text-sm">
                    {item.location}
                  </p>



                  <p className="text-sm">
                    {item.category}
                  </p>




                  <button

                    onClick={(e)=>
                      e.stopPropagation()
                    }

                    className="
                      mt-3
                      px-4
                      py-1
                      border-2
                      border-black
                      text-sm
                      hover:bg-black
                      hover:text-white
                    "

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



              </article>


            ))


          ) : (


            <p>
              No legal services found.
            </p>


          )}



        </main>




      </div>


    </div>

  );

}


export default Law;