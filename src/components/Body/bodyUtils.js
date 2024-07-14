export const handleCaptureScreenshot = (gameboardMap, gameScreenshots, setGameScreenshots) => {
    const gameboardMoment = new Map();
    gameboardMap.forEach((value, key) => {
        gameboardMoment.set(key, value);
    });
    if (gameboardMoment.size > 0) {
        setGameScreenshots([...gameScreenshots, gameboardMoment]);
    }
}