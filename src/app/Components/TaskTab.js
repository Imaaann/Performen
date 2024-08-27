"use client"
import "./tasksCSS.css";
import Task from "./Task";
import { useState } from "react";
import { useLongPress } from "use-long-press";
import { motion } from "framer-motion";
import { useUser } from "./UserContext";
import { findActiveProject } from "./NewButton";

const TaskTab = ({name, TaskArray, update, index}) => {

  const [deleteState,setDeleteState] = useState(false)
  const [user,setUser] = useUser()
  const activeIndex = findActiveProject(user)
  const showDelete = () => {
    setDeleteState(true)
  }
  const bindFunc = useLongPress(showDelete,{threshold:700})
  

  const deleteTab = () => {
    let userCopy = user;
    userCopy.projectList[activeIndex].tabList.splice(index,1)
    setUser(userCopy)
    update()
  }

  const cancelDeleteTab = () => {
    setDeleteState(false)
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
          delay: 0.4,
          duration: 0.2,
        }}
      >
        <div className="deletion-container-upper">
          <p className="deletion-text"> Are you sure u want to delete:</p>
          <p className="deletion-text-accent">"{name}"</p>
        </div>
        <div className="deletion-container-lower">
          <div className="deletion-button"onClick={deleteTab}>YES</div>
          <div className="deletion-button"onClick={cancelDeleteTab}>NO</div>
        </div>
      </motion.div>
    )
  }
  

  return (
    <div className="Tab-container">
      <motion.div 
        className="Tab-Header"
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
        {deleteState ? [<ConfirmDelete />]:[<span>{name}</span>]}
      </motion.div>
      <div className="Tab-Body">       
        {TaskArray.map((t,i) => {
          return (          
            <Task 
            name={t.name} 
            isCompleted={t.isCompleted} 
            tabIndex={index}
            index={i}
            update={update}
            />)
        })}
      </div>
    </div>
  )
}

export default TaskTab