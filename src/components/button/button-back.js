import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../contexts/theme-context";
import { useContext } from "react";

function BotaoVoltar() {
    const navigate = useNavigate();
    const {theme} = useContext(ThemeContext);

    return (
        <button className="botao botaoVoltar" style={{color: theme.color, backgroundColor: theme.buttonBg, borderColor: theme.buttonColorBorder}} onClick={() => navigate(-1)}>Voltar</button>
    );
}

export default BotaoVoltar;
