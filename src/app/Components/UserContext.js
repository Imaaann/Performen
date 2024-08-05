"use client"
import { createContext, useContext, useState } from "react"

const userContext = createContext();
const setUserContext = createContext();

export function useUser() {
  return [useContext(userContext),useContext(setUserContext)]
}

const UserContext = ({children}) => {

  const EmptyUser = {
    userName: "",
    UID: "",
    profilePicture: "",
    projectList: [{
      name: "Welcome to Performen", 
      description: "Descriptions show on hover", 
      isSelected: true, 
      tabList: [
        {
          
        }
      ]
    }]
  }

  const [User,setUser] = useState(EmptyUser);


  return (
    <userContext.Provider value={User}>
      <setUserContext.Provider value={setUser}>
        {children}
      </setUserContext.Provider>
    </userContext.Provider>
  )
}

export default UserContext