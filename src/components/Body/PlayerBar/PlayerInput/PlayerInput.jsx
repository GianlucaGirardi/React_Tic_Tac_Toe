import { Grid, IconButton, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../../../App";
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import SaveTwoToneIcon from '@mui/icons-material/SaveTwoTone';
import '../playerBar.css';

export const PlayerInput = ({ buttonMode, setButtonMode, player }) => {
    const { theme } = useContext(ThemeContext);
    const toggleButtonText = (button) => {
        return button === 'Edit' ? 'Save' : 'Edit';
    }

    return (
        <Grid >
            <TextField id="outlined-basic" label={player} variant="outlined"
                disabled={buttonMode === 'Edit' ? true : false}
                sx={{
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: `violet.${theme}`,
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: `violet.${theme}`,
                        },
                        '&:hover fieldset': {
                            borderColor: `violet.${theme}`,
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: `violet.${theme}`,
                        },
                    },
                    "& .MuiInputBase-input.Mui-disabled": {
                        WebkitTextFillColor: "#000000"
                    },
                }} />
            <IconButton className='player-edit-button'
                disableRipple onClick={() => setButtonMode(() => toggleButtonText(buttonMode))}>
                <Typography variant="h6" >{buttonMode}</Typography >
                {buttonMode === 'Edit' ? <EditTwoToneIcon fontSize="lg" /> : <SaveTwoToneIcon fontSize="lg" />}
            </IconButton>
        </Grid>
    );
}