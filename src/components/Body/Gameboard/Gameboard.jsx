import { Grid, Typography } from "@mui/material";
import { createContext, useState } from "react";
import { GameboardRow } from "./GameboardRow";
import './gameboard.css'

export const GameContext = createContext();

export const Gameboard = () => {
    const [gameOver, setGameOver] = useState(false);

    return (
        <GameContext.Provider value={{ gameOver, setGameOver }} >
            {gameOver && <Typography variant="h3" sx={{ textAlign: 'center' }}>Game Over!</Typography>}
            <Grid >
                <GameboardRow rowNum={1} />
                <GameboardRow rowNum={2} />
                <GameboardRow rowNum={3} />
            </Grid>
        </GameContext.Provider>
    );
}