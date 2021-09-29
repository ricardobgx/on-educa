import React from 'react';
import {
  HomeActionBox,
  HomeActionIcon,
  HomeActionLabel
} from './components';
import { IHomeActionProps } from './interfaces';

const HomeAction: React.FunctionComponent<IHomeActionProps> = props => {
  const { icon, label, link } = props;

  return (
    <HomeActionBox to={link}>
      <HomeActionIcon src={icon}></HomeActionIcon>
      <HomeActionLabel>{label}</HomeActionLabel>
    </HomeActionBox>
  );
}

export default HomeAction;