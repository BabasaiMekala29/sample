import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#3f51b5',
        },
        secondary: {
            main: '#f50057',
        },
        tertiary: {
            main: '#B21589'
        },
        dark: {
            main: '#16151C'
        },
        light: {
            main: '#D9E1E1'
        },
        grey: {
            main: '#A2A1A8'
        },
        white: {
            main: '#FFFFFF'
        },
        text: {
            primary: '#212121',
            secondary: '#757575',
            disabled: '#BDBDBD',
            hint: '#9E9E9E',
        },
        background: {
            default: '#FFFFFF',
            paper: '#F5F5F5',
            appBar: '#f1f0f5',
            hover: '#FAFAFA',
        },
        divider: '#E0E0E0',
    },
    typography: {
        fontFamily: 'Lexend',
        fontWeightLight: 200,
        fontWeightRegular: 300,
        fontWeightMedium: 500,
        fontWeightBold: 600,
    }
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#BB86FC',
        },
        secondary: {
            main: '#03DAC6',
        },
        tertiary: {
            main: '#B21589'
        },
        dark: {
            main: '#16151C'
        },
        light: {
            main: '#D9E1E1'
        },
        grey: {
            main: '#A2A1A8'
        },
        white: {
            main: '#FFFFFF'
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#B0BEC5',
            disabled: '#616161',
            hint: '#757575',
        },
        background: {
            default: '#121212',
            paper: '#1E1E1E',
            appBar: 'rgba(162, 161, 168, 0.05)',
            hover: '#2C2C2C',
        },
        divider: '#424242',
    },
    typography: {
        fontFamily: 'Lexend',
        fontWeightLight: 200,
        fontWeightRegular: 300,
        fontWeightMedium: 500,
        fontWeightBold: 600,
    }
});

export { lightTheme, darkTheme };
