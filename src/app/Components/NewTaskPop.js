"use client";
import DropArrow from "../SVG/DropArrow"
import "./tasksCSS.css"
import { useTheme } from "./ThemeContext";



const NewTaskPop = ({submitFunc,tabArray}) => {
  const [currentTheme,] = useTheme()
  const isTab = (tabArray.length > 0)
  
  const NewTaskFail = () => {
    return (
      <div className="New-Tab-Pop-Container">
        <h1 style={{color: `${currentTheme.accent}`}}>ERROR</h1>
        <h2>No tabs available</h2>
        <p>Please add some tabs using the <strong>"New Tab"</strong> option or switch projects.</p>
      </div>
    )
  }

  const NewTaskOk = () => {
    return (
      <div className="New-Tab-Pop-Container">
      <form onSubmit={submitFunc}>
        <h1 className="New-Tab-Pop-Header">New Task</h1>
        <input  
          type='text'
          name='Name'
          placeholder='Name'
          aria-label='Name'
          className="New-Tab-Pop-Input"
        />

        <label>Choose a Tab</label>
        <div className="New-Task-Arrow">
          <DropArrow stroke={currentTheme.accent}/>
        </div>
        <select className="New-Task-Select">

          {tabArray.map((t,index) => <option value={t.name} key={index}>{t.name}</option>)}
        </select>
        
        <button type="submit" className="New-Tab-Pop-Button" >Add Task!</button>
      </form>
      </div>
    )
  }

  return (
    <>
    { (isTab) ?  <NewTaskOk/> : <NewTaskFail /> }
    </>
  )
}

export default NewTaskPop