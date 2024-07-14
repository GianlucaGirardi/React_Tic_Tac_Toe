import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle'; import { Grid, Typography } from "@mui/material";
import { useContext, useState } from 'react';
import {
    DARK_THEME,
    GAME_OVER_MESSAGE,
    TIE_MESSAGE,
    TURN_PLAYER1,
    TURN_PLAYER2,
    BACKGROUND_COLOR_DARK,
    BACKGROUND_COLOR_LIGHT,
    TEXT_DARK,
    TEXT_O_LIGHT,
    NEW_GAME, RETURN
} from '../../../../constants';
import { ThemeContext, TurnContext } from '../../../../App';
import { handleColorText, handleClose } from '../gameboardUtils';

export const GameOverModal = ({ setRestart, numFreeTiles, winner, setPlayerTurnArr, setGameScreenshots }) => {
    const { theme } = useContext(ThemeContext)
    const { turn, player1Name, player2Name } = useContext(TurnContext);
    const [open, setOpen] = useState(true);

    return (
        <Grid>
            <Dialog
                open={open}
                onClose={() => handleClose(1, setPlayerTurnArr, setOpen, setRestart, setGameScreenshots)}>
                <DialogTitle id="game-over-alert"
                    sx={{ backgroundColor: theme === DARK_THEME ? BACKGROUND_COLOR_DARK : BACKGROUND_COLOR_LIGHT }}>
                    <Typography variant='h3'
                        color={theme === DARK_THEME
                            ? TEXT_DARK
                            : TEXT_O_LIGHT}>{GAME_OVER_MESSAGE}</Typography>
                </DialogTitle>
                <DialogContent sx={{ backgroundColor: theme === DARK_THEME ? BACKGROUND_COLOR_DARK : BACKGROUND_COLOR_LIGHT }}>
                    <DialogContentText id="alert-dialog-description"
                        sx={{ color: handleColorText(theme) }}>
                        {numFreeTiles === 0 && !winner
                            ? TIE_MESSAGE
                            : `Winner is ${turn === TURN_PLAYER1
                                ? `${TURN_PLAYER2} : ${player2Name}`
                                : `${TURN_PLAYER2} : ${player1Name}`
                            }`
                        }
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ backgroundColor: theme === DARK_THEME ? BACKGROUND_COLOR_DARK : BACKGROUND_COLOR_LIGHT }}>
                    <Button variant='contained' sx={{
                        backgroundColor: `color.${theme}`,
                        '&:hover': {
                            backgroundColor: `color.${theme}`
                        }
                    }}
                        onClick={() => handleClose(0, setPlayerTurnArr, setOpen, setRestart, setGameScreenshots)}
                    >
                        {NEW_GAME}
                    </Button>
                    <Button variant='text'
                        sx={{ color: handleColorText(theme) }}
                        onClick={() => handleClose(1, setPlayerTurnArr, setOpen, setRestart, setGameScreenshots)}
                        autoFocus
                    >
                        {RETURN}
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid >
    );
}