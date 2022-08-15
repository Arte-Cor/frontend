import { AboutSection } from '@components/AboutSection';
import { DepositionsSection } from '@components/Depositions';
import { DifferentialsSection } from '@components/DifferentialsSection';
import { ProductSectionComponent } from '@components/ProductSection';
import { ProductList } from '@components/ProductsList';
import React from 'react';
import { DynamicComponentModel } from 'src/models/dynamic-component.model';

const Components = {
  'body.category-section': ProductSectionComponent,
  'body.differentials': DifferentialsSection,
  'body.depositions': DepositionsSection,
  'body.product-list': ProductList,
  'body.about': AboutSection,
};

export const DynamicRender: React.FC<DynamicComponentModel> = ({
  __component,
  ...props
}) => {
  if (Components[__component])
    return React.createElement(Components[__component], { ...props });
  return <></>;
};
