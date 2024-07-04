import { Grid, Typography } from "@mui/material";
import { createContext, useContext, useState } from "react";
import { GameboardRow } from "./GameboardRow";
import { GameOverModal } from "./GameOver/GameOverModal";
import { initializeMap, isTie } from "./gameboardUtils";
import { INITIAL_TILE_NUMBER } from './../../../constants';
import { ThemeContext } from "../../../App";
import './gameboard.css';

export const GameContext = createContext();
export const gameboardMap = new Map();

export const Gameboard = () => {
    const [gameOver, setGameOver] = useState(false);
    const [numFreeTiles, setNumFreeTiles] = useState(INITIAL_TILE_NUMBER);
    const [restart, setRestart] = useState(false);
    const [winner, setWinner] = useState(false);
    const { theme } = useContext(ThemeContext);

    if (restart) {
        initializeMap(gameboardMap, setRestart, setGameOver, setNumFreeTiles, setWinner);
    }

    isTie(numFreeTiles, gameOver, setGameOver);

    return (
        <GameContext.Provider value={{ gameOver, restart, numFreeTiles, setRestart, setGameOver, setNumFreeTiles, gameboardMap, setWinner }} >
            {gameOver && <GameOverModal numFreeTiles={numFreeTiles} restart={restart} setRestart={setRestart} winner={winner} />}
            <Grid >
                <GameboardRow rowNum={1} />
                <GameboardRow rowNum={2} />
                <GameboardRow rowNum={3} />
            </Grid>
            <Grid >
                <Typography variant="h6" padding={5} color={`color.${theme}`} sx={{ textAlign: 'center' }}>{`There ${numFreeTiles === 1 ? 'is' : 'are'} ${numFreeTiles} free ${numFreeTiles === 1 ? 'tile' : 'tiles'} left`}</Typography>
            </Grid>
        </GameContext.Provider>
    );
}