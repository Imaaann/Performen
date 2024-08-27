"use client";
import TaskElipse from "../SVG/TaskElipse";
import { useTheme } from "./ThemeContext"
import { findActiveProject } from "./NewButton";
import "./tasksCSS.css"
import { useUser } from "./UserContext";

const Task = ({name,isCompleted,update,index,tabIndex}) => {
  
  const [currentTheme,] = useTheme()
  const [user,setUser] = useUser()
  const activeIndex = findActiveProject(user)

  const strokeColor = isCompleted ? currentTheme.accent : currentTheme.secondary
  
  const completeTask = (e) => {
    let userCopy = user
    let task = userCopy.projectList[activeIndex].tabList[tabIndex].taskArray[index]
    task.isCompleted = !task.isCompleted
    setUser(userCopy)
    update()
  }

  return (
    <div className="Task-Container">
      <span>{name}</span>
      <div onClick={completeTask} style={{cursor: "pointer"}}>
        <TaskElipse stroke={strokeColor} fill={currentTheme.primary} />
      </div>
    </div>
  )
}

export default Task