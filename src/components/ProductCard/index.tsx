import { Box, Typography } from '@mui/material';

interface ProductCardProps {
  src: string;
  title: string;
  subtitle: string;
  price: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  src,
  title,
  subtitle,
  price,
}) => {
  return (
    <Box>
      <Box sx={{ position: 'relative' }}>
        <Box
          component="img"
          src={src}
          title={title}
          sx={{
            aspectRatio: '2/2',
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            borderRadius: 2,
          }}
        ></Box>
        <Typography
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            backgroundColor: 'rgba(0,0,0,0.1)',
            backdropFilter: 'blur(10px)',
            color: 'white',
            padding: '8px 12px',
            borderRadius: 2,
            fontWeight: 600,
          }}
          variant="body2"
        >
          pintado a mão
        </Typography>
      </Box>
      <Typography variant="h6">{title}</Typography>
      <Typography>{subtitle}</Typography>
      <Typography
        sx={{
          fontSize: 26,
          fontWeight: 900,
          textAlign: 'center',
        }}
      >
        {new Intl.NumberFormat('pt-br', {
          style: 'currency',
          currency: 'BRL',
        }).format(price)}
      </Typography>
    </Box>
  );
};
