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
  <BgPrimaryBox>
    <Container>
      <Grid container spacing={4}>
        <StyledProductSectionHeader
          title={title}
          subtitle={subtitle}
        ></StyledProductSectionHeader>
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
              <Grid key={product.id} item md={3}>
                <ProductCard product={product}></ProductCard>
              </Grid>
            ))}
      </Grid>
    </Container>
  </BgPrimaryBox>
);
