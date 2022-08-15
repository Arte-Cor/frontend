import {
  Box,
  BoxProps,
  Link,
  styled,
  Typography,
  TypographyProps,
} from '@mui/material';

export const StyledProductCategLink = styled(Link)({
  position: 'relative',
  borderRadius: 4,
  aspectRatio: '2/2',
  display: 'block',
});

export const StyledProductCategImage = styled((props: BoxProps<'img'>) => (
  <Box
    component="img"
    {...props}
    sx={{
      height: '100%',
      width: '100%',
      objectFit: 'cover',
      borderRadius: 4,
      transition: 'opacity 0.2s',
      '&:hover': {
        opacity: 0.7,
      },
    }}
  ></Box>
))();

export const StyledProductCategFooter = styled(Box)({
  position: 'absolute',
  right: 0,
  left: 0,
  bottom: 0,
  padding: 3,
  marginBottom: 8,
  textAlign: 'center',
});

export const StyledProductCategTitle = styled(
  (props: Omit<TypographyProps, 'variant'>) => (
    <Typography variant="h5" {...props}></Typography>
  )
)({
  margin: 0,
  padding: 0,
  color: 'white',
  textShadow: '0px 0px 10px rgba(0,0,0,1)',
});
