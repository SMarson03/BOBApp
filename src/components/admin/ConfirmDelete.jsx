import React from "react";

function ConfirmDelete({
  isOpen,
  onClose,
  onConfirm,
  place
}) {

  if (!isOpen || !place) return null;


  return (

    <div className="
      fixed
      inset-0
      bg-black/60
      flex
      items-center
      justify-center
      z-50
    ">


      <div className="
        bg-amber-50
        border-4
        border-black
        p-8
        w-[400px]
        text-center
      ">


        <h2 className="
          text-3xl
          font-bold
          mb-6
        ">
          Delete Business?
        </h2>



        <p className="
          mb-8
          text-lg
        ">
          Are you sure you want to delete:
        </p>


        <p className="
          font-bold
          mb-8
        ">
          {place.name}
        </p>



        <div className="
          flex
          justify-center
          gap-4
        ">


          <button

            onClick={onClose}

            className="
              border-2
              border-black
              px-6
              py-2
              hover:bg-gray-200
            "

          >
            CANCEL

          </button>




          <button

            onClick={onConfirm}

            className="
              bg-black
              text-white
              border-2
              border-black
              px-6
              py-2
              hover:bg-red-700
            "

          >
            DELETE

          </button>


        </div>


      </div>


    </div>

  );

}


export default ConfirmDelete;