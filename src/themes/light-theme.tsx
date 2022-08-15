import { createTheme, Palette } from '@mui/material';

const palette: Partial<Palette> = {
  primary: {
    main: '#F50000',
    light: '#ff5834',
    dark: '#b90000',
    contrastText: '#FFF',
  },
  secondary: {
    main: '#590900ff',
    light: '#590900ff',
    dark: '#590900ff',
    contrastText: '#FFF',
  },
  brandPrimary: {
    50: '#FDECEA',
  },
};

export const lightTheme = createTheme({
  palette,
  typography: {
    fontFamily: 'Open Sans',
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          color: '#333',
          borderBottom: '1px solid #DDD',
          padding: '8px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            cursor: 'not-allowed',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          cursor: 'pointer',
        },
      },
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'h2' },
          style: {
            fontWeight: 'bold',
            letterSpacing: -3,
            fontSize: 42,
            position: 'relative',
          },
        },
        {
          props: { variant: 'h3' },
          style: {
            fontWeight: 'bold',
            letterSpacing: -3,
            fontSize: 32,
            position: 'relative',
            '& span': {
              fontFamily: 'Homemade Apple',
              color: palette?.primary?.light,
              fontSize: 16,
              letterSpacing: 0,
              wordSpacing: 4,
              display: 'block',
              marginTop: '-12px',
              transform: 'rotate(-2deg)',
              marginLeft: '16px',
              marginBottom: '30px',
            },
            '&:has(> span)': {
              background: 'red',
            },
          },
        },
        {
          props: { variant: 'h5' },
          style: {
            fontWeight: 'bold',
            letterSpacing: -3,
            wordSpacing: 2,
            fontSize: 24,
          },
        },
        {
          props: { variant: 'h6' },
          style: {
            fontWeight: 600,
            letterSpacing: -2,
            wordSpacing: 2,
            fontSize: 20,
          },
        },
      ],
    },
  },
});
