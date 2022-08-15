import MagnifierIcon from '@components/Icons/Magnifier';
import * as M from '@mui/material';
import { MenuItem, SearchInput } from './style';

export const Menu: React.FC = () => {
  return (
    <M.AppBar position="sticky" elevation={0} sx={{ top: 0 }}>
      <M.Container>
        <M.Toolbar disableGutters sx={{ gap: 6 }}>
          <M.Box
            component="img"
            src="./logo.svg"
            alt="ArteCor"
            sx={{ height: 40 }}
          ></M.Box>
          <M.Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 3,
            }}
          >
            <MenuItem>produtos</MenuItem>
            <MenuItem>pq a ArteCor?</MenuItem>
            <MenuItem>dicas</MenuItem>
          </M.Box>
          <SearchInput
            sx={{
              display: { xs: 'none', md: 'flex' },
            }}
            placeholder="Pesquisar"
            InputProps={{
              startAdornment: (
                <M.InputAdornment position="start">
                  <MagnifierIcon height={16} width={16} />
                </M.InputAdornment>
              ),
            }}
          ></SearchInput>
        </M.Toolbar>
      </M.Container>
    </M.AppBar>
  );
};
