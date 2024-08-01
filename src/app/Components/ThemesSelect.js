"use client";
import "./Themes.css"
import Palette from "../SVG/Palette";
import DropArrow from "../SVG/DropArrow";
import { useTheme } from "./ThemeContext";
import ThemeObjects from "./ThemeObjects";

export default function ThemeSelect() {


    // drop down behavior
    if (typeof window !== "undefined") {
        window.onclick = function(event) {
            if (
            !event.target.matches('.themeBtn') && 
            !event.target.matches('.dropdown-span') && 
            !event.target.matches('.themeBtn *')
            ) {
                let dropdown = document.getElementById("Themes");
                if(dropdown.classList.contains("show-element")) {
                    dropdown.classList.remove("show-element");
                }
            }
        }  
    }

    const showList = () => {
        document.getElementById("Themes").classList.toggle("show-element");
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


    
    return (
        <div className="dropdown">
            <button className="themeBtn" onClick={showList}>
                <div className="themes-container"> 
                    <div className="palette">
                        <Palette stroke={currentTheme.accent}/>
                    </div>
                    <span>Themes</span>
                    <DropArrow stroke={currentTheme.accent} />
                </div>
            </button>
            <div id="Themes" className="dropdown-content">
                <span className="dropdown-span" onClick={setDefTheme}>Default</span>
                <span className="dropdown-span" onClick={setGumTheme}>GumGum</span>
                <span className="dropdown-span" onClick={setGoldTheme}>Gold</span>
            </div>
        </div>
    )
}

