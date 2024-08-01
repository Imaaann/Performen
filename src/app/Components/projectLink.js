"use client";
import DropArrow from "../SVG/DropArrow"
import { useTheme } from "./ThemeContext";
import { useUser } from "./UserContext";
import "./projectCss.css"

export default function ProjectLink({name, isSelected, index, update}) {

    const [currentTheme,setCurrentTheme] = useTheme();
    const [user,setUser] = useUser()

    let strokeColor = currentTheme.complement;
    if (isSelected) {
        strokeColor = currentTheme.accent;
    }

    //Change to this project
    const selectProject = (e) => {
        let userCopy = user
        for (let i=0; i<userCopy.projectList.length; i++) {
            userCopy.projectList[i].isSelected = false
        }

        userCopy.projectList[index].isSelected = true
        setUser(userCopy)
        update[1](update[0] + 1)
    }

    return (
        <div className="link-container" onClick={selectProject}>
            <span>{name}</span>
            <div className="select-arrow">
                <DropArrow stroke={strokeColor}/>
            </div>
        </div>
    )

}