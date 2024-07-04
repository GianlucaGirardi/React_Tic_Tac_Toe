import { Grid } from '@mui/material';
import { useContext, useRef } from 'react';
import { TurnContext } from '../../../App';
import { GameContext } from './Gameboard';
import { markTile, isRestartBoard } from './gameboardUtils';
import '../Gameboard/gameboard.css';

export const GameboardCol = ({ rowNum, colNum, }) => {
    const tileId = `${rowNum}${colNum}`;
    const { gameOver, setGameOver, restart, numFreeTiles, setNumFreeTiles, gameboardMap, setWinner } = useContext(GameContext);
    const { turn, setTurn } = useContext(TurnContext);
    const tile = useRef();

    isRestartBoard(restart, tile);

    return (
        <Grid>
            <Grid>
                <button className="game-board-button"
                    ref={tile}
                    onClick={() => markTile(tileId, turn, numFreeTiles, setTurn, setGameOver, setNumFreeTiles, setWinner)}
                    disabled={gameboardMap.has(tileId) || gameOver}
                    style={{ color: gameboardMap.get(tileId) === 'X' ? '#087EA4' : '#2E3440' }}>
                    {gameboardMap.has(tileId) ? gameboardMap.get(tileId) : ''}
                </button>
            </Grid>
        </Grid>
    );
}