"use client";
import DropArrow from "../SVG/DropArrow"
import { useTheme } from "./ThemeContext";
import "./projectLink.css"

export default function ProjectLink({name, isSelected}) {

    const [currentTheme,setCurrentTheme] = useTheme();

    let strokeColor = currentTheme.complement;
    if (isSelected) {
        strokeColor = currentTheme.accent;
    }

    return (
        <div className="link-container">
            <span>{name}</span>
            <div className="select-arrow">
                <DropArrow stroke={strokeColor}/>
            </div>
        </div>
    )

}