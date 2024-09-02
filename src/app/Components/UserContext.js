"use client"
import { createContext, useContext, useState } from "react"

const userContext = createContext();
const setUserContext = createContext();

export function useUser() {
  return [useContext(userContext),useContext(setUserContext)]
}

const UserContext = ({children}) => {

  const EmptyUser = {
    userName: "John Doe",
    UID: "XXXXX-XXXXX-XXXXX-XXXXX",
    profilePicture: "",
    projectList: [{
      name: "Hold to Delete a project", 
      isSelected: true, 
      tabList: []
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