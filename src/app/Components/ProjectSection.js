"use client";
import { useState } from "react";
import AddPlus from "../SVG/Add";
import "./projectCss.css";
import { useTheme } from "./ThemeContext";
import { useUser } from "./UserContext";
import ProjectLink from "./projectLink";

// Black Cover Element
export const BlackCover = ({onClick}) => {
  return (
    <div className="blackout" onClick={onClick}>
    </div>
  )
}


const ProjectSection = ({update}) => {

  // States and hooks
  const [currentTheme,] = useTheme()
  const [popUpState,setPopUpState] = useState(false)
  const [user,setUser] = useUser()


 
  // Popup Element
  const NewProjectPopUp = () => {

    const handleSubmit = (e) => {
      setPopUpState(false)

      let userCopy = user
      userCopy.projectList.push({  
        name: e.target[0].value,
        isSelected: false, 
        tabList: []
      })

      setUser(userCopy)
    }
  
    return (
      <div className="Pop-Container">
        <form onSubmit={handleSubmit} >
          <h1 className="Pop-Header">New Project</h1>
          <input
            type='text'
            name='Name'
            placeholder='Name'
            aria-label='Name'
            className="Pop-Input"
          />
        <button type="submit" className="Pop-Button">Create</button>
        </form>
      </div>
    );
  }

  // Popup Event
  const showNewProjectPopUp = (e) => {
    setPopUpState(true)
  }

  const onBackDropClick = (e) => {
    setPopUpState(false)
  }

  //Render project list
  const projectList = user.projectList
  

  return (
    <div>
      <div className="project-creator" onClick={showNewProjectPopUp}>
        <span>New Project</span>
        <AddPlus stroke={currentTheme.accent}/>
      </div>
      {popUpState ? [<NewProjectPopUp />, <BlackCover  onClick={onBackDropClick}/>] : []}
      <div>
        {projectList != null && 
        projectList.map((p,index) => 

          <ProjectLink 
          name={p.name} 
          isSelected={p.isSelected} 
          index={index} 
          update={update}/>

        )}

      </div>
    </div>
  )
}

export default ProjectSection