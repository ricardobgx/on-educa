import React from 'react';
import { NavBarActionBox, NavBarIcon, NavBarIconLabel } from './styles';

interface INavBarActionProps {
  link: string;
  icon: string;
  label: string;
  clickAction: () => void;
}

const NavBarAction = (props: INavBarActionProps): JSX.Element => {
  const { link, icon, label, clickAction } = props;

  return (
    <NavBarActionBox to={link} onClick={() => clickAction()}>
      <NavBarIcon className={icon} />
      <NavBarIconLabel>{label}</NavBarIconLabel>
    </NavBarActionBox>
  );
};

export default NavBarAction;
