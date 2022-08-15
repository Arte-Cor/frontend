import { Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { SliderModel } from 'src/models/dynamic-component.model';

export const Slider: React.FC<SliderModel> = ({ image }) => {
  return !!image?.length ? (
    <Carousel indicators={false}>
      {!!image?.length &&
        image.map((img) => (
          <Box
            key={img.id}
            component="img"
            src={img.url}
            alt={img.title}
            sx={{ width: '100%', display: 'block' }}
          ></Box>
        ))}
    </Carousel>
  ) : (
    <></>
  );
};
