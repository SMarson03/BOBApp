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


  const [formData,setFormData] = useState(emptyForm);
  


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
        "https://bobapp-e93h.onrender.com/NoirX/places",
        {
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(submissionData)
        }
      );


      const result = await response.text();


      if(response.ok){

        alert("Submission received!");
        setFormData(emptyForm);

      } else {

        alert("Submission failed: " + result);

      }


    } catch(error){

      console.error(
        "Submission error:",
        error
      );

      alert("Unable to submit.");

    }

  }




  const user = JSON.parse(
    localStorage.getItem("user")
  );



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



        {/* HEADER */}

        <header className="
          flex
          justify-between
          items-start
          gap-4
          p-4
          sm:p-5
        ">


          <div className="flex flex-col">


            <div className="
              text-xl
              font-bold
            ">
              NOIREX
            </div>


            <div className="text-sm">

              Welcome,{" "}
              <strong>
                {user?.name || "Guest"}
              </strong>

            </div>



            {user && (

              <button
                onClick={() => {
                  localStorage.removeItem("user");
                  window.location.href="/Home";
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

            <Link to="/Law">
              Law
            </Link>

            <Link to="/Therapy">
              Therapy
            </Link>

            <Link to="/About">
              About
            </Link>

          </nav>


        </header>





        {/* FORM */}

        <main className="
          flex
          justify-center
          pt-4
          pb-8
          sm:pt-8
        ">


          <form

            onSubmit={handleSubmit}

            className="
              w-full
              max-w-md
              px-5
              sm:px-0
              space-y-4
            "

          >



            <h1 className="
              text-4xl
              sm:text-6xl
              font-bold
              text-center
              mb-6
            ">

              SUBMIT

            </h1>





            {[
              ["name","Business Name"],
              ["address","Address"],
              ["image_Url","Image URL"],
              ["website","Website"],
              ["instagram","Instagram"],
              ["submittedBy","Your Name"]
            ].map(([name,placeholder]) => (

              <input

                key={name}

                name={name}

                value={formData[name]}

                onChange={handleChange}

                placeholder={placeholder}

                className="
                  w-full
                  p-3
                  border-2
                  border-black
                  bg-white
                "

              />

            ))}




            <textarea

              name="description"

              value={formData.description}

              onChange={handleChange}

              placeholder="Description"

              className="
                w-full
                h-32
                p-3
                border-2
                border-black
                bg-white
              "

            />





            <select

              name="category"

              value={formData.category}

              onChange={handleChange}

              required

              className="
                w-full
                p-3
                border-2
                border-black
                bg-white
              "

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





            {formData.category === "Restaurant" && (

              <select

                name="cuisine"

                value={formData.cuisine}

                onChange={handleChange}

                required

                className="
                  w-full
                  p-3
                  border-2
                  border-black
                  bg-white
                "

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

              className="
                w-full
                p-3
                border-2
                border-black
                bg-white
              "

            >

              <option value="">
                Select Location
              </option>


              {locations.map((location)=>(

                <option
                  key={location}
                  value={location}
                >
                  {location}
                </option>

              ))}


            </select>






            <button

              type="submit"

              className="
                w-32
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

              SUBMIT

            </button>


          </form>


        </main>


      </div>


    </div>

  );

}


export default Submit;