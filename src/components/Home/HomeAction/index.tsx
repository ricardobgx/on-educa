import React from 'react';
import { HomeActionBox, HomeActionIcon, HomeActionLabel } from './components';
import { IHomeActionProps } from './interfaces';

const HomeAction = (props: IHomeActionProps): JSX.Element => {
  const { icon, label, link } = props;

  return (
    <HomeActionBox to={link} className="with-shadow bd-rd-5">
      <HomeActionIcon className={icon} />
      <HomeActionLabel>{label}</HomeActionLabel>
    </HomeActionBox>
  );
};

export default HomeAction;
