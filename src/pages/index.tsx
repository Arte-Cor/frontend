import { DynamicRender } from '@components/DynamicRender';
import { Container } from '@mui/material';
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
