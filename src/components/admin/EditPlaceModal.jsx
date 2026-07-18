import React, { useEffect, useState } from "react";

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

const locations = [
  "Brooklyn",
  "Bronx",
  "Manhattan",
  "Queens",
  "Staten Island",
];

const cuisines = [
  "West_African",
  "West_African_French",
  "Senegalese",
  "American",
  "Soul_Food",
  "Cajun",
  "Asian",
  "Italian",
  "Afro_Caribbean",
  "Latin",
  "Ethiopian",
  "Vegetarian",
  "Caribbean_Asian",
  "Pizza",
  "New_American",
  "Seafood",
  "German",
  "Vegetarian_Soul_Food",
  "French_Caribbean",
  "Soul_Food_Vegetarian",
];

function EditPlaceModal({
  isOpen,
  onClose,
  place,
  onSave,
}) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (place) {
      setFormData(place);
    }
  }, [place]);

  if (!isOpen || !place) return null;

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch(
      `http://localhost:8080/NoirX/places/${place.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      onSave(formData);
      onClose();
    } else {
      alert("Update failed.");
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

      <div className="bg-amber-50 w-[650px] max-h-[90vh] overflow-y-auto p-8 border-4 border-black">

        <h2 className="text-3xl font-bold mb-8">
          Edit Business
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            name="name"
            value={formData.name || ""}
            onChange={handleChange}
            placeholder="Business Name"
            className="w-full p-3 border-2 border-black"
          />

          <input
            name="address"
            value={formData.address || ""}
            onChange={handleChange}
            placeholder="Address"
            className="w-full p-3 border-2 border-black"
          />

          <input
            name="website"
            value={formData.website || ""}
            onChange={handleChange}
            placeholder="Website"
            className="w-full p-3 border-2 border-black"
          />

          <input
            name="instagram"
            value={formData.instagram || ""}
            onChange={handleChange}
            placeholder="Instagram"
            className="w-full p-3 border-2 border-black"
          />

          <input
            name="image_Url"
            value={formData.image_Url || ""}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full p-3 border-2 border-black"
          />

          <textarea
            name="description"
            value={formData.description || ""}
            onChange={handleChange}
            placeholder="Description"
            className="w-full h-32 p-3 border-2 border-black"
          />

          <select
            name="category"
            value={formData.category || ""}
            onChange={handleChange}
            className="w-full p-3 border-2 border-black"
          >
            {categories.map((category) => (
              <option
                key={category}
                value={category}
              >
                {category.replaceAll("_", " ")}
              </option>
            ))}
          </select>

          {formData.category === "Restaurant" && (

            <select
              name="cuisine"
              value={formData.cuisine || ""}
              onChange={handleChange}
              className="w-full p-3 border-2 border-black"
            >
              <option value="">Select Cuisine</option>

              {cuisines.map((cuisine) => (
                <option
                  key={cuisine}
                  value={cuisine}
                >
                  {cuisine.replaceAll("_", " ")}
                </option>
              ))}
            </select>

          )}

          <select
            name="location"
            value={formData.location || ""}
            onChange={handleChange}
            className="w-full p-3 border-2 border-black"
          >
            {locations.map((location) => (
              <option
                key={location}
                value={location}
              >
                {location}
              </option>
            ))}
          </select>

          <div className="flex justify-end gap-4 pt-4">

            <button
              type="button"
              onClick={onClose}
              className="border-2 border-black px-6 py-2"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-black text-white px-6 py-2"
            >
              Save Changes
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default EditPlaceModal;