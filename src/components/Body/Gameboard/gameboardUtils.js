import { winningConfig } from '../../configurations';
import { gameboardMap } from './GameboardCol';

export const markTile = (tileId, turn, setTurn, setGameOver) => {
    gameboardMap.set(tileId, turn);
    checkForWin(setGameOver);
    setTurn(turn === 'X' ? 'O' : 'X');
    return turn;
}

export const checkForWin = (setGameOver) => {
    if (gameboardMap.size > 2) {
        for (let i = 0; i < winningConfig.length; i++) {
            if (gameboardMap.has(winningConfig[i][0]) && gameboardMap.has(winningConfig[i][1]) && gameboardMap.has(winningConfig[i][1])) {
                if (gameboardMap.get(winningConfig[i][0]) === gameboardMap.get(winningConfig[i][1]) && gameboardMap.get(winningConfig[i][0]) === gameboardMap.get(winningConfig[i][2])) {
                    setGameOver(true);
                    return true;
                }
            }
        }
    }
    return false;
}