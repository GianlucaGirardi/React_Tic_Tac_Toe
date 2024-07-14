import { handleCaptureScreenshot } from "../bodyUtils";

describe('bodyUtils', () =>{
    test(' Validate that a screenshot of the game should be captured when the gameboard is not empry', () => {

        const gameboardMap = new Map();
        gameboardMap.set('11', 'X');
        const initialGameScreenshots = [];
        const setGameScreenshots = jest.fn(); 
        
        handleCaptureScreenshot(gameboardMap, initialGameScreenshots, setGameScreenshots);
    
        expect(setGameScreenshots).toHaveBeenCalledTimes(1); 
        expect(setGameScreenshots).toHaveBeenCalledWith([gameboardMap]); 
    });

    test('Validate that a screenshot of the game should not be captured when the gameboard is empry', () => {

        const gameboardMap = new Map(); 
        const initialGameScreenshots = [];
        const setGameScreenshots = jest.fn(); 
        
        handleCaptureScreenshot(gameboardMap, initialGameScreenshots, setGameScreenshots);
        
        expect(setGameScreenshots).not.toHaveBeenCalled();
    });
})