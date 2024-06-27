import { Grid } from "@mui/material";
import { GameboardCol } from "./GameboardCol";
import '../Gameboard/gameboard.css';

export const GameboardRow = ({ rowNum }) => {

    return (
        <Grid className="game-board-row" container spacing={1}>
            <GameboardCol rowNum={rowNum} colNum={1} />
            <GameboardCol rowNum={rowNum} colNum={2} />
            <GameboardCol rowNum={rowNum} colNum={3} />
        </Grid>
    );
}