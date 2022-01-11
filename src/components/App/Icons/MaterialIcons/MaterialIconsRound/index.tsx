import React from 'react';
import {
  BigMaterialIcon,
  MediumMaterialIcon,
  SmallMaterialIcon,
} from '../components';
import { IMaterialIconsProps } from '../interfaces';

export const SmallMaterialIconRound = (
  props: IMaterialIconsProps,
): JSX.Element => {
  const { icon, color } = props;

  return (
    <SmallMaterialIcon color={color} className="material-icons-round">
      {icon}
    </SmallMaterialIcon>
  );
};

export const MediumMaterialIconRound = (
  props: IMaterialIconsProps,
): JSX.Element => {
  const { icon, color } = props;

  return (
    <MediumMaterialIcon color={color} className="material-icons-round">
      {icon}
    </MediumMaterialIcon>
  );
};

export const BigMaterialIconRound = (
  props: IMaterialIconsProps,
): JSX.Element => {
  const { icon, color } = props;

  return (
    <BigMaterialIcon color={color} className="material-icons-round">
      {icon}
    </BigMaterialIcon>
  );
};
