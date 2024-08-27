"use client";
import TaskElipse from "../SVG/TaskElipse";
import { useTheme } from "./ThemeContext"
import { findActiveProject } from "./NewButton";
import "./tasksCSS.css"
import { useUser } from "./UserContext";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLongPress } from "use-long-press";

const Task = ({name,isCompleted,update,index,tabIndex}) => {
  
  const [currentTheme,] = useTheme()
  const [user,setUser] = useUser()
  const activeIndex = findActiveProject(user)

  const [deleteState,setDeleteState] = useState(false)
  const showDelete = () => {
    setDeleteState(true)
  }
  const bindFunc = useLongPress(showDelete,{threshold:700})

  const cancelDeleteTask = () => {
    setDeleteState(false)
  }

  const deleteTask = () => {
    let userCopy = user
    userCopy.projectList[activeIndex].tabList[tabIndex].taskArray.splice(index,1)
    setUser(userCopy)
    update()
  }

  const ConfirmDelete = () => {
    return (
      <motion.div
        className="deletion-container"
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
        <div className="deletion-container-upper">
          <p className="deletion-text"> Are you sure u want to delete:</p>
          <p className="deletion-text-accent">"{name}"</p>
        </div>
        <div className="deletion-container-lower">
          <div className="deletion-button"onClick={deleteTask}>YES</div>
          <div className="deletion-button"onClick={cancelDeleteTask}>NO</div>
        </div>
      </motion.div>
    )
  }

  const strokeColor = isCompleted ? currentTheme.accent : currentTheme.secondary
  
  const completeTask = (e) => {
    let userCopy = user
    let task = userCopy.projectList[activeIndex].tabList[tabIndex].taskArray[index]
    task.isCompleted = !task.isCompleted
    setUser(userCopy)
    update()
  }

  return (
    <motion.div 
      className="Task-Container"
      {...bindFunc()}

      animate={deleteState ? "open":"close"}
      variants={{
        open: {
          padding: "15px 0px",
        },
        close: {
        }
      }}

      transition={{
        type: "spring",
        duration: 0.6,
      }}
    >
      {deleteState ? (<ConfirmDelete />) : (
        <>
          <span>{name}</span>
          <div onClick={completeTask} style={{cursor: "pointer"}}>
            <TaskElipse stroke={strokeColor} fill={currentTheme.primary} />
          </div>
        </>
      )}
    </motion.div>
  )
}

export default Task