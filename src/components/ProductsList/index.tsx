import { BgPrimaryBox } from '@components/DifferentialsSection/styles';
import { ProductCard } from '@components/ProductCard';
import { StyledProductSectionHeader } from '@components/ProductSection/style';
import { Container, Grid } from '@mui/material';
import { ProductListModel } from 'src/models/dynamic-component.model';

export const ProductList: React.FC<ProductListModel> = ({
  title,
  subtitle,
  produtos,
}) => (
  <BgPrimaryBox sx={{ padding: 0 }}>
    <StyledProductSectionHeader
      title={title}
      subtitle={subtitle}
    ></StyledProductSectionHeader>
    <Container sx={{ padding: 4 }}>
      <Grid container>
        {!!produtos?.data.length &&
          produtos.data
            .filter(
              (product) =>
                !!product.attributes.title &&
                !!product.attributes.subtitle &&
                !!product.attributes.url_image &&
                !!product.attributes.price
            )
            .map((product) => (
              <Grid key={product.id} item md={3} xs={6}>
                <ProductCard product={product}></ProductCard>
              </Grid>
            ))}
      </Grid>
    </Container>
  </BgPrimaryBox>
);
