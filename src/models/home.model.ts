import { DynamicComponentModel } from "./dynamic-component.model";

export interface HomeModel {
  data?: {
    id: number;
    attributes: {
      title: string;
      body: DynamicComponentModel[]
    }
  };
  meta: object
}