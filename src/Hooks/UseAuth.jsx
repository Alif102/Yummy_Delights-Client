import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider";

const UseAuth = () => {
    const All = useContext(AuthContext);
  return All
}    
 
export default UseAuth 