import { Grid } from "@mui/material";
import { useState } from "react";
import '../../../constants';
import { PlayerInput } from './PlayerInput/PlayerInput';
import './playerBar.css';

export const PlayerBar = () => {
    const [buttonLeftMode, setButtonLeftMode] = useState('Edit');
    const [buttonRightMode, setButtonRightMode] = useState('Edit');

    return (
        <Grid className="player-bar-container" >
            <PlayerInput buttonMode={buttonLeftMode} setButtonMode={setButtonLeftMode} player='Player 1 (X)' />
            <PlayerInput buttonMode={buttonRightMode} setButtonMode={setButtonRightMode} player='Player 2 (O)' />
        </Grid>
    );
}