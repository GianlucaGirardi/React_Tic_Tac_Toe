import { winningConfig } from '../../configurations';
import { gameboardMap } from '../Body';
import { DARK_THEME, DARK_THEME_TEXT, EDIT_MODE, SAVE_MODE } from '../../../constants';

export const handleColorText = (theme) => {
    return theme === DARK_THEME ? `color.${DARK_THEME_TEXT}` : `color.${theme}`;
}
export const toggleButtonText = (button) => {
    return button === EDIT_MODE ? SAVE_MODE : EDIT_MODE;
}

export const markTile = (tileId, turn, numFreeTiles, setTurn, setGameOver, setNumFreeTiles, setWinner,  
        setPlayerTurnArr) => {
    gameboardMap.set(tileId, turn);
    checkForWin(setGameOver, setWinner);
    setTurn(turn === 'X' ? 'O' : 'X');
    setNumFreeTiles(numFreeTiles - 1);
    setPlayerTurnArr(extractGameboard);
    return turn;
}

export const checkForWin = (setGameOver, setWinner) => {
    if (gameboardMap.size > 2) {
        for (let i = 0; i < winningConfig.length; i++) {
            if (gameboardMap.has(winningConfig[i][0]) && gameboardMap.has(winningConfig[i][1]) && gameboardMap.has(winningConfig[i][2])) {
                if (gameboardMap.get(winningConfig[i][0]) === gameboardMap.get(winningConfig[i][1]) && gameboardMap.get(winningConfig[i][0]) === gameboardMap.get(winningConfig[i][2])) {
                    setGameOver(true);
                    setWinner(true);
                    return true;
                }
            }
        }
    }
    return false;
}

export const extractGameboard = () => {
    const tempArr1 = [];
    for (const element of gameboardMap.entries()) {
        tempArr1.push(element);
    }
    return tempArr1;
}

export const initializeBoard = (tile) => {
    tile.current.value = '';
    tile.current.disabled = 'false';
}

export const initializeMap = (gameboardMap, setRestart, setGameOver, setNumFreeTiles, setWinner) => {
    gameboardMap.clear();
    setRestart(false);
    setGameOver(false);
    setNumFreeTiles(9);
    setWinner(false);
}

export const isRestartBoard = (restart, tile) => {
    if (restart) {
        initializeBoard(tile);
    }
}

export const isRestartInterface = (gameboardMap, restart, setRestart, setGameOver, setNumFreeTiles, setWinner) => {
    if (restart) {
        initializeMap(gameboardMap, setRestart, setGameOver, setNumFreeTiles, setWinner);
    }
}

export const isTie = (numFreeTiles, gameOver, setGameOver) => {
    if (numFreeTiles === 0 && !gameOver) {
        setGameOver(true);
    }
}

export const handleClose = (option, setPlayerTurnArr, setOpen, setRestart, setGameScreenshots) => {
    if (option === 0) {
        setRestart(true);
        setPlayerTurnArr([]);
        setGameScreenshots([]);
    }
    setOpen(false);
};