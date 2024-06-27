import { Container } from "@mui/material";
import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";
import { ThemeProvider } from "@emotion/react";
import { appTheme } from './appUtils';
import { useState, createContext } from 'react';
import { DARK_THEME, DEFAULT_THEME, TURN_PLAYER1 } from "./constants";

export const ThemeContext = createContext();
export const TurnContext = createContext();

function App() {
  const [theme, setTheme] = useState(DEFAULT_THEME);
  const [turn, setTurn ] = useState(TURN_PLAYER1);
  
  return (
    <div style={{backgroundColor: theme === DARK_THEME? 'lightgrey' : ''}}>
      <TurnContext.Provider value={{turn, setTurn}}>
        <ThemeContext.Provider value={{theme, setTheme}}>
          <ThemeProvider theme={appTheme}>
            <Container maxWidth="lg">
                <Header />
                <Body />
            </Container>
          </ ThemeProvider>
        </ThemeContext.Provider>
      </TurnContext.Provider>
    </div>
  );
}

export default App;
