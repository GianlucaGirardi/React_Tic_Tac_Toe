import { Grid } from "@mui/material";
import { useState } from "react";
import { EDIT_MODE, PLAYER1, PLAYER2 } from '../../../constants';
import { PlayerInput } from './PlayerInput/PlayerInput';
import './playerBar.css';

export const PlayerBar = () => {
    const [buttonLeftMode, setButtonLeftMode] = useState(EDIT_MODE);
    const [buttonRightMode, setButtonRightMode] = useState(EDIT_MODE);

    return (
        <Grid className="player-bar-container"  >
            <PlayerInput buttonMode={buttonLeftMode} setButtonMode={setButtonLeftMode} player={PLAYER1} />
            <PlayerInput buttonMode={buttonRightMode} setButtonMode={setButtonRightMode} player={PLAYER2} />
        </Grid>
    );
}