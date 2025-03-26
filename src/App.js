import { ThemeProvider } from './contexts/theme-context';
import './App.css';
import { ThemeTogglerButton } from './components/theme-toggler-context-api/theme-toggler-button';
import { Outlet } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import './App.css';
import BotaoHome from './components/button/button-home';
import BotaoDescubraPokemons from './components/button/button-descubra-pokemons';


function App() {
  const location = useLocation(); 
  
  return (
    <ThemeProvider>
      <div>
        <ThemeTogglerButton />
        
        {location.pathname === "/" && (
          <>
            <header className="containerLogo">
              <BotaoHome />
              <img className="logoPokemon" src="/images/logo-pokemon.png" alt="Logo da página" />
            </header>

            <div className="containerFundo">
              <img className="fundoPokemonEsquerda" src="\images\PngItem_302283.png" alt="Imagem de fundo da página" />
              <img className="fundoPokemonDireita" src="\images\whos.png" alt="Imagem de fundo da página"></img>
            </div>
            <div className='containerBotao'>
              <BotaoDescubraPokemons />
            </div>
          </>
        )}
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default App;


