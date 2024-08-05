"use client"
import TaskTab from "./TaskTab"
import { useUser } from "./UserContext"
import NewButton from "./NewButton"
import NewButtonPop from "../Components/NewButtonPop";


const TaskTable = ({update}) => {

  const [user,setUser] = useUser()

  //Step 1: get currently selected project
  let activeProject = null;

  if (user.projectList != null) {
    for (let i=0; i<user.projectList.length; i++) {
      if (user.projectList[i].isSelected) {
        activeProject = user.projectList[i]
        break
      }
    }
  }

  let TabItems = []
  if (activeProject != null) {
    TabItems =  activeProject.tabList.map(
      (tab,index) => {
        <TaskTab 
        name={tab.name}
        TaskArray={tab.TaskArray}
        key={index}
        />
    })
  }



  return (
    <div className="Task-Table-Container">
      <div style={{pointerEvents: "auto"}}>
        {TabItems}
      </div>
      <div style={{pointerEvents: "auto"}}>
        <NewButton />
      </div>
    </div>
  )
}

export default TaskTable