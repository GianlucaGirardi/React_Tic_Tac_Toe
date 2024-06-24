import { createTheme, getContrastRatio } from '@mui/material/styles';

const violetMain = '#720e9e';

export const appTheme = createTheme({
  palette: {
    violet: {
      main: '#720e9e',
      light: '#E6E6FA',
      dark: '#33006F',
      contrastText: getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#111',
    },
  },
});