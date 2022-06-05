import {React,useState,createContext} from 'react';

export const UserContext = createContext({
    currentUser: {},
    setCurrentUser: (user) => {},
    baseUrl:"http://localhost:8080",
    authenticated: false,
    setAuthenticated: (auth) => {}

    })


export const UserProvider = ({children}) =>{
    const [currentUser,setCurrentUser] = useState();
    const [authenticated,setAuthenticated] = useState();
    const baseUrl ="http://localhost:8080";
    const value = {currentUser,setCurrentUser,authenticated,setAuthenticated,baseUrl};
    return <UserContext.Provider value={value}> {children}</UserContext.Provider>
}
