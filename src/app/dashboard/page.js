"use client";
import Header from "../Components/Header"
import ProjectSection from "../Components/ProjectSection"
import TaskTable from "../Components/TaskTable"
import { useState } from "react"
import "./dashboard.css"

export default function Home() {

  const [updateAll, setUpdateALL] = useState(0)
  const update = () => {
    setUpdateALL(updateAll+1)
  }



  return (
    <>
      <Header />
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