"use client";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export const getAuthContext = () =>{
    return useContext(AuthContext);
}

const AuthContextProvider = ({children}) => {
    const router = useRouter();
    const [user, setUser] = useState(null);
    useEffect( () =>{
        const getCurrentUser = JSON.parse(localStorage.getItem("user") || null);
        setUser(getCurrentUser);
        // console.log('current user', getCurrentUser);
        if(!getCurrentUser){
            return router.push("/login");
        }
    }, [])
    const authInfo = {
        user,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;