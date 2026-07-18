import { Navigate } from "react-router-dom";


function AuthGuard({ children, adminOnly = false }) {


    const storedUser = localStorage.getItem("user");


    if(!storedUser){

        return <Navigate to="/Login" />;

    }


    const user = JSON.parse(storedUser);



    if(adminOnly && user.role !== "ADMIN"){

        return <Navigate to="/Home" />;

    }



    return children;

}


export default AuthGuard;