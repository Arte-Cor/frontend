import { DepositionsSection } from '@components/Depositions';
import { DifferentialsSection } from '@components/DifferentialsSection';
import { ProductSectionComponent } from '@components/ProductSection';
import React from 'react';
import { DynamicComponentModel } from 'src/models/dynamic-component.model';

const Components = {
  'body.category-section': ProductSectionComponent,
  'body.differentials': DifferentialsSection,
  'body.depositions': DepositionsSection,
};

export const DynamicRender: React.FC<DynamicComponentModel> = ({
  __component,
  ...props
}) => {
  if (Components[__component])
    return React.createElement(Components[__component], { ...props });
  return <></>;
};
