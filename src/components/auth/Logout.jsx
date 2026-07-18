import { useNavigate } from "react-router-dom";


function Logout(){

    const navigate = useNavigate();


    function handleLogout(){

        localStorage.removeItem("user");

        navigate("/Login");

    }


    return(

        <button
        onClick={handleLogout}
        className="
        border-2
        border-black
        px-4
        py-2
        hover:bg-black
        hover:text-white
        "
        >

        LOGOUT

        </button>

    );

}


export default Logout;