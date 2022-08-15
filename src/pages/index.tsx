import { BgPrimaryBox } from '@components/DifferentialsSection/styles';
import { DynamicRender } from '@components/DynamicRender';
import { StyledProductSectionHeader } from '@components/ProductSection/style';
import { Box, Container, Grid, Typography } from '@mui/material';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { HomeModel } from 'src/models/home.model';
import { apiService } from 'src/service/api-service';

const Home: NextPage<HomeModel> = ({ data }) => {
  return (
    <>
      <Head>
        <title>{data?.attributes.title}</title>
      </Head>
      <Container sx={{ padding: 4 }}>Exemplo</Container>
      {!!data?.attributes.body.length &&
        data.attributes.body.map((component) => (
          <DynamicRender key={component.id} {...component}></DynamicRender>
        ))}
      <BgPrimaryBox>
        <Container>
          <Grid container spacing={4}>
            <StyledProductSectionHeader
              title="os queridinhos"
              subtitle="Nossos clientes adoram"
            ></StyledProductSectionHeader>
            <Grid item md={3}>
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
                  src="https://www.decorfacil.com/wp-content/uploads/2018/09/20180913tapete-de-croche-oval-10.jpg"
                  sx={{
                    aspectRatio: '1/1',
                    display: 'block',
                    width: '100%',
                    objectFit: 'cover',
                    marginBottom: 2,
                  }}
                ></Box>
                <Typography variant="body2">Tapete oval</Typography>
                <Typography
                  variant="button"
                  sx={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'K2D' }}
                >
                  R$249,90
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </BgPrimaryBox>
      <Container sx={{ padding: 4 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item md={4}>
            <Typography variant="h2">fuxicando...</Typography>
            <Typography variant="h5" sx={{ marginBottom: 4 }}>
              O que nossos clientes estão falando de nós?
            </Typography>

            <Typography
              component="p"
              variant="h6"
              sx={{ fontWeight: 'normal' }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              obcaecati provident illum exercitationem quidem consectetur sed
              quia incidunt, rem molestiae quis excepturi.
            </Typography>
          </Grid>
          <Grid item md={8} sx={{ width: '100%' }}>
            <Grid
              container
              spacing={2}
              sx={{
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gridAutoColumns: 'minmax(300px, 1fr)',
                gridTemplateRows: '1fr 1fr',
                gridAutoFlow: 'column',
              }}
            >
              <Grid item>
                <Box sx={{ padding: 2, background: '#EEE', borderRadius: 4 }}>
                  <Grid container spacing={2} sx={{ marginBottom: 2 }}>
                    <Grid item>
                      <Box
                        component="img"
                        src="https://ih1.redbubble.net/image.1046392278.3346/aps,504x498,small,transparent-pad,600x600,f8f8f8.jpg"
                        sx={{ width: 40, borderRadius: '40px' }}
                      ></Box>
                    </Grid>
                    <Grid item>
                      <Typography>Alexandra</Typography>
                      <Typography variant="body2">@alexandra</Typography>
                    </Grid>
                  </Grid>
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque dolores commodi, saepe ipsa illo quam ex officiis ea
                    vitae labore magni possimus deleniti sed suscipit sunt
                    iusto.
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box sx={{ padding: 2, background: '#EEE', borderRadius: 4 }}>
                  <Grid container spacing={2} sx={{ marginBottom: 2 }}>
                    <Grid item>
                      <Box
                        component="img"
                        src="https://ih1.redbubble.net/image.1046392278.3346/aps,504x498,small,transparent-pad,600x600,f8f8f8.jpg"
                        sx={{ width: 40, borderRadius: '40px' }}
                      ></Box>
                    </Grid>
                    <Grid item>
                      <Typography>Alexandra</Typography>
                      <Typography variant="body2">@alexandra</Typography>
                    </Grid>
                  </Grid>
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque dolores commodi, saepe ipsa illo quam ex officiis ea
                    vitae labore magni possimus deleniti sed suscipit sunt
                    iusto.
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box sx={{ padding: 2, background: '#EEE', borderRadius: 4 }}>
                  <Grid container spacing={2} sx={{ marginBottom: 2 }}>
                    <Grid item>
                      <Box
                        component="img"
                        src="https://ih1.redbubble.net/image.1046392278.3346/aps,504x498,small,transparent-pad,600x600,f8f8f8.jpg"
                        sx={{ width: 40, borderRadius: '40px' }}
                      ></Box>
                    </Grid>
                    <Grid item>
                      <Typography>Alexandra</Typography>
                      <Typography variant="body2">@alexandra</Typography>
                    </Grid>
                  </Grid>
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque dolores commodi, saepe ipsa illo quam ex officiis ea
                    vitae labore magni possimus deleniti sed suscipit sunt
                    iusto.
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box sx={{ padding: 2, background: '#EEE', borderRadius: 4 }}>
                  <Grid container spacing={2} sx={{ marginBottom: 2 }}>
                    <Grid item>
                      <Box
                        component="img"
                        src="https://ih1.redbubble.net/image.1046392278.3346/aps,504x498,small,transparent-pad,600x600,f8f8f8.jpg"
                        sx={{ width: 40, borderRadius: '40px' }}
                      ></Box>
                    </Grid>
                    <Grid item>
                      <Typography>Alexandra</Typography>
                      <Typography variant="body2">@alexandra</Typography>
                    </Grid>
                  </Grid>
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque dolores commodi, saepe ipsa illo quam ex officiis ea
                    vitae labore magni possimus deleniti sed suscipit sunt
                    iusto.
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box sx={{ padding: 2, background: '#EEE', borderRadius: 4 }}>
                  <Grid container spacing={2} sx={{ marginBottom: 2 }}>
                    <Grid item>
                      <Box
                        component="img"
                        src="https://ih1.redbubble.net/image.1046392278.3346/aps,504x498,small,transparent-pad,600x600,f8f8f8.jpg"
                        sx={{ width: 40, borderRadius: '40px' }}
                      ></Box>
                    </Grid>
                    <Grid item>
                      <Typography>Alexandra</Typography>
                      <Typography variant="body2">@alexandra</Typography>
                    </Grid>
                  </Grid>
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque dolores commodi, saepe ipsa illo quam ex officiis ea
                    vitae labore magni possimus deleniti sed suscipit sunt
                    iusto.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ padding: 4 }}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item md={4}>
            <Box
              component="img"
              src="./maria-sampaio.jpg"
              sx={{ width: '100%', borderRadius: 2 }}
            ></Box>
          </Grid>
          <Grid item md={6}>
            <Typography variant="h3">
              ArteCor <span>by Maria Sampaio</span>
            </Typography>
            <Typography
              component="p"
              variant="h6"
              sx={{ paddingLeft: { md: 10 }, fontWeight: 'normal' }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              obcaecati provident illum exercitationem quidem consectetur sed
              quia incidunt, rem molestiae quis excepturi. Omnis laboriosam
              adipisci quas nobis aut est atque. Omnis laboriosam adipisci quas
              nobis aut est atque.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  let response = {} as HomeModel;
  try {
    const { data } = await apiService.get<HomeModel>('home');
    response = data;
  } catch (err) {}

  return {
    props: response,
    revalidate: 60,
  };
};
