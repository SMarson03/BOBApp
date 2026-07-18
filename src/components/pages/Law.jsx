import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const locations = [
  "Brooklyn",
  "Bronx",
  "Manhattan",
  "Queens",
  "Staten_Island",
];

function Law() {

  const [mydata, setMyData] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);


  useEffect(() => {

    async function fetchData() {

      try {

        const response = await fetch(
          "http://localhost:8080/NoirX/places"
        );

        const data = await response.json();


        const lawyers = data.filter(
          (item) => item.category === "Legal"
        );


        setMyData(lawyers);


      } catch (error) {

        console.error("Error fetching legal:", error);

      }

    }


    fetchData();

  }, []);



  const filteredData = selectedLocation
    ? mydata.filter(
        (item) => item.location === selectedLocation
      )
    : mydata;



  function buildMapsUrl(dest, origin) {

    const base =
      "https://www.google.com/maps/dir/?api=1";


    const destination =
      dest.address || dest.name || "";


    const params = new URLSearchParams({
      destination,
      travelmode: "driving",
    });


    if (origin?.lat && origin?.lng) {

      params.set(
        "origin",
        `${origin.lat},${origin.lng}`
      );

    } else {

      params.set(
        "origin",
        "Current Location"
      );

    }


    return `${base}&${params.toString()}`;

  }



  function openDirections(dest) {

    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(

        (pos) => {

          window.open(
            buildMapsUrl(dest, {
              lat: pos.coords.latitude,
              lng: pos.coords.longitude,
            }),
            "_blank"
          );

        },

        () => {

          window.open(
            buildMapsUrl(dest),
            "_blank"
          );

        }

      );

    } else {

      window.open(
        buildMapsUrl(dest),
        "_blank"
      );

    }

  }



  return (

    <>

      <div className="min-h-screen bg-yellow-600 flex items-center justify-center p-4">

        <div className="relative min-h-screen w-[90vw] max-w-5xl bg-amber-50 shadow-red-50 overflow-hidden">


          <div className="absolute inset-0 overflow-y-auto max-h-[80vh]">


            <div className="relative z-20 p-6 flex justify-between items-start">


              <div className="text-lg font-bold">
                NOIREX
              </div>


              <div className="flex gap-6 text-sm">

                <Link to="/Home">Home</Link>
                <Link to="/Eats">Eats</Link>
                <Link to="/Drinks">Drinks</Link>
                <Link to="/Arts">Arts</Link>
                <Link to="/Law">Law</Link>
                <Link to="/Therapy">Therapy</Link>

              </div>


            </div>



            <div className="grid grid-cols-3 gap-5 p-5">


              {filteredData.map((item) => (

                <div
                  key={item.id}
                  onClick={() => openDirections(item)}
                >


                  <div className="flex flex-col items-center m-5 p-2.5 border-2 border-black h-[160px]">

                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />

                  </div>



                  <div className="px-8 text-md font-bold">

                    <p>{item.name}</p>

                    <p>{item.address}</p>

                    <p>{item.location}</p>

                  </div>



                  <button
                    className="m-8 w-16 h-8 bg-amber-50 border-2 border-black flex justify-center items-center text-sm"
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


            </div>


          </div>


        </div>


      </div>




      {/* Location Filter */}

      <div className="absolute top-24 right-4 text-sm text-right space-y-2 z-20">


        <div className="text-2xl font-semibold">
          025
        </div>


        <div className="text-2xl font-semibold">
          NYC EDITION
        </div>



        <div className="space-y-1">


          <div
            className="cursor-pointer hover:underline"
            onClick={() => setSelectedLocation(null)}
          >
            All
          </div>



          {locations.map((loc)=>(

            <div
              key={loc}
              onClick={() => setSelectedLocation(loc)}
              className={`cursor-pointer hover:underline ${
                selectedLocation === loc
                ? "font-bold text-white"
                : ""
              }`}
            >

              {loc.replace("_"," ")}

            </div>

          ))}


        </div>


      </div>




      {/* Results */}

      <div className="overflow-y-auto p-4 rounded-lg custom-scrollbar absolute bottom-64 right-4 text-sm text-right bg-black bg-opacity-90 space-y-2 z-30 w-36 max-h-[22vh]">


        {filteredData.length > 0 ? (

          filteredData.map((item)=>(

            <div
              key={item.id}
              className="mb-4 border-b pb-2 cursor-pointer"
              onClick={() => openDirections(item)}
            >

              <h2 className="text-lg font-semibold text-white">
                {item.name}
              </h2>


              <p className="text-sm text-yellow-500">
                {item.location}
              </p>


            </div>

          ))

        ) : (

          <p className="text-white">
            No legal services found.
          </p>

        )}


      </div>


    </>

  );

}


export default Law;