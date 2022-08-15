import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { ProductModel } from 'src/models/dynamic-component.model';

export const ProductCard: React.FC<{ product: ProductModel }> = ({
  product,
}) => {
  return (
    <Link href={product.attributes.slug}>
      <Box
        sx={{
          borderRadius: 2,
          border: '1px solid #EEE',
          padding: 1,
          background: 'white',
          textAlign: 'center',
        }}
      >
        <Box
          component="img"
          src={product.attributes.url_image}
          sx={{
            aspectRatio: '1/1',
            display: 'block',
            width: '100%',
            objectFit: 'cover',
            marginBottom: 2,
          }}
        ></Box>
        <Typography variant="body2">{product.attributes.title}</Typography>
        <Typography
          variant="button"
          sx={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'K2D' }}
        >
          {new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL',
          }).format(product.attributes.price)}
        </Typography>
      </Box>
    </Link>
  );
};
