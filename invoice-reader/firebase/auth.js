import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext,useEffect, useState } from "react";
import { auth } from "firebase/auth";

const authUserContext=createContext({
    authUser:null , //we dont't have authentificated user yet
    isLoading:true 
});

export function useFirebaseAuth(){
    const[authUserContext,setAuthUser] = useState(null);
    const[isLoading,setIsLoading] = useState(true);

    const authStateChanged=async(user)=>{
        setIsLoading(true);
        if(!user){
            setAuthUser(null);
            setAuthState(false);
            return;
        }
        setAuthUser({
            uid:user.uid,
            email:user.email
        });
        setIsLoading(false);
    }

    useEffect(()=>{
    const unsuscribed=onAuthStateChanged(auth,authStateChanged);
    return ()=>unscribed();
},[]);

     return{
        authUser,
        isLoading
     }
}

export function AuthUserProvider({children}){
    const auth=useFirebaseAuth();
    return <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
}


export const useAuth = ()=>useContext(AuthUserContext);