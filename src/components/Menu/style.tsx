import { Link, styled, TextField } from '@mui/material';

export const MenuItem = styled(Link)(({ theme }) => ({
  padding: 8,
  color: theme.palette.text.primary,
  textDecoration: 'none',
  fontWeight: 'bold',
  letterSpacing: -1.4,
}));

export const SearchInput = styled(TextField)(({ theme }) => ({
  background: '#F2F2F2',
  border: 0,
  outline: 0,
  borderRadius: 8,
  '& .MuiInputBase-root': {
    gap: 4,
  },
  '& fieldset': {
    borderWidth: 0,
  },
  '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderWidth: 0,
    borderColor: 'none',
  },
}));
