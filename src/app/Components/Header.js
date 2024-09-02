"use client"
import "./Header.css";
import Logo from "../SVG/Logo";
import ThemeSelect from "./ThemesSelect";
import { useTheme } from "./ThemeContext";
import UserPop from "./UserPop";
import { useState } from "react";

export default function Header({completion}) {
    
    const [currentTheme,] = useTheme();
    const [userPopState,setUserPopState] = useState(false);

    const profileOnClick = (e) => {
        setUserPopState(!userPopState)
    }

    return (
        <div className="Header">
            <span className="logo">
                <Logo fill={currentTheme.complement} stroke={currentTheme.accent}/>
            </span>
            <div className="header-left">
                <ThemeSelect />
                <div style={{position: "relative"}}>
                    <div className="profile" onClick={profileOnClick} ></div>
                    {userPopState && <UserPop completion={completion}/>}
                </div>
            </div>
        </div>
    )
}
