import React, { useState } from "react";
import { Link } from "react-router-dom";


function LogIn(){

const [formData,setFormData] = useState({
    email:"",
    password:""
});


function handleChange(e){

setFormData({
    ...formData,
    [e.target.name]:e.target.value
});

}



function handleSubmit(e){

e.preventDefault();

console.log("Login attempt:", formData);

// Future:
// POST /NoirX/login

}



return(
<>


<div className="
min-h-screen 
bg-yellow-600 
flex 
items-center 
justify-center 
p-4
">


<div className="
relative
min-h-[75vh]
w-[90vw]
max-w-5xl
bg-amber-50
shadow-xl
overflow-hidden
">


{/* HEADER */}

<div className="
relative 
z-20 
p-6 
flex 
justify-between 
items-start
">


<div className="text-lg font-bold">
NOIREX
</div>


<div className="flex gap-6 text-sm">

<Link to="/Home">
Home
</Link>

<Link to="/SignUp">
Sign Up
</Link>

</div>


</div>





{/* LOGIN CARD */}

<div className="
flex
justify-center
mt-10
">


<div className="
w-[400px]
border-4
border-black
p-8
bg-amber-50
">


<h1 className="
text-4xl
font-bold
text-center
mb-8
">

LOGIN

</h1>




<form
onSubmit={handleSubmit}
className="space-y-5"
>


<div>

<label className="
block
text-sm
font-bold
mb-2
">

Email

</label>


<input

type="email"

name="email"

value={formData.email}

onChange={handleChange}

placeholder="you@example.com"

className="
w-full
p-3
border-2
border-black
bg-white
"

/>

</div>





<div>

<label className="
block
text-sm
font-bold
mb-2
">

Password

</label>


<input

type="password"

name="password"

value={formData.password}

onChange={handleChange}

placeholder="••••••••"

className="
w-full
p-3
border-2
border-black
bg-white
"

/>

</div>





<button

type="submit"

className="
w-full
h-10
border-2
border-black
bg-black
text-white
font-bold
hover:bg-yellow-600
hover:text-black
transition
"

>

SIGN IN

</button>



</form>




<div className="
text-center
mt-6
text-sm
">


<Link 
to="/ForgotPassword"
className="
text-yellow-700
hover:underline
"
>

Forgot Password?

</Link>



<p className="mt-4">

Don't have an account?

{" "}

<Link

to="/SignUp"

className="
font-bold
text-yellow-700
hover:underline
"

>

Create Account

</Link>


</p>


</div>


</div>


</div>





{/* RIGHT INFO PANEL */}

<div className="
absolute 
top-24 
right-4 
text-sm 
text-right 
space-y-2 
z-20
">


<div className="
text-2xl 
font-semibold
">

025

</div>


<div className="
text-2xl 
font-semibold
">

NYC EDITION

</div>


<div>

<div>Brooklyn</div>
<div>Bronx</div>
<div>Manhattan</div>
<div>Queens</div>
<div>Staten Island</div>

</div>


</div>



</div>

</div>


</>

);

}


export default LogIn;