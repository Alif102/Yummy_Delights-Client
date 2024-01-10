import { useEffect, useState } from "react";
import UseAuth from "./UseAuth"
import { getRole } from "../api/Auth";

const useRole = ()=> {
    const {user} = UseAuth();
    const [role,setRole] = useState(null);
    useEffect( ()=> {
        getRole(user?.email).then(data => {
            setRole(data)
        })
    },[user])
    return [role]
}
export default useRole