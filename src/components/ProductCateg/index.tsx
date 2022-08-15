import Link from 'next/link';
import { CategoryModel } from 'src/models/dynamic-component.model';
import {
  StyledProductCategImage,
  StyledProductCategLink,
  StyledProductCategFooter,
  StyledProductCategTitle,
} from './style';

export interface ProductCategProps {
  id: number;
  image: {
    url: string;
    title: string;
  };
  title: string;
}

export const ProductCategComponent: React.FC<CategoryModel> = ({
  attributes,
}) => {
  return (
    <Link href={attributes?.slug ?? '/'}>
      <StyledProductCategLink>
        <StyledProductCategImage
          src={attributes?.poster_url ?? ''}
          alt={attributes?.title ?? ''}
        ></StyledProductCategImage>
        <StyledProductCategFooter>
          <StyledProductCategTitle>{attributes?.title}</StyledProductCategTitle>
        </StyledProductCategFooter>
      </StyledProductCategLink>
    </Link>
  );
};
