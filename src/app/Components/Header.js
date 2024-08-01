"use client"
import "./Header.css";
import Logo from "../SVG/Logo";
import ThemeSelect from "./ThemesSelect";
import { useTheme } from "./ThemeContext";

export default function Header() {
    
    const [currentTheme,setCurrentTheme] = useTheme();

    return (
        <div className="Header">
            <span className="logo">
                <Logo fill={currentTheme.complement} stroke={currentTheme.accent}/>
            </span>
            <div className="header-left">
                <ThemeSelect />
                <div className="profile"></div>
            </div>
        </div>
    )
}
