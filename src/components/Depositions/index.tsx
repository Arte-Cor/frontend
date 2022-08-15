import { CommentCarousel } from '@components/CommentCarousel';
import { Container, Grid, Typography } from '@mui/material';
import { DepositionsModel } from 'src/models/dynamic-component.model';

export const DepositionsSection: React.FC<DepositionsModel> = ({
  title,
  subtitle,
  text,
  comment,
}) => {
  return (
    <Container sx={{ padding: 4 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item md={4}>
          <Typography variant="h2">{title}</Typography>
          <Typography variant="h5" sx={{ marginBottom: 4 }}>
            {subtitle}
          </Typography>
          <Typography
            component="p"
            variant="h6"
            sx={{ fontWeight: 'normal' }}
            dangerouslySetInnerHTML={{ __html: text ?? '' }}
          ></Typography>
        </Grid>
        <Grid item md={8} sx={{ width: '100%' }}>
          <CommentCarousel comments={comment}></CommentCarousel>
        </Grid>
      </Grid>
    </Container>
  );
};
