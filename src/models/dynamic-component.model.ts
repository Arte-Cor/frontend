import { IconTypes } from "src/@types/IconType";

export type DynamicComponentModel = ({__component: 'body.category-section'} & CategorySectionModel) | ({__component: 'body.differentials'} & DifferentialsSectionModel) | ({__component: 'body.depositions'} & DepositionsModel);

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

export interface CategoryModel {
  id: number;
  attributes: {
    title: string;
    subtitle: string;
    slug: string;
    poster_url: string;
  }
}

export interface IconTextModel {
  id: number;
  title: string;
  subtitle: string;
  icon: IconTypes;
}

export interface CommentModel {
  id: number;
  name: string;
  username: string;
  comment: string;
  url_image: string;
}

