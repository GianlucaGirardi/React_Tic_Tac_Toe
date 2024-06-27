import { Grid, Paper } from "@mui/material";
import { PlayerBar } from "./PlayerBar/PlayerBar";
import { Gameboard } from "./Gameboard/Gameboard";
import { ThemeContext } from "../../App";
import { useContext } from "react";
import { DARK_THEME, DARK_THEME_BODY } from "../../constants";
import './../../appUtils';
import './body.css';

export const Body = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <Grid rowSpacing={1}  >
            <Paper className="body"
                elevation={2}
                square
                sx={{ backgroundColor: theme === DARK_THEME ? `color.${DARK_THEME_BODY}` : '' }}  >
                <PlayerBar />
                <Gameboard />
            </Paper>
        </Grid>
    );
}