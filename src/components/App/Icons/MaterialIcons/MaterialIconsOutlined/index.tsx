import React from 'react';
import {
  BigMaterialIcon,
  ExtraBigMaterialIcon,
  MediumMaterialIcon,
  SmallMaterialIcon,
} from '../components';
import { IMaterialIconsProps } from '../interfaces';

export const SmallMaterialIconOutlined = (
  props: IMaterialIconsProps,
): JSX.Element => {
  const { icon, color } = props;

  return (
    <SmallMaterialIcon color={color} className="material-icons-outlined">
      {icon}
    </SmallMaterialIcon>
  );
};

export const MediumMaterialIconOutlined = (
  props: IMaterialIconsProps,
): JSX.Element => {
  const { icon, color } = props;

  return (
    <MediumMaterialIcon color={color} className="material-icons-outlined">
      {icon}
    </MediumMaterialIcon>
  );
};

export const BigMaterialIconOutlined = (
  props: IMaterialIconsProps,
): JSX.Element => {
  const { icon, color } = props;

  return (
    <BigMaterialIcon color={color} className="material-icons-outlined">
      {icon}
    </BigMaterialIcon>
  );
};

export const ExtraBigMaterialIconOutlined = (
  props: IMaterialIconsProps,
): JSX.Element => {
  const { icon, color } = props;

  return (
    <ExtraBigMaterialIcon color={color} className="material-icons-outlined">
      {icon}
    </ExtraBigMaterialIcon>
  );
};
