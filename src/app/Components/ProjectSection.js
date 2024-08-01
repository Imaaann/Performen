"use client";
import { useState } from "react";
import AddPlus from "../SVG/Add";
import "./projectCss.css";
import { useTheme } from "./ThemeContext";
import { useUser } from "./UserContext";
import { useForm } from "react-hook-form";
import ProjectLink from "./projectLink";


const ProjectSection = () => {

  // States and hooks
  const [currentTheme,] = useTheme()
  const [popUpState,setPopUpState] = useState(false)
  const [user,setUser] = useUser()
  const [update,setUpdate] = useState(0)

  // Black Cover Element
  const BlackCover = () => {
    return (
      <div className="blackout">
      </div>
    )
  }
 
  // Popup Element
  const NewProjectPopUp = () => {

    const handleSubmit = (e) => {
      setPopUpState(false)

      let userCopy = user
      userCopy.projectList.push({name: e.target[0].value, description: e.target[1].value, isSelected: false})
      setUser(userCopy)
    }
  
    return (
      <form onSubmit={handleSubmit} className="project-pop-up">
        <input
          type='text'
          name='description'
          placeholder='Name'
          aria-label='Name'
        />
        <input
          type='text'
          name='description'
          placeholder='Description'
          aria-label='Description'
        />
      <button type="submit">Submit</button>
      </form>
    );
  }

  // Popup Event
  const showNewProjectPopUp = (e) => {
    setPopUpState(true)
    if (typeof window !== "undefined") {
      window.onclick = (e) => {
        if (e.target.matches(".blackout")) {
          setPopUpState(false);
        }
      }
    }
  }

  //Render project list
  const projectList = user.projectList

  return (
    <div>
      <div className="project-creator" onClick={showNewProjectPopUp}>
        <span>New Project</span>
        <AddPlus stroke={currentTheme.accent}/>
      </div>
      {popUpState ? [<NewProjectPopUp />, <BlackCover />] : []}
      <div>
        {projectList.map((p,index) => <ProjectLink name={p.name} isSelected={p.isSelected} index={index} update={[update,setUpdate]}/>)}
      </div>
    </div>
  )
}

export default ProjectSection