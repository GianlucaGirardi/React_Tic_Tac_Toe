import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle'; import { Grid, Typography } from "@mui/material";
import { useContext, useState } from 'react';
import { DARK_THEME, DARK_THEME_BODY, GAME_OVER_MESSAGE, TIE_MESSAGE } from '../../../../constants';
import { ThemeContext, TurnContext } from '../../../../App';

export const GameOverModal = ({ setRestart, numFreeTiles, winner }) => {
    const { theme } = useContext(ThemeContext)
    const { turn, player1Name, player2Name } = useContext(TurnContext);
    const [open, setOpen] = useState(true);

    const handleClose = (option) => {
        if (option === 0) {
            setRestart(true);
        }
        setOpen(false);
    };

    return (
        <Grid>
            <Dialog
                open={open}
                onClose={handleClose}>
                <DialogTitle id="game-over-alert"
                    sx={{ backgroundColor: theme === DARK_THEME ? `color.${DARK_THEME_BODY}` : '' }}>
                    <Typography variant='h3'>{GAME_OVER_MESSAGE}</Typography>
                </DialogTitle>
                <DialogContent sx={{ backgroundColor: theme === DARK_THEME ? `color.${DARK_THEME_BODY}` : '' }}>
                    <DialogContentText id="alert-dialog-description"
                        sx={{ color: `color.${theme}` }}>
                        {numFreeTiles === 0 && !winner ? TIE_MESSAGE : `Winner is ${turn === 'X' ? `O : ${player2Name}` : `X : ${player1Name}`}`}
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ backgroundColor: theme === DARK_THEME ? `color.${DARK_THEME_BODY}` : '' }}>
                    <Button variant='contained' sx={{
                        backgroundColor: `color.${theme}`,
                        '&:hover': {
                            backgroundColor: `color.${theme}`
                        }
                    }}
                        onClick={() => handleClose(0)}>
                        New Game
                    </Button>
                    <Button variant='text'
                        sx={{ color: `color.${theme}` }}
                        onClick={() => handleClose(1)}
                        autoFocus>
                        Return
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid >
    );
}