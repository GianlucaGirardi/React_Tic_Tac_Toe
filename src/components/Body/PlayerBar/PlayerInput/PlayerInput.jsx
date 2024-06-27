import { Grid, IconButton, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../../../App";
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import SaveTwoToneIcon from '@mui/icons-material/SaveTwoTone';
import { DARK_THEME, DEFAULT_THEME, EDIT_MODE, SAVE_MODE } from "../../../../constants";
import '../playerBar.css';

export const PlayerInput = ({ buttonMode, setButtonMode, player }) => {
    const { theme } = useContext(ThemeContext);
    const toggleButtonText = (button) => {
        return button === EDIT_MODE ? SAVE_MODE : EDIT_MODE;
    }

    return (
        <Grid >
            <TextField id="outlined-basic" label={player} variant="outlined"
                disabled={buttonMode === EDIT_MODE ? true : false}
                sx={{
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: `color.${theme}`,
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: `color.${theme}`,
                        },
                        '&:hover fieldset': {
                            borderColor: `color.${theme}`,
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: `color.${theme}`,
                        },
                        '&.Mui-disabled fieldset': {
                            borderColor: `color.${theme}`,
                        },
                    },
                    "& .MuiInputBase-input.Mui-disabled": {
                        WebkitTextFillColor: "#000000",

                    },
                }} />
            <IconButton className='player-edit-button'
                disableRipple onClick={() => setButtonMode(() => toggleButtonText(buttonMode))}>
                <Typography variant="h6" color={theme === DARK_THEME ? `color.${DARK_THEME}` : `color.${DEFAULT_THEME}`} >{buttonMode}</Typography >
                {buttonMode === EDIT_MODE ? <EditTwoToneIcon fontSize="lg" /> : <SaveTwoToneIcon fontSize="lg" />}
            </IconButton>
        </Grid >
    );
}