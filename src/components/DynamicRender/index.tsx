import { AboutSection } from '@components/AboutSection';
import { DepositionsSection } from '@components/Depositions';
import { DifferentialsSection } from '@components/DifferentialsSection';
import { InstagramFeed } from '@components/InstagramFeed';
import { ProductSectionComponent } from '@components/ProductSection';
import { ProductList } from '@components/ProductsList';
import { Slider } from '@components/Slider';
import React from 'react';
import { DynamicComponentModel } from 'src/models/dynamic-component.model';

const Components = {
  'body.category-section': ProductSectionComponent,
  'body.differentials': DifferentialsSection,
  'body.depositions': DepositionsSection,
  'body.product-list': ProductList,
  'body.about': AboutSection,
  'body.slider': Slider,
  'body.instagram-feed': InstagramFeed,
};

export const DynamicRender: React.FC<DynamicComponentModel> = ({
  __component,
  ...props
}) => {
  if (Components[__component])
    return React.createElement(Components[__component], { ...props });
  return <></>;
};
