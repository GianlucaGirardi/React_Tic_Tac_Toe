import { Grid } from "@mui/material";
import { useState, useContext } from "react";
import { EDIT_MODE, PLAYER1, PLAYER2 } from '../../../constants';
import { PlayerInput } from './PlayerInput/PlayerInput';
import { TurnContext } from "../../../App";
import './playerBar.css';

export const PlayerBar = () => {
    const [buttonLeftMode, setButtonLeftMode] = useState(EDIT_MODE);
    const [buttonRightMode, setButtonRightMode] = useState(EDIT_MODE);
    const { player1Name, setPlayer1Name, player2Name, setPlayer2Name } = useContext(TurnContext);

    return (
        <Grid className="player-bar-container"  >
            <PlayerInput buttonMode={buttonLeftMode} setButtonMode={setButtonLeftMode} player={PLAYER1} playerName={player1Name} setPlayerName={setPlayer1Name} />
            <PlayerInput buttonMode={buttonRightMode} setButtonMode={setButtonRightMode} player={PLAYER2} playerName={player2Name} setPlayerName={setPlayer2Name} />
        </Grid>
    );
}