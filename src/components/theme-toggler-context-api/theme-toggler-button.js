import { ThemeContext } from "../../contexts/theme-context";
import { themes } from "../../contexts/theme-context";
import { useContext } from "react";
import React from "react";
import { Button } from "../button/button";

export const ThemeTogglerButton = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    
return(
        <div>
        <Button onClick={() => setTheme (theme ===themes.light ? themes.dark : themes.light)}>{theme === themes.light ? "MODO DARK 🕷️" : "MODO LIGHT 🔥"}</Button>
        </div>
    )
}