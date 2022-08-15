import { ProductCategComponent } from '@components/ProductCateg';
import { Container, Grid, styled, Typography } from '@mui/material';
import { CategoryModel } from 'src/models/dynamic-component.model';

interface StyledProductSectionHeaderProps {
  title?: string | null;
  subtitle?: string | null;
}

export const StyledProductSectionHeader = styled(
  ({ title, subtitle }: StyledProductSectionHeaderProps) => (
    <Container sx={{ padding: 4, paddingBottom: 0, textAlign: 'center' }}>
      <Typography variant="h3">{title}</Typography>
      <Typography>{subtitle}</Typography>
    </Container>
  )
)({});

interface StyledProductSectionCategsProps {
  categories?: CategoryModel[] | null;
}

export const StyledProductSectionCategs = styled(
  ({ categories }: StyledProductSectionCategsProps) => (
    <Container sx={{ padding: 4 }}>
      <Grid
        container
        sx={{ justifyContent: { xs: 'start', md: 'center' } }}
        spacing={2}
      >
        {!!categories?.length &&
          categories.map((category) => (
            <Grid item md={3} xs={6} key={category.id}>
              <ProductCategComponent {...category}></ProductCategComponent>
            </Grid>
          ))}
      </Grid>
    </Container>
  )
)({});
