import { Grid } from '@mui/material';
import { useContext, useRef } from 'react';
import { ThemeContext, TurnContext } from '../../../App';
import { GameContext } from './Gameboard';
import { markTile, isRestartBoard } from './gameboardUtils';
import { DARK_THEME, TEXT_DARK, TEXT_LIGHT, TEXT_O_LIGHT, TURN_PLAYER1 } from '../../../constants';
import '../Gameboard/gameboard.css';

export const GameboardCol = ({ rowNum, colNum, }) => {
    const tileId = `${rowNum}${colNum}`;

    const {
        gameOver,
        setGameOver,
        restart,
        numFreeTiles,
        setNumFreeTiles,
        gameboardMap,
        setWinner,
        setPlayerTurnArr
    } = useContext(GameContext);

    const { turn, setTurn } = useContext(TurnContext);
    const { theme } = useContext(ThemeContext);
    const tile = useRef();

    isRestartBoard(restart, tile);

    return (
        <Grid>
            <Grid>
                <button className="game-board-button"
                    data-testid={tileId}
                    ref={tile}
                    onClick={() => markTile(tileId, turn, numFreeTiles, setTurn, setGameOver, setNumFreeTiles, setWinner,
                        setPlayerTurnArr)}
                    disabled={gameboardMap.has(tileId) || gameOver}
                    style={{
                        color: gameboardMap.get(tileId) === TURN_PLAYER1
                            ? theme === DARK_THEME
                                ? TEXT_DARK
                                : TEXT_LIGHT
                            : theme === DARK_THEME
                                ? TEXT_DARK
                                : TEXT_O_LIGHT
                    }}>
                    {gameboardMap.has(tileId) ? gameboardMap.get(tileId) : ''}
                </button>
            </Grid>
        </Grid>
    );
}