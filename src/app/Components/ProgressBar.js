import "./Header.css"
import { motion } from "framer-motion"

const ProgressBar = ({completion}) => {
  return (
    <div>
      <span style={{color: "var(--accent-colour)", fontWeight: 600, fontFamily: "var(--normal-text-font)"}}>Progress: {completion}%</span>
      <div className="ProgressBar-Back">
        <motion.span 
          className="ProgressBar-Front"
          animate={{
            width: `${completion}%`,
          }} 
          initial={{
            width: "0%"
          }}
        >
        </motion.span>
      </div>
    </div>
  )
}

export default ProgressBar