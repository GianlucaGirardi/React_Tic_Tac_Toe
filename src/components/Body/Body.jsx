import { Grid, Paper } from "@mui/material";
import { PlayerBar } from "./PlayerBar/PlayerBar";
import './body.css';

export const Body = () => {
    return (
        <Grid rowSpacing={1} >
            <Paper className="body"
                elevation={2}
                square  >
                <PlayerBar />
            </Paper>
        </Grid>
    );
}