import { BgPrimaryBox } from '@components/DifferentialsSection/styles';
import InstagramIcon from '@components/Icons/Instagram';
import { StyledProductSectionHeader } from '@components/ProductSection/style';
import { Box, Grid, Link, Typography } from '@mui/material';
import axios from 'axios';
import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import { InstagramSectionModel } from 'src/models/dynamic-component.model';
import { InstaFeedModel } from './instafeed.model';

export const InstagramFeed: React.FC<InstagramSectionModel> = ({
  subtitle,
  title,
}) => {
  const [instaFeed, setInstaFeed] = useState<InstaFeedModel>(
    {} as InstaFeedModel
  );

  const getInstagramFeed = async () => {
    const { data } = await axios.get<InstaFeedModel>(
      'https://graph.facebook.com/v14.0/17841434031831522/media?access_token=EAAIjv6zZBtzoBALIWbCnyBx9Ix9jrwKZCmgElK4sRXAlFAZCZBEzjUihfh3pZAhvF1ffe1ZBuNEHgA0zl4YZB66aaqqYasGrPNjRrBUqmjdFTJ8yArb6RFItEwXwnAiaFf7NKGVy3WNrGZCmGkftiA3vZC57dM8VmMeXwL4Jqqx4ZAKQZDZD&debug=all&fields=caption%2Cmedia_url%2Cmedia_type%2Cthumbnail_url&format=json&method=get&pretty=0&suppress_http_code=1&transport=cors&limit=12'
    );

    setInstaFeed(data);
  };

  useEffect(() => {
    getInstagramFeed();
  }, []);
  return (
    <BgPrimaryBox sx={{ padding: 0, paddingTop: 4 }}>
      <Grid container rowSpacing={4}>
        <StyledProductSectionHeader
          title={title}
          subtitle={subtitle}
        ></StyledProductSectionHeader>
        <Grid item sm={12}>
          {!!instaFeed?.data?.length && (
            <Grid container spacing={0.4}>
              {instaFeed.data.map((image) => (
                <Grid item key={image.id} md={2} xs={4}>
                  <NextLink
                    href="https://www.instagram.com/mah_arte_e_cor/"
                    passHref={true}
                  >
                    <Link
                      target="_blank"
                      sx={{
                        overflow: 'hidden',
                        display: 'block',
                        position: 'relative',
                        '&:hover img': {
                          transform: 'scale(1.1)',
                        },
                        '&:hover div': {
                          opacity: 1,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          aspectRatio: '2/2',
                          width: '100%',
                          objectFit: 'cover',
                          margin: 0,
                          padding: 0,
                          display: 'block',
                          transition: 'transform 0.4s ease-in',
                        }}
                        component="img"
                        alt="@mah_arte_e_cor"
                        src={
                          image.media_type === 'IMAGE'
                            ? image.media_url
                            : image.thumbnail_url
                        }
                      ></Box>
                      <Box
                        sx={{
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          background: 'rgba(0,0,0,0.2)',
                          backdropFilter: 'blur(2px)',
                          opacity: 0,
                          transition: 'opacity 0.4s',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                        component="div"
                      >
                        <Box sx={{ textAlign: 'center' }}>
                          <Typography sx={{ color: 'white' }}>
                            <InstagramIcon></InstagramIcon>
                          </Typography>
                          <Typography
                            sx={{
                              color: 'white',
                              fontWeight: 'bold',
                            }}
                          >
                            ver no instagram
                          </Typography>
                        </Box>
                      </Box>
                    </Link>
                  </NextLink>
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
      </Grid>
    </BgPrimaryBox>
  );
};
