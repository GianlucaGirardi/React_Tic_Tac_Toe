import { markTile, checkForWin, initializeMap, isTie } from "./../gameboardUtils";
import { gameboardMap } from './../Gameboard';

describe('markTile', () => {
    test('Mark the tile with the correct turn', () => {
        const tileId = '99';
        const turn = 'X';
        const numFreeTiles = 9 ;
        const setTurn = jest.fn();
        const setGameOver = jest.fn();
        const setNumFreeTiles = jest.fn();

        const result = markTile(tileId, turn, numFreeTiles, setTurn, setGameOver, setNumFreeTiles);

        expect(gameboardMap.get(tileId)).toBe(turn);
        expect(result).toBe(turn);
    });
});

describe('checkForWin', () => {
    test('Verify that a win has occured', () => {
        const setGameOver = jest.fn();
        const setWinner = jest.fn();
        gameboardMap.set('11', 'O');
        gameboardMap.set('12', 'O');
        gameboardMap.set('13', 'O');

        const result = checkForWin(setGameOver, setWinner);

        expect(result).toBe(true);
    });

    test('Verify that a win has not occured', () => {
        const setGameOver = jest.fn();
        gameboardMap.set('11', 'O');
        gameboardMap.set('12', 'O');
        gameboardMap.set('13', 'X');

        const result = checkForWin(setGameOver);

        expect(result).toBe(false);
    });

    test('Verify that a win has not occured, due to length', () => {
        const setGameOver = jest.fn();
        gameboardMap.set('11', 'O');
        gameboardMap.set('12', 'O');

        const result = checkForWin(setGameOver);

        expect(result).toBe(false);
    });

});

describe('Initialize board', () => {
    test('Verify that the board has been cleared and parameters have been reset', () => {
        const setRestart = jest.fn();
        const setGameOver = jest.fn();
        const setWinner = jest.fn();
        const setNumFreeTiles = jest.fn();

        initializeMap(gameboardMap, setRestart, setGameOver, setNumFreeTiles, setWinner);

        expect(setRestart).toHaveBeenCalledWith(false);
        expect(setGameOver).toHaveBeenCalledWith(false);
        expect(setRestart).toHaveBeenCalledWith(false);
        expect(setNumFreeTiles).toHaveBeenCalledWith(9);
        expect(gameboardMap.size).toBe(0);
    });

});

describe('check for tie', () => {
    test('Verify that a tie may exist if there are no more free tiles', () => {
        const numFreeTiles = 0;
        const gameOver = false;
        const setGameOver = jest.fn();

        isTie(numFreeTiles, gameOver, setGameOver);

        expect(setGameOver).toHaveBeenCalledWith(true);
    });

    test('Verify that a tie cannot occur if there are free tiles', () => {
        const numFreeTiles = 1;
        const gameOver = false;
        const setGameOver = jest.fn();

        isTie(numFreeTiles, gameOver, setGameOver);

        expect(setGameOver).not.toHaveBeenCalled();
    });
});
