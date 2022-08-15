import { IconTypes } from "src/@types/IconType";

export type DynamicComponentModel = 
  ({__component: 'body.category-section'} & CategorySectionModel)
  | ({__component: 'body.differentials'} & DifferentialsSectionModel)
  | ({__component: 'body.depositions'} & DepositionsModel)
  | ({__component: 'body.product-list'} & ProductListModel)
  | ({__component: 'body.about'} & AboutSectionModel)
  | ({__component: 'body.slider'} & SliderModel)
  | ({__component: 'body.instagram-feed'} & InstagramSectionModel);

export interface SliderModel {
  id: number;
  image?: ImageModel[];
}
export interface CategorySectionModel {
  id: number;
  title?: string;
  subtitle?: string;
  categorias?: {
    data: CategoryModel[]
  }
}

export interface DifferentialsSectionModel {
  id: number;
  icon_text?: IconTextModel[];
}

export interface DepositionsModel {
  id: number;
  title?: string;
  subtitle?: string;
  text?: string;
  comment?: CommentModel[];
}

export interface ProductListModel {
  id: number;
  title?: string;
  subtitle?: string;
  produtos?: {
    data: ProductModel[];
  }
}

export interface AboutSectionModel {
  id: number;
  url_image?: string;
  title?: string;
  subtitle?: string;
  paragraph?: string;
}

export interface InstagramSectionModel {
  id: number;
  title?: string;
  subtitle?: string;
}

export interface CategoryModel {
  id: number;
  attributes: {
    title: string;
    subtitle: string;
    slug: string;
    poster_url: string;
  }
}

export interface ImageModel {
  id: number;
  url: string;
  title: string;
}

export interface IconTextModel {
  id: number;
  title: string;
  subtitle: string;
  icon: IconTypes;
}

export interface ProductModel {
  id: number;
  attributes: {
    title: string;
    subtitle: string;
    price: number;
    url_image: string;
    slug: string;
  }
}

export interface CommentModel {
  id: number;
  name: string;
  username: string;
  comment: string;
  url_image: string;
}

