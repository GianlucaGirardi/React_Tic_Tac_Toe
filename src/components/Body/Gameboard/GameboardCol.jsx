import { Grid } from '@mui/material';
import { useContext } from 'react';
import { TurnContext } from '../../../App';
import { GameContext } from './Gameboard';
import { markTile } from './gameboardUtils';
import '../Gameboard/gameboard.css';

export const gameboardMap = new Map();

export const GameboardCol = ({ rowNum, colNum }) => {
    const tileId = `${rowNum}${colNum}`;
    const { gameOver, setGameOver } = useContext(GameContext);
    const { turn, setTurn } = useContext(TurnContext);

    return (
        <Grid item >
            <button className="game-board-button"
                onClick={() => markTile(tileId, turn, setTurn, setGameOver)}
                disabled={gameboardMap.has(tileId) || gameOver}
                style={{ color: gameboardMap.get(tileId) === 'X' ? '#087EA4' : '#2E3440' }}>
                {gameboardMap.has(tileId) ? gameboardMap.get(tileId) : ''}
            </button>
        </Grid>
    );
}