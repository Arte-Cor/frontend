import '@mui/material/styles';

declare module '@mui/material' {
  interface Palette {
    brandPrimary?: {50: string};
  }
  interface PaletteOptions {
    brandPrimary?: {50: string};
  }
}