"use client"
import TaskTab from "./TaskTab"
import { useUser } from "./UserContext"
import NewButton, { findActiveProject } from "./NewButton"



const TaskTable = ({update}) => {
  const [user,] = useUser()
  let activeIndex = findActiveProject(user);


  return (
    <div className="Task-Table-Container" style={{pointerEvents: "auto"}}>
      {(activeIndex != null) && (user.projectList[activeIndex].tabList.map((t,index) => {
        return (<TaskTab name={t.name} TaskArray={t.taskArray} index={index} update={update}/>)
      }))}
      <div style={{pointerEvents: "auto"}}>
        <NewButton update={update}/>
      </div>
    </div>
  )
}

export default TaskTable