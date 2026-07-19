import React, { useState } from "react";
import { Link } from "react-router-dom";


const locations = [
  "Brooklyn",
  "Bronx",
  "Manhattan",
  "Queens",
  "Staten_Island"
];


const categories = [
  "Art_Gallery",
  "Bar",
  "Cafe",
  "Finance",
  "Juice_Bar",
  "Legal",
  "Restaurant",
  "Therapy",
  "Wine_Bar",
  "Wellness"
];


// Restaurant cuisine options
const cuisines = [
   "American",
   "Afro_Caribbean",
   "Asian",
   "Bakery",
   "Cajun",
   "Caribbean_Asian",
   "French_Caribbean",
   "German",
   "Ethiopian",
   "Italian",
   "Latin",
   "New_American",
   "Pizza",
   "Seafood",
   "Senegalese",
   "Soul_Food",
   "Vegetarian",
   "Vegetarian_Soul_Food",
   "West_African",
   "West_African_French"
  ];


function Submit() {


const emptyForm = {

name:"",
address:"",
image_Url:"",
description:"",
website:"",
instagram:"",
submittedBy:"",
category:"",
location:"",
cuisine:""

};


const [formData, setFormData] = useState(emptyForm);



function handleChange(e){

setFormData({

...formData,

[e.target.name]: e.target.value

});

}




async function handleSubmit(e){

e.preventDefault();


try {


const submissionData = {
  ...formData,
  cuisine:
    formData.category === "Restaurant"
      ? formData.cuisine
      : null
};


const response = await fetch(
"http://localhost:8080/NoirX/places",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(submissionData)
}
);


const result = await response.text();

console.log("Backend response:", result);


if(response.ok){

alert("Submission received!");

setFormData(emptyForm);

}
else{

alert("Submission failed: " + result);

}


}

catch(error){


console.error(
"Submission error:",
error
);


alert("Unable to submit.");

}


}





return (

<>


<div className="min-h-screen bg-yellow-600 flex items-center justify-center p-4">


<div className="relative min-h-screen w-[90vw] max-w-5xl bg-amber-50 shadow-xl overflow-hidden">



{/* HEADER */}

<div className="relative z-20 p-6 flex justify-between items-start">


<div className="flex flex-col">

  <div className="text-lg font-bold">
    NOIREX
  </div>

  <div className="text-sm">
    Welcome, <strong>{JSON.parse(localStorage.getItem("user"))?.name || "Guest"}</strong>
  </div>

  {localStorage.getItem("user") && (
    <button
      onClick={() => {
        localStorage.removeItem("user");
        window.location.href = "/Home";
      }}
      className="
      text-left
      text-sm
      text-red-700
      hover:underline
      "
    >
      Logout
    </button>
  )}

</div>



<div className="flex gap-6 text-sm">

<Link to="/Home">Home</Link>

<Link to="/Eats">Eats</Link>

<Link to="/Drinks">Drinks</Link>

<Link to="/Arts">Art</Link>

<Link to="/Law">Law</Link>

<Link to="/Therapy">Therapy</Link>

<Link to="/About">About</Link>

</div>


</div>





<div className="flex justify-center mt-8">


<form

onSubmit={handleSubmit}

className="w-[400px] space-y-5 pb-10"

>



<h1 className="text-5xl font-bold text-center mb-8">

SUBMIT

</h1>






<input

name="name"

value={formData.name}

onChange={handleChange}

placeholder="Business Name"

required

className="w-full p-3 border-4 border-black bg-amber-50"

/>





<input

name="address"

value={formData.address}

onChange={handleChange}

placeholder="Address"

required

className="w-full p-3 border-4 border-black bg-amber-50"

/>






<input

name="image_Url"

value={formData.image_Url}

onChange={handleChange}

placeholder="Image URL"

className="w-full p-3 border-4 border-black bg-amber-50"

/>







<textarea

name="description"

value={formData.description}

onChange={handleChange}

placeholder="Description"

className="w-full h-32 p-3 border-4 border-black bg-amber-50"

/>








<input

name="website"

value={formData.website}

onChange={handleChange}

placeholder="Website"

className="w-full p-3 border-4 border-black bg-amber-50"

/>








<input

name="instagram"

value={formData.instagram}

onChange={handleChange}

placeholder="Instagram"

className="w-full p-3 border-4 border-black bg-amber-50"

/>








<input

name="submittedBy"

value={formData.submittedBy}

onChange={handleChange}

placeholder="Your Name"

className="w-full p-3 border-4 border-black bg-amber-50"

/>







<select

name="category"

value={formData.category}

onChange={handleChange}

required

className="w-full p-3 border-4 border-black bg-amber-50"

>


<option value="">

Select Category

</option>



{categories.map((category)=>(


<option

key={category}

value={category}

>

{category.replace("_"," ")}

</option>


))}


</select>








{/* ONLY SHOW CUISINE FOR RESTAURANTS */}


{formData.category === "Restaurant" && (


<select

name="cuisine"

value={formData.cuisine}

onChange={handleChange}

required

className="w-full p-3 border-4 border-black bg-amber-50"

>


<option value="">

Select Cuisine

</option>



{cuisines.map((cuisine)=>(


<option

key={cuisine}

value={cuisine}

>

{cuisine.replace("_"," ")}

</option>


))}


</select>


)}







<select

name="location"

value={formData.location}

onChange={handleChange}

required

className="w-full p-3 border-4 border-black bg-amber-50"

>


<option value="">

Select Location

</option>



{locations.map((location)=>(


<option

key={location}

value={location}

>

{location.replace("_"," ")}

</option>


))}



</select>









<button

type="submit"

className="
w-32
h-10
border-4
border-black
bg-amber-50
font-bold
hover:bg-black
hover:text-white
"

>

SUBMIT

</button>





</form>


</div>



</div>


</div>


</>

)

}


export default Submit;