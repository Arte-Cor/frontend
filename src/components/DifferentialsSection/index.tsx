import { Container, Grid, Typography } from '@mui/material';
import { DifferentialsSectionModel } from 'src/models/dynamic-component.model';
import { BgPrimaryBox, PrimaryIcon } from './styles';

export const DifferentialsSection: React.FC<DifferentialsSectionModel> = ({
  icon_text,
}) => {
  return (
    <BgPrimaryBox>
      <Container>
        <Grid container spacing={4}>
          {!!icon_text?.length &&
            icon_text.map((iconText) => (
              <Grid
                item
                md={3}
                xs={6}
                key={iconText.id}
                sx={{ textAlign: 'center' }}
              >
                <PrimaryIcon icon={iconText.icon}></PrimaryIcon>
                <Typography variant="h6">{iconText.title}</Typography>
                <Typography variant="body2">{iconText.subtitle}</Typography>
              </Grid>
            ))}
        </Grid>
      </Container>
    </BgPrimaryBox>
  );
};
