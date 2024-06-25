import { Container } from "@mui/material";
import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";
import { ThemeProvider } from "@emotion/react";
import { appTheme } from './appUtils';
import { useState, createContext } from 'react';
import { DEFAULT_THEME } from "./constants";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <ThemeProvider theme={appTheme}>
        <Container maxWidth="lg">
            <Header />
            <Body />
          
        </Container>
      </ ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
