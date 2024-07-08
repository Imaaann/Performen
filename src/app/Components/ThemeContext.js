"use client"
import { createContext, useContext, useState } from "react"
import ThemeObjects from "./ThemeObjects";

const ThemeContext = createContext();
const setThemeContext = createContext();

export function useTheme() {
    return ([useContext(ThemeContext),useContext(setThemeContext)])
}

export default function ThemeProvider({children}) {

    const [currentTheme,setCurrentTheme] = useState(ThemeObjects[0]);


    const setCSSVariables = (Theme) => {
        document.documentElement.style.setProperty('--primary-colour',Theme.primary);
        document.documentElement.style.setProperty('--secondary-colour',Theme.secondary);
        document.documentElement.style.setProperty('--complement-colour',Theme.complement);
        document.documentElement.style.setProperty('--accent-colour',Theme.accent);
        document.documentElement.style.setProperty('--normal-text-colour',Theme.text);
    }

    function setTheme(Theme) {
        setCurrentTheme(Theme);
        setCSSVariables(Theme);
    }
    


    return (
        <ThemeContext.Provider value={currentTheme} >
            <setThemeContext.Provider value={setTheme}>
                {children}
            </setThemeContext.Provider>
        </ThemeContext.Provider>
    )
}