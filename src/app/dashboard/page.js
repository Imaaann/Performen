"use client";
import Header from "../Components/Header"
import ProjectSection from "../Components/ProjectSection"
import TaskTable from "../Components/TaskTable"
import { useState } from "react"
import "./dashboard.css"
import { useUser } from "../Components/UserContext";
import { findActiveProject } from "../Components/NewButton";

export function completionRatio(user) {
  const activeIndex = findActiveProject(user)
  const currentProject = user.projectList[activeIndex]
  let totalTasks = 0
  let totalCompletedTasks = 0

  for (let i=0; i<currentProject.tabList.length; i++) {
    if (currentProject.tabList[i].taskArray.length > 0) {
      totalTasks += currentProject.tabList[i].taskArray.length
      for (let j=0; j<currentProject.tabList[i].taskArray.length; j++) {
        if (currentProject.tabList[i].taskArray[j].isCompleted) {
          totalCompletedTasks += 1;
        }
      }
    }
  }

  console.log([totalTasks,totalCompletedTasks]);
  return ((totalTasks == 0) ? 0:(Math.floor((totalCompletedTasks/totalTasks)*100)))
}

export default function Home() {

  const [user,] = useUser()
  const [updateAll, setUpdateALL] = useState(0)
  const [completion, setCompletion] = useState(0)
  const update = () => {
    setUpdateALL(updateAll+1)
    setCompletion(completionRatio(user))
  }



  return (
    <>
      <Header completion={completion}/>
      <div className="main-body">
        <div className="task-section">
          <TaskTable update={update}/>
        </div>
        <div className="projects-section" id="projectList">
          <ProjectSection update={update}/>
        </div>
      </div>
    </>
  )
}