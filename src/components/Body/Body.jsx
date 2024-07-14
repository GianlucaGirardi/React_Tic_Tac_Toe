import { Grid, Paper } from "@mui/material";
import { PlayerBar } from "./PlayerBar/PlayerBar";
import { Gameboard } from "./Gameboard/Gameboard";
import { ThemeContext } from "../../App";
import { useContext, useState, useRef, useEffect } from "react";
import { TurnList } from "./TurnList/TurnList";
import './../../appUtils';
import { handleBackgroundTheme } from "./../../appUtils";
import { handleCaptureScreenshot } from "./bodyUtils";
import './body.css';

export const gameboardMap = new Map();

export const Body = ({ turn }) => {
    const { theme } = useContext(ThemeContext);
    const [playerTurnArr, setPlayerTurnArr] = useState([]);
    const [gameScreenshots, setGameScreenshots] = useState([]);
    const gameBoardElement = useRef(null);
    useEffect(() => { handleCaptureScreenshot(gameboardMap, gameScreenshots, setGameScreenshots) }, [turn]);

    return (
        <Grid rowSpacing={1}  >
            <Paper className={`body ${handleBackgroundTheme(theme)}`}
                elevation={2}
                square
            >
                <Grid className="player-bar">
                    <PlayerBar />
                </Grid>
                <Grid >
                    <div ref={gameBoardElement}>
                        <Gameboard gameboardMap={gameboardMap}
                            setPlayerTurnArr={setPlayerTurnArr}
                            setGameScreenshots={setGameScreenshots}
                        />
                    </div>
                    <TurnList playerTurnArr={playerTurnArr}
                        gameScreenshots={gameScreenshots}
                        theme={theme}
                    />
                </Grid>
            </Paper>
        </Grid>
    );
}