import { Grid, Typography } from "@mui/material";
import { createContext, useContext, useState } from "react";
import { GameboardRow } from "./GameboardRow";
import { GameOverModal } from "./GameOver/GameOverModal";
import { isRestartInterface, isTie, handleColorText } from "./gameboardUtils";
import { INITIAL_TILE_NUMBER } from './../../../constants';
import { ThemeContext } from "../../../App";
import './gameboard.css';

export const GameContext = createContext();

export const Gameboard = ({ gameboardMap, setPlayerTurnArr, setGameScreenshots }) => {
    const [gameOver, setGameOver] = useState(false);
    const [numFreeTiles, setNumFreeTiles] = useState(INITIAL_TILE_NUMBER);
    const [restart, setRestart] = useState(false);
    const [winner, setWinner] = useState(false);
    const { theme } = useContext(ThemeContext);

    isRestartInterface(gameboardMap, restart, setRestart, setGameOver, setNumFreeTiles, setWinner);
    isTie(numFreeTiles, gameOver, setGameOver);

    return (
        <GameContext.Provider value={{
            gameOver,
            restart,
            numFreeTiles,
            setRestart,
            setGameOver,
            setNumFreeTiles,
            gameboardMap,
            setWinner,
            setPlayerTurnArr
        }}>
            {gameOver &&
                <GameOverModal numFreeTiles={numFreeTiles}
                    restart={restart}
                    setRestart={setRestart}
                    winner={winner}
                    setPlayerTurnArr={setPlayerTurnArr}
                    setGameScreenshots={setGameScreenshots}
                />
            }<Grid className="gameboard">
                <Grid className="game-board-container">
                    <GameboardRow rowNum={1} />
                    <GameboardRow rowNum={2} />
                    <GameboardRow rowNum={3} />
                </Grid>
                <Grid >
                    <Typography variant="h6"
                        padding={5}
                        color={handleColorText(theme)}
                        sx={{ textAlign: 'center' }}>
                        {`There ${numFreeTiles === 1 ? 'is' : 'are'} ${numFreeTiles} free ${numFreeTiles === 1 ? 'tile' : 'tiles'} left`}
                    </Typography>
                </Grid>
            </Grid>
        </GameContext.Provider>
    );
}