import React, { useState } from "react";
import { Link } from "react-router-dom";


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


function Submit() {

const [formData, setFormData] = useState({

name:"",
address:"",
imageUrl:"",
description:"",
website:"",
instagram:"",
submittedBy:"",
category:"",
location:"",
cuisine:""

});


function handleChange(e){

setFormData({
...formData,
[e.target.name]: e.target.value
});

}



async function handleSubmit(e){

e.preventDefault();


try {

const response = await fetch(
"http://localhost:8080/NoirX/places",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(formData)
}
);


if(response.ok){

alert("Submission received!");

setFormData({
name:"",
address:"",
imageUrl:"",
description:"",
website:"",
instagram:"",
submittedBy:"",
category:"",
location:"",
cuisine:""
});

}


}
catch(error){

console.error("Submission error:",error);

}


}



return(

<>


<div className="min-h-screen bg-yellow-600 flex items-center justify-center p-4">


<div className="relative min-h-screen w-[90vw] max-w-5xl bg-amber-50 shadow-xl overflow-hidden">


{/* Header */}

<div className="relative z-20 p-6 flex justify-between items-start">

<div className="text-lg font-bold">
NOIREX
</div>


<div className="flex gap-6 text-sm">

<Link to="/Home">Home</Link>
<Link to="/Eats">Eats</Link>
<Link to="/Drinks">Drinks</Link>
<Link to="/Arts">Art</Link>
<Link to="/Law">Law</Link>
<Link to="/Therapy">Therapy</Link>

</div>


</div>




<div className="flex justify-center mt-10">


<form
onSubmit={handleSubmit}
className="w-[400px] space-y-5"
>


<h1 className="text-5xl font-bold text-center mb-8">
SUBMIT
</h1>



<input
name="name"
value={formData.name}
onChange={handleChange}
placeholder="Business Name"
className="w-full p-3 border-4 border-black bg-amber-50"
/>



<input
name="address"
value={formData.address}
onChange={handleChange}
placeholder="Address"
className="w-full p-3 border-4 border-black bg-amber-50"
/>




<input
name="imageUrl"
value={formData.imageUrl}
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
className="w-full p-3 border-4 border-black bg-amber-50"
>

<option value="">
Select Category
</option>


{categories.map(category=>(

<option key={category}>
{category}
</option>

))}


</select>






<select
name="location"
value={formData.location}
onChange={handleChange}
className="w-full p-3 border-4 border-black bg-amber-50"
>


<option value="">
Select Location
</option>


{locations.map(location=>(

<option key={location}>
{location}
</option>

))}


</select>





<button

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