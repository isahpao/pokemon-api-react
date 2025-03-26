import { useState, createContext } from 'react';
import { useEffect } from 'react';

export const themes = {
    light: {
        color: '#316AB2',
        backgroundImage: "url('/images/papel-de-parede-de-quadrinhos-amarelos-de-design-plano_23-2148801759.avif')",
        buttonBg: '#FFCB05',
        backgroundCard: 'white',
        buttonColorBorder: '#316AB2',
    },
    dark: {
        color: 'red',
        backgroundImage: "url(images/relampago-de-fundo-abstrato_665280-234.avif)",
        buttonBg: 'black',
        backgroundCard: 'black',
        buttonColorBorder: 'red',
    }
}

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState(themes.light);

useEffect(() => {
        document.body.style.backgroundImage = theme.backgroundImage;
        document.body.style.backgroundSize = "cover"; 
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";
       
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
