import { DARK_THEME } from "../../../../constants";

export const placeScreenShot = (gameScreenshot, id) => {
    return gameScreenshot?.has(id) ? gameScreenshot.get(id) : '';
}

export const handleScreenshotColor = (theme, gameScreenshot, id) => {
    return theme === DARK_THEME
        ? 'rgb(255, 255, 255)'
        : placeScreenShot(gameScreenshot, id) === 'X'
            ? 'rgb(8 126 164 )'
            : '#2E3440'
}