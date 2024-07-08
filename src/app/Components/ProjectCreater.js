"use client";
import "./projectLink.css";
import AddPlus from "../SVG/Add";
import NewProjectPop from "./NewProjectPop";
import { useTheme } from "./ThemeContext";
import { createElement, useState } from "react";

const BlackCover = () => {
    return (
      <div id="cover-div" className="blackout">
      </div>
    )
}

export default function ProjectCreator() {

    const [currentTheme,setCurrentTheme] = useTheme();
    const [showPopUp,setShowPopUp] = useState(false);

    const newProject = () => {
        setShowPopUp(!showPopUp);
        if (typeof window !== "undefined") {
            window.onclick = function(event) {
                if (
                !event.target.matches(".project-creator") &&
                !event.target.matches(".project-creator *") &&
                !event.target.matches('.project-pop-up') &&
                !event.target.matches('.project-pop-up *')
                ) {
                    setShowPopUp(false);
                }
            }  
        }
    }  



    return (
        <>
        <div className="project-creator" onClick={newProject}>
            <span>Projects</span>
            <div>
            <AddPlus stroke={currentTheme.accent} />
            </div>
        </div>
        {showPopUp ? [<NewProjectPop/>, <BlackCover />] : []}
        </>
    )
}