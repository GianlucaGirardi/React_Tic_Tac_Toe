import { markTile, checkForWin } from "./../gameboardUtils";
import { gameboardMap } from './../GameboardCol';

describe('markTile', () => {
    test('Mark the tile with the correct turn', () => {
        const tileId = '99';
        const turn = 'X';
        const setTurn = jest.fn();
        const setGameOver = jest.fn();

        const result = markTile(tileId, turn, setTurn, setGameOver);

        expect(gameboardMap.get(tileId)).toBe(turn);
        expect(result).toBe(turn);
    });
});

describe('checkForWin', () => {
    test('Verify that a win has occured', () => {
        const setGameOver = jest.fn();
        gameboardMap.set('11', 'O');
        gameboardMap.set('12', 'O');
        gameboardMap.set('13', 'O');

        const result = checkForWin(setGameOver);

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
