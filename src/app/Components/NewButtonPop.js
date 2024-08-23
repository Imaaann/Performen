"use client"
import { motion } from "framer-motion"
import "./tasksCSS.css"
import "./projectCss.css"


const NewButtonPop = ({state, newFunc}) => {

  const [newTab,newTask] = newFunc


  return (
    <>
      <div>
        <motion.div style={{position: "absolute", bottom: 0, right: 0}}
          animate={state ? "open":"closed"}
          variants={{
            open: {
              opacity: 1, 
              scale: 1
            },
        
            closed: {
              opacity: 0, 
              scale: 0.3
            }
          }}
          transition={{
            type: "spring",
            duration: 0.5,
          }}
        >
        
          <div className="New-Button-Pop-Container">
            <button onClick={newTask}>+ New Task</button>
            <button onClick={newTab}>+ New Tab</button>
          </div>

        </motion.div>
      </div>
    </>
  )
}

export default NewButtonPop