import { Grid, Link, IconButton } from "@mui/material";
import { handleBackgroundTheme } from "../../appUtils";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './footer.css'

export const Footer = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <Grid container
            className={`container ${handleBackgroundTheme(theme)}`}>
            <IconButton fontsize='' href="https://www.linkedin.com/in/girardi-gianluca/"><LinkedInIcon sx={{ color: 'white' }} /></IconButton>
            <Link sx={{ color: 'rgb(255, 255, 255)' }} href="https://www.linkedin.com/in/girardi-gianluca/" underline="hover">
                {'Linkedin.com/in/girardi-gianluca'}
            </Link>
            <IconButton fontsize='' href="https://www.linkedin.com/in/girardi-gianluca/"><GitHubIcon sx={{ color: 'white' }} /></IconButton>
            <Link sx={{ color: 'rgb(255, 255, 255)' }} href="https://github.com/GianlucaGirardi" underline="hover">
                {'github.com/GianlucaGirardi'}
            </Link>
        </Grid>
    );
}