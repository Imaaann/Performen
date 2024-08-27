"use client";
import { useState } from "react";
import DropArrow from "../SVG/DropArrow"
import { useTheme } from "./ThemeContext";
import { useUser } from "./UserContext";
import { useLongPress } from "use-long-press";
import { motion } from "framer-motion";
import "./projectCss.css"

export default function ProjectLink({name, isSelected, index, update}) {

    const [currentTheme,] = useTheme()
    const [user,setUser] = useUser()
    const [attemptingDelete,setAttemptingDelete] = useState(false)

    let strokeColor = currentTheme.complement;
    if (isSelected) {
        strokeColor = currentTheme.accent;
    }

    //Change to this project
    const selectProject = (e) => {
      let userCopy = user
      for (let i=0; i<userCopy.projectList.length; i++) {
        userCopy.projectList[i].isSelected = false
      }

      if (userCopy.projectList[index] != undefined) {
        userCopy.projectList[index].isSelected = true
        setUser(userCopy)
        //update :D
        update()
      }
    }

    //delete behavior
    const deleteProject = (e) => {
      let userCopy = user
      userCopy.projectList.splice(index,1)
      setUser(userCopy)
      setAttemptingDelete(false)
      update()
    }

    const cancelDeleteProject = (e) => {
      setAttemptingDelete(false)
    }

    const showConfirmation = () => {
      setAttemptingDelete(true)
    } 

    const bind = useLongPress(showConfirmation,{threshold:700})

    return (
      <motion.div 
        className="link-container"   
        style={{cursor: `${attemptingDelete ? 'auto' : 'pointer'}`}} 
        onClick={selectProject} 
        {...bind()}
        animate={attemptingDelete ? "open":"close"}
        variants={{
          open: {
            height: "84px",
          },
          close: {
          }
        }}

        transition={{
          type: "spring",
          duration: 1.1,
        }}


      >
        
        {attemptingDelete ? (
            <motion.div 
              className="confirmation-container"
              animate={{
                opacity: 1,
                scale: 1,
              }}
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              transition={{
                delay: 0.2,
                duration: 0.2,
              }}
              
            >
              <div className="confirmation-container-upper">
                <p className="confirmation-text"> Are you sure u want to delete:</p>
                <p className="confirmation-text-accent">"{name}"</p>
              </div>
              <div className="confirmation-container-lower">
                <div className="confirmation-button"onClick={deleteProject}>YES</div>
                <div className="confirmation-button"onClick={cancelDeleteProject}>NO</div>
              </div>
              
            </motion.div>
          ) : (
          <span>{name}</span>
        )}

        <div className="select-arrow">
          <DropArrow stroke={strokeColor}/>
        </div>

      </motion.div>
    )

}