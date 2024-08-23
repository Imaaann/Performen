"use client"
import TaskTab from "./TaskTab"
import { useUser } from "./UserContext"
import NewButton from "./NewButton"



const TaskTable = ({update}) => {

  const [user,] = useUser()

  //Step 1: get currently selected project
  let activeProjectIndex = null;

  if (user.projectList != null) {
    for (let i=0; i<user.projectList.length; i++) {
      if (user.projectList[i].isSelected) {
        activeProjectIndex = i
        break;
      }
    }
  }

  console.log(user.projectList[activeProjectIndex].tabList)
  return (
    <div className="Task-Table-Container">
      {user.projectList[activeProjectIndex].tabList.map((t,index) => 
        <TaskTab name={t.name} TaskArray={t.taskArray} key={index} />
      )}
      <div style={{pointerEvents: "auto"}}>
        <NewButton update={update}/>
      </div>
    </div>
  )
}

export default TaskTable