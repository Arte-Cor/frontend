import { DynamicRender } from '@components/DynamicRender';
import { SeoComponent } from '@components/Seo';
import { Container } from '@mui/material';
import type { GetStaticProps, NextPage } from 'next';
import { HomeModel } from 'src/models/home.model';
import { apiService } from 'src/service/api-service';

const Home: NextPage<HomeModel> = ({ data }) => {
  return (
    <>
      <SeoComponent {...data?.attributes.seo}></SeoComponent>
      <Container sx={{ padding: 4 }}>Exemplo</Container>
      {!!data?.attributes.body.length &&
        data.attributes.body.map((component) => (
          <DynamicRender
            key={`${component.id}${component.__component}`}
            {...component}
          ></DynamicRender>
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
