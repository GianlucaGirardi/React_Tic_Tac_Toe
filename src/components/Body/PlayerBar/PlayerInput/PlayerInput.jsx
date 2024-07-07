import { Grid, IconButton, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../../../App";
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import SaveTwoToneIcon from '@mui/icons-material/SaveTwoTone';
import { EDIT_MODE } from "../../../../constants";
import { handleColorText, toggleButtonText } from "../../Gameboard/gameboardUtils";
import '../playerBar.css';

export const PlayerInput = ({ buttonMode, setButtonMode, player, setPlayerName }) => {
    const { theme } = useContext(ThemeContext);

    const handleUserInput = (event) => {
        return setPlayerName(event.target.value);
    }

    return (
        <Grid sx={{ display: 'flex' }}>
            <TextField id="outlined-basic" label={player} variant="outlined"
                onChange={handleUserInput}
                disabled={buttonMode === EDIT_MODE ? true : false}
                sx={{
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: handleColorText(theme),
                    },
                    '& .MuiInputBase-input': {
                        color: handleColorText(theme),
                    },
                    '& .MuiInputLabel-root': {
                        color: handleColorText(theme),
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: handleColorText(theme),
                            color: handleColorText(theme)
                        },
                        '&:hover fieldset': {
                            borderColor: handleColorText(theme),
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: handleColorText(theme),
                        },
                        '&.Mui-disabled fieldset': {
                            borderColor: handleColorText(theme),
                        },

                    },
                    "& .MuiInputBase-input.Mui-disabled": {
                        WebkitTextFillColor: 'unset',
                    },
                    '& .MuiInputLabel-root.Mui-disabled': {
                        color: handleColorText(theme),
                    },
                }} />
            <Grid sx={{ maxWidth: '4.5rem', ml: '0.5rem' }}>
                <IconButton className='player-edit-button'
                    disableRipple
                    onClick={() => setButtonMode(() => toggleButtonText(buttonMode))}>
                    <Typography variant="h6" color={handleColorText(theme)} >{buttonMode}</Typography >
                    {buttonMode === EDIT_MODE
                        ? <EditTwoToneIcon fontSize="lg" sx={{ color: handleColorText(theme) }} />
                        : <SaveTwoToneIcon fontSize="lg" sx={{ color: handleColorText(theme) }} />}
                </IconButton></Grid>
        </Grid >
    );
}