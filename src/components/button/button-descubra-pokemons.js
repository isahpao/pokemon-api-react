import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../contexts/theme-context";
import { useContext } from "react";

function BotaoDescubraPokemons() {
    const navigate = useNavigate();
    const {theme} = useContext(ThemeContext);

    return (
        <button className="botao botaoOutroCard" style={{color: theme.color, backgroundColor: theme.buttonBg, borderColor: theme.buttonColorBorder}} onClick={() => navigate("/outro-card")}>DESCUBRA AQUI!</button>
        );
}

export default BotaoDescubraPokemons;