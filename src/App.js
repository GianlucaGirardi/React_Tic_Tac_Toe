import { Container } from "@mui/material";
import { Header } from "./components/Header/Header";
import { ThemeProvider } from "@emotion/react";
import { appTheme } from './appUtils';
import { useState, createContext } from 'react';
import './constants';
import { DEFAULT_THEME } from "./constants";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState(DEFAULT_THEME);


  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
    <ThemeProvider theme={appTheme}>
      <Container maxWidth="lg">
          <Header />
        
      </Container>
    </ ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
