/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react"
import auth from "../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
 

    // Google LogIn
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    // Sign in
    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password)=> {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    const LogOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    const handleUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    useEffect( ()=> {
        const unSubscribe =   onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)

        })
        return ()=> {
            unSubscribe();
        }

    } , [])


    const authentications = {
        googleLogin,
        createUser,
        user,
        loading,
        signIn,
        LogOut,
        handleUpdateProfile
    }



  return (
    <AuthContext.Provider value={authentications}>
        {children}

    </AuthContext.Provider>
  )
}

export default AuthProvider
