import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { AboutSectionModel } from 'src/models/dynamic-component.model';

export const AboutSection: React.FC<AboutSectionModel> = ({
  title,
  subtitle,
  paragraph,
  url_image,
}) => {
  return (
    <Container sx={{ padding: 4 }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item md={4}>
          {!!url_image && (
            <Box
              component="img"
              src={url_image ?? ''}
              sx={{ width: '100%', borderRadius: 2 }}
            ></Box>
          )}
        </Grid>
        <Grid item md={6}>
          {!!title && !!subtitle && (
            <Typography variant="h3">
              {title ?? ''} <span>{subtitle ?? ''}</span>
            </Typography>
          )}
          {!!paragraph && (
            <Typography
              component="div"
              variant="h6"
              sx={{ paddingLeft: { md: 10 }, fontWeight: 'normal' }}
              dangerouslySetInnerHTML={{ __html: paragraph }}
            ></Typography>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};
