import { createTheme } from '@mui/material/styles';
import { DARK_THEME } from './constants';

export const appTheme = createTheme({
  palette: {
    color: {
      main: 'rgb(8 126 164 )',
      dark: '#2E3440',
      darkBody: '#ECEFF4',
      darkText: 'rgb(255, 255, 255)',
    },
  },
});

export const handleBackgroundTheme = (theme) => {
  return theme === DARK_THEME ? 'body-dark-theme' : 'body-light-theme';
}