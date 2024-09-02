"use client";
import "./Themes.css"
import Palette from "../SVG/Palette";
import DropArrow from "../SVG/DropArrow";
import { useTheme } from "./ThemeContext";
import ThemeObjects from "./ThemeObjects";
import { useState } from "react";
import { motion } from "framer-motion";
import ThemeBubbles from "../SVG/ThemeBubbles";

export default function ThemeSelect() {

    const [dropDownState, setDropDownState] = useState(false)

    const themeSelectionClick = (e) => {
        setDropDownState(!dropDownState)
    }


    // Theme selection behavior

    const [currentTheme,setCurrentTheme] = useTheme();

    function setDefTheme(e) {
        setCurrentTheme(ThemeObjects[0]);
    }
    
    function setGumTheme(e) {
        setCurrentTheme(ThemeObjects[1]);
    }

    function setGoldTheme(e) {
        setCurrentTheme(ThemeObjects[2]);
    }

    const settingFunctions = [setDefTheme,setGumTheme,setGoldTheme]

    
    return (
      <div className="dropdown">
        <button className="themeBtn" onClick={themeSelectionClick}>
          <div className="themes-container"> 
            <div className="palette">
              <Palette stroke={currentTheme.accent}/>
            </div>
            <span>Themes</span>
            <DropArrow stroke={currentTheme.accent} />
          </div>
        </button>
        <motion.div
          animate={dropDownState ? "open":"closed"}
          variants={{
            open: {
              opacity: 1, 
              scaleY: 1
            },
        
            closed: {
              opacity: 0, 
              scaleY: 0.3
            }
          }}
          transition={{
            type: "linear",
            duration: 0.3,
          }}
        >
          <div className="dropdown-container">
            {dropDownState && ThemeObjects.map((o,index) => {
                return (
                <div className="dropdown-content" onClick={settingFunctions[index]}>
                  <ThemeBubbles primary={o.primary} secondary={o.secondary} complement={o.complement} accent={o.accent}/>
                  <span>{` |${index+1}| ` + o.name}</span>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    )
}

