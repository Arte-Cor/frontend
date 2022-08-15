import { Icon } from '@components/Icon';
import { Box, styled } from '@mui/material';

export const BgPrimaryBox = styled(Box)(({ theme }) => ({
  background: theme.palette.brandPrimary?.[50],
  padding: '40px 0px',
}));

export const PrimaryIcon = styled(Icon)(({ theme }) => ({
  color: theme.palette.primary.main,
}));
