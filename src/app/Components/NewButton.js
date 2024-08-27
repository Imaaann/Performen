"use client"
import NewButtonPop from "./NewButtonPop"
import { useState } from "react"
import { motion } from "framer-motion"
import "./tasksCSS.css"
import { BlackCover } from "./ProjectSection"
import NewTabPop from "./NewTabPop"
import { useUser } from "./UserContext"
import NewTaskPop from "./NewTaskPop"
import NoProjectPop from "./NoProjectPop"

export function findActiveProject(user) {
  let activeIndex = null;
  if (user.projectList.length > 0) {
    for (let i=0; i<user.projectList.length; i++) {
      if (user.projectList[i].isSelected) {
        activeIndex = i
        break;
      }
    }
  }
  return activeIndex
}

const NewButton = ({update}) => {
  const [popUpState,setPopUpState] = useState(false)
  const [creationState,setCreationState] = useState(0)
  const [user,setUser] = useUser()
  let activeIndex = findActiveProject(user)

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
    if (activeIndex != null) {
      userCopy.projectList[activeIndex].tabList.push({
        name: e.target[0].value,
        taskArray: []
      })

      setUser(userCopy)
    }
    
    update()
  }

  const handleNewTask = (e) => {
    setCreationState(0)
    let userCopy = user;
    if (activeIndex != null) {
      let Tabs = userCopy.projectList[activeIndex].tabList;
      let selectedIndex = null;
      for (let i=0; i<Tabs.length; i++) {
        if (Tabs[i].name === e.target[1].value) {
          selectedIndex = i;
          break;
        }
      }

      if (selectedIndex != null) {
        userCopy.projectList[activeIndex].tabList[selectedIndex].taskArray.push({
          name: e.target[0].value,
          isCompleted: false,
        })
      }
    }
  
    setUser(userCopy)
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
        {(activeIndex == null && creationState != 0) ? [<BlackCover onClick={blackCoverClick} />,<NoProjectPop /> ] : []}
        {(creationState != 0 && activeIndex != null) && <BlackCover onClick={blackCoverClick} />}
        {(creationState == 1 && activeIndex != null) && <NewTabPop submitFunc={handleNewTab} />}
        {(creationState == 2 && activeIndex != null) && <NewTaskPop submitFunc={handleNewTask} tabArray={user.projectList[activeIndex].tabList} />}
      </div>
    </>
  )
}

export default NewButton