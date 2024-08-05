"use client"
import NewButtonPop from "./NewButtonPop"
import { useState } from "react"
import "./tasksCSS.css"

const NewButton = () => {
  const [popUpState,setPopUpState] = useState(false)

  const showPopUp = (e) => {
    setPopUpState(true)
  }

  const removePopUp = (e) => {
    if(e.target.matches(".New-Button span")) {
      setPopUpState(false)
    }
  }

  return (
    <div className="New-Button" onClick={popUpState ? removePopUp:showPopUp}>
        {popUpState ? [<NewButtonPop />]:[]}
        <span style={{zIndex:5, rotate: `${popUpState ? "45deg":"0deg"}`}}>+</span>
    </div>
  )
}

export default NewButton