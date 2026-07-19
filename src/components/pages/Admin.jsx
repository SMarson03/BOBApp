import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import BusinessCard from "../admin/BusinessCard";
import Filters from "../admin/Filters";
import SearchBar from "../admin/SearchBar";
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

  const user = JSON.parse(localStorage.getItem("user"));

  const [places, setPlaces] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [editingPlace, setEditingPlace] = useState(null);
  const [deletePlace, setDeletePlace] = useState(null);

  useEffect(() => {
    loadPlaces();
  }, []);

  async function loadPlaces() {
    try {
      const response = await fetch(
        "https://bobapp-e93h.onrender.com/NoirX/places"
      );

      const data = await response.json();

      setPlaces(data);

    } catch (error) {
      console.error(error);
    }
  }

  const filteredPlaces = places.filter((place) => {

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

  async function handleDelete(id) {

    try {

      const response = await fetch(
        `https://bobapp-e93h.onrender.com/NoirX/places/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setDeletePlace(null);
        loadPlaces();
      }

    } catch (error) {
      console.error(error);
    }

  }

  return (
    <>

      <div className="min-h-screen bg-yellow-600 flex justify-center items-center p-4">

        <div className="relative w-[90vw] max-w-7xl bg-amber-50 shadow-xl overflow-hidden rounded-lg">

          {/* HEADER */}

          <div className="flex justify-between items-center p-6 border-b border-black">

            <div>

              <h1 className="text-3xl font-bold">
                NOIREX ADMIN
              </h1>

              <p className="text-sm">
                Welcome, <strong>{user?.name}</strong>
              </p>

              <p className="text-sm">
                {places.length} Businesses
              </p>

            </div>

            <div className="flex items-center gap-6 text-sm">

              <Link to="/Home">
                Home
              </Link>

              <Link to="/Submit">
                Submit
              </Link>

              <Logout />

            </div>

          </div>

          {/* SEARCH */}

          <div className="flex gap-6 px-6 pt-4">

  {/* LEFT COLUMN */}
  <div className="flex-1 flex flex-col">

    <DashboardStats
      places={places}
      categories={categories}
      locations={locations}
    />

    <div
      className="
      mt-4
      grid
      grid-cols-2
      gap-4
      overflow-y-auto
      max-h-[60vh]
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

  </div>

  {/* RIGHT COLUMN */}
  <div className="w-52 border-l border-black pl-4">

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

          </div>

        </div>

  

      {editingPlace && (

        <EditPlaceModal
          isOpen={true}
          place={editingPlace}
          onClose={() => setEditingPlace(null)}
          onSave={() => {
            setEditingPlace(null);
            loadPlaces();
          }}
        />

      )}

      {deletePlace && (

        <ConfirmDelete
          place={deletePlace}
          onCancel={() => setDeletePlace(null)}
          onConfirm={() => handleDelete(deletePlace.id)}
        />

      )}

    </>
  );

}

export default Admin;