import { createContext, useContext } from "react"
import { authservices } from "../Servies/Api"



const Authcontext=createContext(null)

export const Authprovider=({children})=>{


    const register= async (userdata)=>{

        try {
            const response=await authservices.register(userdata)
            return response
            
        } catch (error) {
             console.error("Register error:", error.message);
            throw(error)
            
        }

    }
    const login= async  (Credential)=>{
        try {
            const  response= await authservices.login(Credential)
             return response
        } catch (error) {
            
        }
    }

    const value={
        register,
        login
    }


    return <Authcontext.Provider value={value}>{children}</Authcontext.Provider>
}

export const useAuth = () => {
  const context = useContext(Authcontext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 