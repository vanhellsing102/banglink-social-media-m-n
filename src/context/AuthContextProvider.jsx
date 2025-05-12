"use client";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    useEffect( () =>{
        const getCurrentUser = localStorage.getItem("user") || null;
        setUser(getCurrentUser);
    }, [])

    const authInfo = {
        user,
        name: "murad"
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;