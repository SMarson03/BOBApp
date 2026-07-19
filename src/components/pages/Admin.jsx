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


function Admin(){

const user = JSON.parse(localStorage.getItem("user"));

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


}catch(err){

console.error(err);

}

}





const filteredPlaces = places.filter(place=>{

const search = searchTerm.toLowerCase();


return (

(
!search ||
place.name?.toLowerCase().includes(search) ||
place.address?.toLowerCase().includes(search)
)

&&

(
!selectedCategory ||
place.category === selectedCategory
)

&&

(
!selectedLocation ||
place.location === selectedLocation
)

);


});






async function handleDelete(id){

await fetch(
`https://bobapp-e93h.onrender.com/NoirX/places/${id}`,
{
method:"DELETE"
}
);


setDeletePlace(null);

loadPlaces();

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
">





{/* HEADER */}

<header className="
flex
flex-col
sm:flex-row
justify-between
gap-5
p-5
">


<div>

<h1 className="
text-5xl
sm:text-7xl
font-bold
">

ADMIN

</h1>


<p className="text-sm mt-3">
Welcome,
{" "}
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
flex-wrap
gap-4
text-sm
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








{/* STATS */}

<section className="
px-5
pb-5
">


<div className="
w-full
overflow-hidden
">


<DashboardStats

places={places}

categories={categories}

locations={locations}

/>


</div>


</section>








{/* MOBILE FILTERS */}

<section className="
block
lg:hidden
px-5
pb-5
">


<div className="
border-2
border-black
p-4
">


<h2 className="
font-bold
mb-3
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


</div>


</section>








{/* SEARCH */}

<section className="
px-5
">


<input

value={searchTerm}

onChange={(e)=>
setSearchTerm(e.target.value)
}

placeholder="Search businesses..."

className="
w-full
border-2
border-black
bg-amber-50
p-3
"


/>


</section>







{/* CONTENT */}

<section className="
grid
grid-cols-1
lg:grid-cols-[1fr_220px]
gap-6
p-5
">





{/* CARDS */}

<div className="
grid
grid-cols-1
sm:grid-cols-2
xl:grid-cols-3
gap-6
">


{
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
}


</div>







{/* DESKTOP FILTER */}

<aside className="
hidden
lg:block
border-l-2
border-black
pl-5
">


<h2 className="
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