import React from "react";

function BusinessCard({ place, onEdit, onDelete }) {

  function buildMapsUrl(dest, origin) {
    const base = "https://www.google.com/maps/dir/?api=1";

    const destination =
      dest.lat && dest.lng
        ? `${dest.lat},${dest.lng}`
        : dest.address || dest.name || "";

    const params = new URLSearchParams({
      destination,
      travelmode: "driving",
    });

    if (origin?.lat && origin?.lng) {
      params.set("origin", `${origin.lat},${origin.lng}`);
    } else {
      params.set("origin", "Current Location");
    }

    return `${base}&${params.toString()}`;
  }

  function openDirections() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          window.open(
            buildMapsUrl(place, {
              lat: pos.coords.latitude,
              lng: pos.coords.longitude,
            }),
            "_blank"
          );
        },
        () => {
          window.open(buildMapsUrl(place), "_blank");
        }
      );
    } else {
      window.open(buildMapsUrl(place), "_blank");
    }
  }

  return (
    <div className="border-2 border-black bg-amber-50 p-4 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">

      {/* Image */}

      <div className="h-44 border-2 border-black overflow-hidden mb-4 bg-white">

        <img
          src={place.imageUrl}
          alt={place.name}
          className="w-full h-full object-contain"
        />

      </div>

      {/* Business Info */}

      <h2 className="text-xl font-bold">
        {place.name}
      </h2>

      <p className="text-sm">
        {place.category}
      </p>

      {place.cuisine && (
        <p className="text-sm text-gray-700">
          {place.cuisine.replaceAll("_", " ")}
        </p>
      )}

      <p className="text-sm">
        {place.location}
      </p>

      <p className="text-xs mt-2 text-gray-600">
        {place.address}
      </p>

      {place.submittedBy && (
        <p className="text-xs mt-1 italic">
          Submitted by: {place.submittedBy}
        </p>
      )}

      {/* Action Buttons */}

      <div className="grid grid-cols-2 gap-2 mt-5">

        <button
          onClick={openDirections}
          className="border-2 border-black py-2 hover:bg-black hover:text-white transition"
        >
          MAP
        </button>

        <a
          href={place.website}
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-black py-2 text-center hover:bg-black hover:text-white transition"
        >
          VISIT
        </a>

        <button
          onClick={onEdit}
          className="border-2 border-yellow-700 bg-yellow-300 py-2 font-semibold hover:bg-yellow-500 transition"
        >
          EDIT
        </button>

        <button
          onClick={onDelete}
          className="border-2 border-red-700 bg-red-600 text-white py-2 font-semibold hover:bg-red-700 transition"
        >
          DELETE
        </button>

      </div>

    </div>
  );
}

export default BusinessCard;