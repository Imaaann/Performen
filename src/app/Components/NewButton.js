"use client"
import NewButtonPop from "./NewButtonPop"
import { useState } from "react"
import { motion } from "framer-motion"
import "./tasksCSS.css"
import { BlackCover } from "./ProjectSection"
import NewTabPop from "./NewTabPop"
import { useUser } from "./UserContext"

const NewButton = ({update}) => {
  const [popUpState,setPopUpState] = useState(false)
  const [creationState,setCreationState] = useState(0)
  const [user,setUser] = useUser()

  const openMenu = (e) => {
    if (popUpState) {
      if (e.target.matches(".New-Button span")) {
        setPopUpState(false)
      } 
    } else {
      setPopUpState(true)
    }
  }

  const blackCoverClick = (e) => {
    setCreationState(0)
    setPopUpState(false)
  }
 
  const newTab = (e) => {
    setCreationState(1)
  }

  const newTask = (e) => {
    setCreationState(2)
  }
  
  const handleNewTab = (e) => {
    setCreationState(0)

    let userCopy = user;
    let activeIndex = null;
    for (let i=0; i<userCopy.projectList.length; i++) {
      if (userCopy.projectList[i].isSelected) {
        activeIndex = i
        break;
      }
    }

    if (activeIndex != null) {
      userCopy.projectList[activeIndex].tabList.push({
        name: e.target[0].value,
        taskArray: []
      })

      setUser(userCopy)
    }
    
    update()
  }


  return (
    <>
      <div className="New-Button" onClick={openMenu} style={{border: `${popUpState ? "none":"1px solid var(--accent-colour)"}`}}>
          <NewButtonPop state={popUpState} newFunc={[newTab,newTask]}/>
          <motion.div
            animate={popUpState ? "open":"closed"}
            variants={{
              open: {
                rotate: "45deg"
              },
              closed: {
                rotate: "0deg"
              }
            }}
          >
            <span style={{zIndex:5}}>+</span>
          </motion.div>
      </div>
      <div>
        {(creationState != 0) && <BlackCover onClick={blackCoverClick} />}
        {(creationState == 1) && <NewTabPop submitFunc={handleNewTab} />}
      </div>
    </>
  )
}

export default NewButton