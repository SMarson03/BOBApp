import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const locations = [
  "Brooklyn",
  "Bronx",
  "Manhattan",
  "Queens",
  "Staten Island",
];


function Galleries() {

  const [galleries, setGalleries] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showLocations, setShowLocations] = useState(false);


  useEffect(() => {

    fetch("https://bobapp-e93h.onrender.com/NoirX/places")
      .then((res) => res.json())
      .then((data) => {

        const filtered = data.filter(
          (item) => item.category === "Art_Gallery"
        );

        setGalleries(filtered);

      })
      .catch((err) =>
        console.error("Error fetching galleries:", err)
      );

  }, []);



  const filteredData = selectedLocation
    ? galleries.filter(
        (item) => item.location === selectedLocation
      )
    : galleries;




  function buildMapsUrl(item) {

    const destination =
      item.address || item.name;


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
      bg-yellow-600
      flex
      justify-center
      p-3
      sm:p-6
      min-h-screen
    ">


      <div className="
        w-full
        max-w-7xl
        bg-amber-50
        shadow-xl
        overflow-hidden
      ">



        {/* Header */}

        <header className="
          flex
          justify-between
          items-start
          gap-4
          p-4
          sm:p-5
          border-b
          border-black
        ">


          <div className="text-xl font-bold">
      <h1 className="text-xl font-bold">NOIREX <span className="text-xs">BETA</span></h1>

    <h1 className="
      text-5xl
      sm:text-6xl
      lg:text-8xl
      font-bold
          ">
      Galleries
      <nav className="
            flex
            gap-4
            text-sm
            whitespace-nowrap
            overflow-x-auto
          ">

            <Link to="/Home">Home</Link>
            <Link to="/Drinks">Drinks</Link>
            <Link to="/Arts">Art</Link>
            <Link to="/Law">Law</Link>
            <Link to="/Therapy">Therapy</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/About">About Us</Link>

          </nav>
    </h1>
    </div>

 <aside className="
            text-right
            text-xs
            sm:text-sm
            space-y-1
          ">


            <div className="
              font-semibold
              text-sm
              sm:text-xl
            ">
              026
            </div>


            <div className="
              font-semibold
              text-sm
              sm:text-xl
            ">
              NYC EDITION
            </div>




            <button
    onClick={() =>
      setShowLocations(!showLocations)
    }
    className="
      w-full
      text-right
      font-semibold
      hover:underline
    "
  >
    LOCATION +
  </button>


  {showLocations && (

    <div className="space-y-1">

      <div
        onClick={() => setSelectedLocation(null)}
        className="cursor-pointer hover:underline"
      >
        All
      </div>


      {locations.map((location) => (

        <div
          key={location}
          onClick={() =>
            setSelectedLocation(location)
          }
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


          </aside>


        </header>

        {/* Title + Filter */}

        <section className="
          flex
          justify-between
          items-start
          px-5
          pt-4
          pb-6
        ">

  
        </section>






        {/* Gallery Grid */}

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
              No galleries found.
            </p>

          )}



        </main>


      </div>


    </div>

  );

}


export default Galleries;