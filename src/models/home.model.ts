import { DynamicComponentModel } from "./dynamic-component.model";
import { SEOModel } from "./seo.model";

export interface HomeModel {
  data?: {
    id: number;
    attributes: {
      title: string;
      seo: SEOModel;
      body: DynamicComponentModel[];
    }
  };
  meta: object
}