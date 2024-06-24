import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useContext } from 'react';
import { ThemeContext } from '../../App';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { DEFAULT_THEME, DARK_THEME } from '../../constants.js'

export const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const toggleTheme = () => {
        return theme === DEFAULT_THEME ? setTheme(DARK_THEME) : setTheme(DEFAULT_THEME);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: `violet.${theme}` }} >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        sx={{ mr: 2 }}
                        onClick={toggleTheme}
                    >
                        {theme === DEFAULT_THEME ? < DarkModeIcon /> : <LightModeIcon />}
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        React Tic Tac Toe
                    </Typography>
                    <Button color="inherit">New Game</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
