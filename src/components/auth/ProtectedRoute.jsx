import { Navigate } from "react-router-dom";


function ProtectedRoute({ children, adminOnly=false }) {


const user = JSON.parse(
    localStorage.getItem("user")
);



if(!user){

    return <Navigate to="/LogIn" />;

}



if(adminOnly && user.role !== "ADMIN"){

    return <Navigate to="/Home" />;

}



return children;


}


export default ProtectedRoute;