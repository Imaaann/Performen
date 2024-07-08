//rafce
import "./projectLink.css"


const NewProjectPop = () => {

  
  const submitProject = () => {
    const newTitle = document.getElementById("taskName").value
    const newDescription = document.getElementById("taskDesc").value

    console.log({newTitle,newDescription})
  }

  return (
    <div className="project-pop-up">
      <h1>New Project</h1>
      <label for="taskName">New Title</label>
      <input type="text" id="taskName" />
      <label for="taskDesc">Description</label>
      <textarea type="text-area" id="taskDesc"/>
      <span onClick={submitProject}>Done</span>
    </div>
  )

}

export default NewProjectPop