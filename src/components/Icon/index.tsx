import { SvgIconProps } from '@mui/material';
import React from 'react';
import { DefaultIcons, IconTypes } from 'src/@types/IconType';

interface IconType extends SvgIconProps {
  icon: IconTypes;
}

export const Icon: React.FC<IconType> = ({ icon, ...props }) => {
  return React.createElement(DefaultIcons[icon], { ...props });
};
