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


  const [myData,setMyData] = useState([]);
  const [selectedLocation,setSelectedLocation] = useState(null);



  useEffect(()=>{

    async function fetchData(){

      try{

        const response = await fetch(
          "https://bobapp-e93h.onrender.com/NoirX/places"
        );

        const data = await response.json();


        setMyData(
          data.filter(
            item => item.category === "Legal"
          )
        );


      }catch(error){

        console.error(
          "Error fetching legal:",
          error
        );

      }

    }


    fetchData();

  },[]);




  const filteredData = selectedLocation
    ? myData.filter(
        item => item.location === selectedLocation
      )
    : myData;






  function buildMapsUrl(place,origin){

    const params = new URLSearchParams({

      destination:
        place.address || place.name || "",

      travelmode:"driving"

    });


    params.set(
      "origin",
      origin
      ? `${origin.lat},${origin.lng}`
      : "Current Location"
    );


    return (
      "https://www.google.com/maps/dir/?" +
      params.toString()
    );

  }





  function openDirections(place){

    if(navigator.geolocation){

      navigator.geolocation.getCurrentPosition(

        position=>{

          window.open(
            buildMapsUrl(place,{
              lat:position.coords.latitude,
              lng:position.coords.longitude
            }),
            "_blank"
          );

        },

        ()=>{

          window.open(
            buildMapsUrl(place),
            "_blank"
          );

        }

      );

    }else{

      window.open(
        buildMapsUrl(place),
        "_blank"
      );

    }

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


          <div className="
            text-xl
            font-bold
          ">
            NOIREX
          </div>



          <nav className="
            flex
            gap-4
            text-sm
            whitespace-nowrap
            overflow-x-auto
          ">


            <Link to="/Home">
              Home
            </Link>

            <Link to="/Eats">
              Eats
            </Link>

            <Link to="/Drinks">
              Drinks
            </Link>

            <Link to="/Arts">
              Art
            </Link>

            <Link to="/Therapy">
              Therapy
            </Link>

            <Link to="/Contact">
              Contact
            </Link>

            <Link to="/About">
              About
            </Link>


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


          {filteredData.map(item=>(


            <div

              key={item.id}

              className="cursor-pointer"

              onClick={()=>openDirections(item)}

            >



              <div className="
                flex
                justify-center
                items-center
                border-2
                border-black
                h-44
                p-3
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


                <p>
                  {item.name}
                </p>


                <p>
                  {item.address}
                </p>


                <p>
                  {item.location}
                </p>


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
        space-y-2
      ">


        <div className="
          text-xl
          font-semibold
        ">
          025
        </div>



        <div className="
          text-xl
          font-semibold
        ">
          NYC EDITION
        </div>




        <div className="space-y-1">


          <div

            className="
              cursor-pointer
              hover:underline
            "

            onClick={()=>setSelectedLocation(null)}

          >
            All
          </div>




          {locations.map(location=>(


            <div

              key={location}

              onClick={()=>setSelectedLocation(location)}

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






      {/* RESULT PANEL */}

      <aside className="
        fixed
        bottom-5
        right-5
        w-40
        max-h-52
        overflow-y-auto
        bg-black
        text-right
        p-3
        text-white
        text-sm
      ">


        {filteredData.length ? (

          filteredData.map(item=>(


            <div

              key={item.id}

              onClick={()=>openDirections(item)}

              className="
                border-b
                pb-2
                mb-2
                cursor-pointer
              "

            >

              <h2 className="
                font-semibold
              ">

                {item.name}

              </h2>


              <p className="
                text-yellow-500
              ">

                {item.location}

              </p>


            </div>


          ))


        ) : (

          <p>
            No legal services found.
          </p>

        )}


      </aside>


    </div>

  );

}


export default Law;