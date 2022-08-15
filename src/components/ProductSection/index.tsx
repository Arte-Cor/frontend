import { CategorySectionModel } from 'src/models/dynamic-component.model';
import {
  StyledProductSectionCategs,
  StyledProductSectionHeader,
} from './style';

export const ProductSectionComponent: React.FC<CategorySectionModel> = ({
  title,
  subtitle,
  categorias,
}) => {
  return (
    <>
      <StyledProductSectionHeader
        title={title}
        subtitle={subtitle}
      ></StyledProductSectionHeader>
      <StyledProductSectionCategs
        categories={categorias?.data}
      ></StyledProductSectionCategs>
    </>
  );
};
