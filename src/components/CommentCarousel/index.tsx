import { Box, Grid, Typography } from '@mui/material';
import { CommentModel } from 'src/models/dynamic-component.model';

export const CommentCarousel: React.FC<{ comments?: CommentModel[] }> = ({
  comments,
}) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        overflow: 'hidden',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, 400px)',
        gridAutoColumns: '400px',
        gridTemplateRows: '1fr 1fr',
        gridAutoFlow: 'column',
      }}
    >
      {!!comments?.length &&
        comments
          .filter(
            ({ name, comment, username, url_image }) =>
              !!name && !!comment && !!username && !!url_image
          )
          .map((comment) => (
            <Grid key={comment.id} item>
              <Box sx={{ padding: 2, background: '#EEE', borderRadius: 4 }}>
                <Grid container spacing={2} sx={{ marginBottom: 2 }}>
                  <Grid item>
                    <Box
                      component="img"
                      src={comment.url_image}
                      sx={{ width: 40, borderRadius: '40px' }}
                    ></Box>
                  </Grid>
                  <Grid item>
                    <Typography>{comment.name}</Typography>
                    <Typography variant="body2">{comment.username}</Typography>
                  </Grid>
                </Grid>
                <Typography>{comment.comment}</Typography>
              </Box>
            </Grid>
          ))}
    </Grid>
  );
};
