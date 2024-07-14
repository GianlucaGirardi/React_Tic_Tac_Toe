import { Grid } from "@mui/material";
import './prevBoard.css';
import { placeScreenShot, handleScreenshotColor } from "./prevBoardUtils";

export const PrevBoard = ({ gameScreenshot, theme }) => {

    return (
        <Grid container className="container" >
            <Grid item id='1' className='row'>
                <Grid item data-testid='one-one' className="col" sx={{ color: handleScreenshotColor(theme, gameScreenshot, '11') }} >
                    {placeScreenShot(gameScreenshot, '11')}
                </Grid>
                <Grid item id='21' className="col" sx={{ color: handleScreenshotColor(theme, gameScreenshot, '21') }} >
                    {placeScreenShot(gameScreenshot, '21')}
                </Grid>
                <Grid item id='31' className="col" sx={{ color: handleScreenshotColor(theme, gameScreenshot, '31') }}>
                    {placeScreenShot(gameScreenshot, '31')}
                </Grid>
            </Grid >
            <Grid item id='2' className="row">
                <Grid item id='12' className="col" sx={{ color: handleScreenshotColor(theme, gameScreenshot, '12') }} >
                    {placeScreenShot(gameScreenshot, '12')}
                </Grid>
                <Grid item id='22' className="col" sx={{ color: handleScreenshotColor(theme, gameScreenshot, '22') }} >
                    {placeScreenShot(gameScreenshot, '22')}
                </Grid>
                <Grid item id='32' className="col" sx={{ color: handleScreenshotColor(theme, gameScreenshot, '32') }} >
                    {placeScreenShot(gameScreenshot, '32')}
                </Grid>
            </Grid>
            <Grid item id='3' className="row">
                <Grid item id='13' className="col" sx={{ color: handleScreenshotColor(theme, gameScreenshot, '13') }} >
                    {placeScreenShot(gameScreenshot, '13')}
                </Grid>
                <Grid item id='23' className="col" sx={{ color: handleScreenshotColor(theme, gameScreenshot, '23') }} >
                    {placeScreenShot(gameScreenshot, '23')}
                </Grid>
                <Grid item id='33' className="col" sx={{ color: handleScreenshotColor(theme, gameScreenshot, '33') }} >
                    {placeScreenShot(gameScreenshot, '33')}
                </Grid>
            </Grid>
        </Grid>
    );
}