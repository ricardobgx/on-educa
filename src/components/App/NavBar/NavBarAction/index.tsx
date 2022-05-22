import React from 'react';
import { MediumMaterialIconOutlined } from '../../Icons/MaterialIcons/MaterialIconsOutlined';
import { NavBarActionAlert, NavBarActionAlertNumber } from '../styles';
import { NavBarActionBox, NavBarIconLabel } from './styles';

interface INavBarActionProps {
  link: string;
  icon: string;
  label: string;
  clickAction: () => void;
  alertIcon: boolean;
  alertsNumber: number;
}

const NavBarAction = (props: INavBarActionProps): JSX.Element => {
  const { link, icon, label, clickAction, alertIcon, alertsNumber } = props;

  return (
    <NavBarActionBox to={link} onClick={() => clickAction()}>
      {alertIcon && (
        <NavBarActionAlert>
          <NavBarActionAlertNumber>{alertsNumber}</NavBarActionAlertNumber>
        </NavBarActionAlert>
      )}
      <MediumMaterialIconOutlined icon={icon} color="" />
      <NavBarIconLabel>{label}</NavBarIconLabel>
    </NavBarActionBox>
  );
};

export default NavBarAction;
