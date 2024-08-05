"use client"
import "./tasksCSS.css";
import Task from "./Task";
import { useUser } from "./UserContext";
import { useState } from "react";


const TaskTab = ({name, TaskArray}) => {

  const [updateTab,setUpdateTab] = useState(0) 

  return (
    <div className="Tab-container">
        <div className="Tab-Header">
           {name}
        </div>
        <div className="Tab-Body">
          
          {TaskArray.map((t,index) => 

          <Task 
          name={t.name} 
          description={t.description} 
          isCompleted={t.isCompleted} 
          updateTab={[updateTab,setUpdateTab]}
          key={index}
          />)
          
          }
        </div>
    </div>
  )
}

export default TaskTab