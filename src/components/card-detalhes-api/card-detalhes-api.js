import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import { useLocation } from "react-router-dom";
import { useEffect, useState} from "react";
import React from "react";
import BotaoVoltar from "../button/button-back";
import Styles from "./card-detalhes-api.module.css";
import BotaoHome from "../button/button-home";

function DetalhesPokemon() {

    const { theme } = useContext(ThemeContext) || {};
    const location = useLocation();
    const pokemon = location?.state?.pokemon || {};
    const [pokemonUrl, setPokemonUrl] = useState(null);
    
    useEffect(() => {
        if (pokemon?.url) {
            fetch(pokemon.url)  
                .then((response) => response.json())
                .then((data) => setPokemonUrl(data))
                .catch((error) => console.error("Erro ao carregar Pokémon:", error));
        }
    }, [pokemon]);

    if (!pokemonUrl || Object.keys(pokemonUrl).length === 0) return <p style={{color: theme.color}} >Carregando...</p>;

    return (
        <>
        
        <div className={Styles.containerCardDetalhesApi}>
        <BotaoHome />
            <div style={{color: theme.color, backgroundColor: theme.backgroundCard, borderColor: theme.buttonColorBorder}} className={Styles.containerDetalhes}>
                {pokemonUrl && (
                    <div>
                        <h1 style={{color: theme.color}} >{pokemonUrl.name?.charAt(0).toUpperCase() + pokemonUrl.name?.slice(1) || "Desconhecido"}</h1>

                        <div>
                            <h2 style={{color: theme.color}} >Quais suas habilidades?</h2>
                            <ul style={{color: theme.color}}>
                                {pokemonUrl.abilities?.map((abi, index) => (
                                    <li style={{color: theme.color}} key={index}>{abi.ability.name?.charAt(0).toUpperCase() + abi.ability.name?.slice(1) || "Desconhecido"}</li>
                                ))}
                            </ul>

                            <h2 style={{color: theme.color}} >Pokemon do tipo:</h2>
                            <ul style={{color: theme.color}} >
                                {pokemonUrl.types?.map((typ, index) => (
                                    <li style={{color: theme.color}} key={index}>{typ.type.name?.charAt(0).toUpperCase() + typ.type.name?.slice(1) || "Desconhecido"}</li>
                                ))}
                            </ul>

                            <h2 style={{color: theme.color}} >Seus 10 movimentos:</h2>
                            <ul style={{color: theme.color}} >
                                {pokemonUrl.moves?.slice(0, 10).map((move, index) => (
                                    <li style={{color: theme.color}} key={index}>{move.move.name?.charAt(0).toUpperCase() + move.move.name?.slice(1) || "Desconhecido"}</li>
                                ))}
                            </ul>
                        </div>

                        <img className={Styles.imgDetalhes} src={pokemonUrl.sprites?.front_default} alt={pokemonUrl.name || "Desconhecido"} />
                    </div>
                )}
            </div>
            <BotaoVoltar />
        </div>
        </>);
}
export default DetalhesPokemon;
