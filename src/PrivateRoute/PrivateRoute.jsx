/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom"
import UseAuth from "../Hooks/UseAuth";
 
const PrivateRoute = ({children}) => {
    // const {user, loading} = UseAuth();
    const {user, loading} = UseAuth();
        const location = useLocation();


        if (loading) 
        {
            return <h2 className="text-4xl text-center mt-10">Loading .......</h2>
             
        }
    
       if (user) 
        {
            return children
            
        }
    return <Navigate state={location.pathname} to='/login'/>
  
  
}

export default PrivateRoute 