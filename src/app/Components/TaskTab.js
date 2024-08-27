"use client"
import "./tasksCSS.css";
import Task from "./Task";


const TaskTab = ({name, TaskArray, update, index}) => {

  return (
    <div className="Tab-container">
      <div className="Tab-Header">
        {name}
      </div>
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