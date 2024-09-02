"use client";
import { useUser } from "./UserContext"
import { findActiveProject } from "./NewButton";
import { motion } from "framer-motion";



const UserPop = ({completion}) => {

  const [user,] = useUser()
  const activeIndex = findActiveProject(user)
  const currentProject = user.projectList[activeIndex]



  return (
    <motion.div 
      className="user-pop-container" 
      animate={{
        opacity: 1,
        scaleY: 1,
        y: 0,
      }}
      initial={{
        opacity: 0.7,
        scaleY: 0.3,
        y: -300,
      }}
    >
      <span style={{color: "var(--accent-colour)"}}>{"> " + user.userName}</span>
      <span><strong>{user.UID}</strong></span>
      <span>
        Current: {`"${currentProject.name}"`}
        <span style={{color: "var(--accent-colour)", fontWeight: 700}}>{`(${completion}%)`}</span>
      </span>
      <button>Log out</button>
    </motion.div>
  )
}

export default UserPop