import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import BusinessCard from "../admin/BusinessCard";
import Filters from "../admin/Filters";
import EditPlaceModal from "../admin/EditPlaceModal";
import ConfirmDelete from "../admin/ConfirmDelete";
import Logout from "../auth/Logout";
import DashboardStats from "../admin/DashboardStats";


const locations = [
  "Brooklyn",
  "Bronx",
  "Manhattan",
  "Queens",
  "Staten Island",
];


const categories = [
  "Restaurant",
  "Bar",
  "Cafe",
  "Juice_Bar",
  "Art_Gallery",
  "Finance",
  "Legal",
  "Therapy",
];



function Admin() {


  const user = JSON.parse(
    localStorage.getItem("user")
  );


  const [places,setPlaces] = useState([]);
  const [searchTerm,setSearchTerm] = useState("");
  const [selectedCategory,setSelectedCategory] = useState("");
  const [selectedLocation,setSelectedLocation] = useState("");
  const [editingPlace,setEditingPlace] = useState(null);
  const [deletePlace,setDeletePlace] = useState(null);



  useEffect(()=>{

    loadPlaces();

  },[]);



  async function loadPlaces(){

    try{

      const res = await fetch(
        "https://bobapp-e93h.onrender.com/NoirX/places"
      );

      const data = await res.json();

      setPlaces(data);

    }catch(error){

      console.error(
        "Error loading places:",
        error
      );

    }

  }




  const filteredPlaces = places.filter(place=>{


    const search =
      searchTerm.toLowerCase();


    const matchesSearch =
      place.name?.toLowerCase().includes(search) ||
      place.address?.toLowerCase().includes(search) ||
      place.description?.toLowerCase().includes(search) ||
      place.submittedBy?.toLowerCase().includes(search);



    const matchesCategory =
      selectedCategory
      ? place.category === selectedCategory
      : true;



    const matchesLocation =
      selectedLocation
      ? place.location === selectedLocation
      : true;



    return (
      matchesSearch &&
      matchesCategory &&
      matchesLocation
    );


  });






  async function handleDelete(id){


    try{

      const res = await fetch(

        `https://bobapp-e93h.onrender.com/NoirX/places/${id}`,

        {
          method:"DELETE"
        }

      );


      if(res.ok){

        setDeletePlace(null);

        loadPlaces();

      }


    }catch(error){

      console.error(
        "Delete error:",
        error
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



          <div>


            <h1 className="
              text-5xl
              sm:text-6xl
              lg:text-8xl
              font-bold
              leading-none
            ">

              ADMIN

            </h1>



            <p className="text-sm mt-3">

              Welcome,{" "}

              <strong>
                {user?.name}
              </strong>

            </p>


            <p className="text-sm">

              {places.length} Businesses

            </p>


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


            <Link to="/Submit">
              Submit
            </Link>


            <Logout />


          </nav>



        </header>







        {/* DASHBOARD */}


        <section className="
          px-5
          pb-6
        ">


          <DashboardStats

            places={places}

            categories={categories}

            locations={locations}

          />


        </section>







        {/* ADMIN CONTENT */}


        <section className="
          flex
          gap-6
          px-5
          pb-10
        ">



          {/* BUSINESS AREA */}


          <main className="flex-1">


            <input

              value={searchTerm}

              onChange={(e)=>
                setSearchTerm(e.target.value)
              }

              placeholder="Search businesses..."

              className="
                w-full
                mb-5
                p-3
                border-2
                border-black
                bg-amber-50
              "

            />





            <div className="
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-6
              max-h-[60vh]
              overflow-y-auto
            ">


              {filteredPlaces.length ? (

                filteredPlaces.map(place=>(

                  <BusinessCard

                    key={place.id}

                    place={place}

                    onEdit={()=>
                      setEditingPlace(place)
                    }

                    onDelete={()=>
                      setDeletePlace(place)
                    }

                    refresh={loadPlaces}

                  />

                ))

              ) : (

                <p>
                  No businesses found.
                </p>

              )}


            </div>


          </main>







          {/* FILTERS */}


          <aside className="
            w-52
            border-l-2
            border-black
            pl-5
          ">


            <h2 className="
              text-xl
              font-bold
              mb-4
            ">

              FILTERS

            </h2>



            <Filters

              locations={locations}

              categories={categories}

              selectedLocation={selectedLocation}

              setSelectedLocation={setSelectedLocation}

              selectedCategory={selectedCategory}

              setSelectedCategory={setSelectedCategory}

            />


          </aside>



        </section>



      </div>







      {editingPlace && (

        <EditPlaceModal

          isOpen={true}

          place={editingPlace}

          onClose={()=>
            setEditingPlace(null)
          }

          onSave={()=>{

            setEditingPlace(null);

            loadPlaces();

          }}

        />

      )}






      {deletePlace && (

        <ConfirmDelete

          place={deletePlace}

          onCancel={()=>
            setDeletePlace(null)
          }

          onConfirm={()=>
            handleDelete(deletePlace.id)
          }

        />

      )}



    </div>

  );

}


export default Admin;