"use client";
import TaskElipse from "../SVG/TaskElipse";
import { useTheme } from "./ThemeContext"
import "./tasksCSS.css"

const Task = ({name,description,isCompleted,updateTab,key}) => {
  
  const [currentTheme,] = useTheme()

  const strokeColor = isCompleted ? currentTheme.accent : currentTheme.secondary
  
  return (
    <div title={description} className="Task-Container">
      <span>{name}</span>
      <div>
        <TaskElipse stroke={strokeColor} fill={currentTheme.primary} />
      </div>
    </div>
  )
}

export default Task