import { Grid } from '@mui/material';
import { useContext, useRef } from 'react';
import { ThemeContext, TurnContext } from '../../../App';
import { GameContext } from './Gameboard';
import { markTile, isRestartBoard } from './gameboardUtils';
import '../Gameboard/gameboard.css';
import { DARK_THEME } from '../../../constants';

export const GameboardCol = ({ rowNum, colNum, }) => {
    const tileId = `${rowNum}${colNum}`;
    const { gameOver, setGameOver, restart, numFreeTiles, setNumFreeTiles, gameboardMap, setWinner } = useContext(GameContext);
    const { turn, setTurn } = useContext(TurnContext);
    const { theme } = useContext(ThemeContext);
    const tile = useRef();

    isRestartBoard(restart, tile);

    return (
        <Grid>
            <Grid>
                <button className="game-board-button"
                    ref={tile}
                    onClick={() => markTile(tileId, turn, numFreeTiles, setTurn, setGameOver, setNumFreeTiles, setWinner)}
                    disabled={gameboardMap.has(tileId) || gameOver}
                    style={{
                        color: gameboardMap.get(tileId) === 'X'
                            ? theme === DARK_THEME
                                ? 'rgb(255, 255, 255)'
                                : 'rgb(8 126 164 )'
                            : theme === DARK_THEME
                                ? 'rgb(255, 255, 255)'
                                : '#2E3440'
                    }}>
                    {gameboardMap.has(tileId) ? gameboardMap.get(tileId) : ''}
                </button>
            </Grid>
        </Grid>
    );
}