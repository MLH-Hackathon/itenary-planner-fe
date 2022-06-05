import {React,useState,createContext} from 'react';

export const UserContext = createContext({
    currentUser: {},
    setCurrentUser: (user) => {},
    baseUrl:"http://localhost:8080",
    authenticated: false,
    setAuthenticated: (auth) => {},
    jwt: "",
    setJwt: (token) => {}
    })


export const UserProvider = ({children}) =>{
    const [currentUser,setCurrentUser] = useState();
    const [authenticated,setAuthenticated] = useState();
    const [jwt,setJwt] = useState();
    const baseUrl ="http://localhost:8080";
    const value = {currentUser,setCurrentUser,authenticated,setAuthenticated,baseUrl,jwt,setJwt};
    return <UserContext.Provider value={value}> {children}</UserContext.Provider>

}
