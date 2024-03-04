import {useContext, createContext, useState } from "react";
const authContext = createContext();
export const useAuth =() =>useContext(authContext);
const AuthProvider = ({children})=>{
    const [auth, setAuth] = useState({
        user:null,
        token:"yes i have a token",
    });
    return <authContext.Provider value={[auth, setAuth]}>{children}</authContext.Provider>;
}

export default AuthProvider;