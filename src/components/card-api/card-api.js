import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../contexts/theme-context";
import React from "react";
import BotaoVoltar from "../button/button-back";
import Styles from "./card-api.module.css"
import BotaoHome from "../button/button-home";

function OutroCard() {
    const [pokemon, setPokemon] = useState([]);
    const navigate = useNavigate();
    const {theme} = useContext(ThemeContext);
    const [limit, setLimit] = useState(10);
    const [imagemPokemon, setImagemPokemon] = useState([]);
    
    const handleClick = (poke) => {
        navigate("/detalhes-pokemon", { state: { pokemon: poke } }); 
    };

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
            .then((response) => response.json())
            .then((data) => {
                setPokemon(data.results);
            })
            .catch((error) => console.error("Erro ao buscar Pokémons:", error));
    }, [limit]);

    const carregarMais = () => {
        setLimit(prevLimit => prevLimit + 10);
    };

useEffect(() => {
        const fetchPokemonImages = async () => {
            try {
                const images = await Promise.all(
                    pokemon.map(async (poke) => {
                        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke.name}`);
                        const data = await response.json();
                        return data;
                    })
                );
                setImagemPokemon(images);
            } catch (error) {
                console.error("Erro ao carregar imagens dos Pokémons:", error);
            }
        };

        if (pokemon.length > 0) {
            fetchPokemonImages();
        }
    }, [pokemon]);

    return (
        <>
            <div className={Styles.containerOutroCard}>
            <BotaoHome />
                <div className={Styles.outroCard}>

                    <div className={Styles.containerInfos}>

                    {pokemon && pokemon.length > 0 ? (
                        pokemon.map((poke, index) => (
                            <div style={{color: theme.color, backgroundColor: theme.backgroundCard, borderColor: theme.buttonColorBorder}} key={index} className={Styles.containerInfosDetalhes}>
                                {imagemPokemon && imagemPokemon[index] && (
                                    <img className={Styles.imgPokemonOutroCard} src={imagemPokemon[index].sprites?.front_default} alt={poke.name || "Desconhecido"} />
                                )}
                                <p style={{color: theme.color}} >{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</p>
                                <button style={{color: theme.color, backgroundColor: theme.buttonBg, borderColor: theme.buttonColorBorder}} className={Styles.botaoVerDetalhes} onClick={() => handleClick(poke)}>Ver detalhes</button>
                            </div>
                        ))
                    ) : (
                        <p style={{color: theme.color}} >Carregando...</p>
                    )}
                </div>
                    <button style={{color: theme.color, backgroundColor: theme.buttonBg, borderColor: theme.buttonColorBorder}} className="botaoVerMais botao" onClick={carregarMais}>Ver mais</button>
                </div>
                <BotaoVoltar />
            </div>
        </>
    );
}
export default OutroCard;

