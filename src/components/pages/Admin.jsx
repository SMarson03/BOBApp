import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import BusinessCard from "../admin/BusinessCard";
import Filters from "../admin/Filters";
import SearchBar from "../admin/SearchBar";
import EditPlaceModal from "../admin/EditPlaceModal";
import ConfirmDelete from "../admin/ConfirmDelete";

const locations = [
  "Brooklyn",
  "Bronx",
  "Manhattan",
  "Queens",
  "Staten Island"
];


const categories = [
  "Restaurant",
  "Bar",
  "Cafe",
  "Juice_Bar",
  "Art_Gallery",
  "Finance",
  "Legal",
  "Therapy"
];

function Admin() {

  const [places, setPlaces] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("");

  const [selectedLocation, setSelectedLocation] = useState("");

  const [editingPlace, setEditingPlace] = useState(null);

  const [deletePlace, setDeletePlace] = useState(null);



  useEffect(() => {

    loadPlaces();

  }, []);




  async function loadPlaces(){

    try{

      const response = await fetch(
        "http://localhost:8080/NoirX/places"
      );

      const data = await response.json();

      setPlaces(data);

    }

    catch(error){

      console.error(error);

    }

  }





  const filteredPlaces = places.filter(place=>{

    const matchesSearch =

      place.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||

      place.address?.toLowerCase().includes(searchTerm.toLowerCase()) ||

      place.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||

      place.submittedBy?.toLowerCase().includes(searchTerm.toLowerCase());



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

      const response = await fetch(

        `http://localhost:8080/NoirX/places/${id}`,

        {

          method:"DELETE"

        }

      );



      if(response.ok){

        setDeletePlace(null);

        loadPlaces();

      }

    }

    catch(error){

      console.error(error);

    }

  }




  return(

<>

<div className="min-h-screen bg-yellow-600 flex justify-center items-center p-4">

<div className="relative min-h-screen w-[90vw] max-w-6xl bg-amber-50 shadow-xl overflow-hidden">




{/* HEADER */}

<div className="flex justify-between p-6">

<div>

<h1 className="text-2xl font-bold">

NOIREX ADMIN

</h1>

<p className="text-sm">

{places.length} Businesses

</p>

</div>



<div className="flex gap-6 text-sm">

<Link to="/Home">Home</Link>

<Link to="/Submit">Submit</Link>

</div>

</div>


{/* SEARCH */}
<div className="px-6 pt-2">

<SearchBar
  searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
/>

</div>



{/* CONTENT AREA */}

<div className="
flex
gap-6
px-6
pt-4
">


{/* BUSINESS GRID */}

<div
className="
flex-1
grid
grid-cols-2
gap-4
overflow-y-auto
max-h-[70vh]
pr-2
"
>

{filteredPlaces.map(place => (

<BusinessCard

key={place.id}

place={place}

onEdit={() => setEditingPlace(place)}

onDelete={() => setDeletePlace(place)}

refresh={loadPlaces}

/>

))}

</div>





{/* FILTER PANEL */}

<div
className="
w-48
border-l
border-black
pl-4
text-sm
"
>


<h2 className="text-xl font-bold mb-4">
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


</div>


</div>
<div className="grid grid-cols-3 gap-6 p-6 overflow-y-auto max-h-[72vh]">

{filteredPlaces.map(place=>(

<BusinessCard

key={place.id}

place={place}

onEdit={()=>setEditingPlace(place)}

onDelete={()=>setDeletePlace(place)}

refresh={loadPlaces}

/>

))}

</div>



</div>

</div>



{editingPlace && (

<EditPlaceModal
  isOpen={true}
  place={editingPlace}
  onClose={()=>setEditingPlace(null)}
  onSave={()=>{
    setEditingPlace(null);
    loadPlaces();
  }}
/>

)}




{deletePlace && (

<ConfirmDelete

place={deletePlace}

onCancel={()=>setDeletePlace(null)}

onConfirm={()=>handleDelete(deletePlace.id)}

/>

)}

</>

);

}

export default Admin;