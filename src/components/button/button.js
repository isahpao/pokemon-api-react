import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";

export const Button = (props) => {

const {theme} = useContext(ThemeContext);

return (
    <div className="containerBotao">
        <button className="botao botaoModoDark" { ... props }
        style={{color: theme.color, backgroundColor: theme.buttonBg, borderColor: theme.buttonColorBorder}}
    /></div>
)}