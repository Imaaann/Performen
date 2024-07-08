import Header from "../Components/Header"
import ProjectSection from "../Components/ProjectSection"

import "./dashboard.css"

export default function Home() {


  return (
    <>
      <Header />
      <div className="main-body">
        <div className="task-section">
        </div>  
        <div className="projects-section" id="projectList">
          <ProjectSection />
        </div>
      </div>
    </>
  )
}