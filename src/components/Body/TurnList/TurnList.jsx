import { Grid, Typography } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useContext } from "react";
import { DARK_THEME, BACKGROUND_COLOR_DARK, BACKGROUND_COLOR_LIGHT } from "../../../constants";
import { handleColorText } from "../Gameboard/gameboardUtils";
import { PrevBoard } from "./PrevBoard/PrevBoard";
import { TurnContext } from "../../../App";
import './turnList.css';

export const TurnList = ({ playerTurnArr, gameScreenshots, theme }) => {
    var count = 0;
    const { player1Name, player2Name } = useContext(TurnContext);
    return (
        <Grid sx={{ p: '2rem', pt: 0, justifyContent: 'center' }}>
            {playerTurnArr.map(turn => {
                count += 1;
                return (
                    <Accordion data-testid={count} key={count} sx={{ backgroundColor: theme === DARK_THEME ? BACKGROUND_COLOR_DARK : BACKGROUND_COLOR_LIGHT }}>
                        <AccordionSummary sx={{ backgroundColor: theme === DARK_THEME ? BACKGROUND_COLOR_DARK : BACKGROUND_COLOR_LIGHT }}
                            expandIcon={<ExpandMoreIcon sx={{ color: handleColorText(theme) }} />}
                        >
                            <Typography color={handleColorText(theme)}>
                                {'Turn ' + count + ': ' +
                                    (turn[1] === 'X'
                                        ? player1Name
                                        : player2Name)
                                    + ' ' + turn[1] + '  => ' + 'Row: ' + turn[0].substring(0, 1) + ' Column: ' + turn[0].substring(1)}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid sx={{ borderTop: 2, pt: 2, color: handleColorText(theme) }}>
                                <Typography variant="p" fontSize={24} p={'4rem'} >{`Snapshot ${count}`}</Typography>
                            </Grid>
                            <Grid className="css-152lgj-MuiAccordionDetails-root">
                                <PrevBoard gameScreenshot={gameScreenshots[count - 1]}
                                    theme={theme}
                                />
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </Grid >
    );
}