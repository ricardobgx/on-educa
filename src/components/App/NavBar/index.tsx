/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearPeopleVariables } from '../../../functions/people';
import {
  DEFAULT_STUDENT,
  DEFAULT_TEACHER,
} from '../../../static/defaultEntitiesValues';
import { ActionCreators, RootState } from '../../../store';
import DarkLogo from '../../../svgs/DarkLogo';
import LightLogo from '../../../svgs/LightLogo';
import NavBarAction from './NavBarAction';
import { NavBarActionBox, NavBarIconLabel } from './NavBarAction/styles';

import {
  NavBarBox,
  Logo,
  Actions,
  PeoplePhoto,
  ToggleMenuButton,
  ToggleMenuIcon,
} from './styles';

const NavBar = (): JSX.Element => {
  /* GlobalRootState */

  const { people, friendRequests, theme } = useSelector(
    (store: RootState) => store,
  );
  const { id, profilePicture } = people;
  const [logoType, setLogoType] = useState('dark');

  const dispatch = useDispatch();
  const { logoutPeople, loadToken, loadStudent, loadTeacher } =
    bindActionCreators(ActionCreators, dispatch);

  const logout = (): void => {
    clearPeopleVariables();
    logoutPeople();
    loadToken('');
    loadStudent(DEFAULT_STUDENT);
    loadTeacher(DEFAULT_TEACHER);
  };

  const [toggleMenuIcon, setToggleMenuIcon] = useState('bars');
  const [menuRight, setMenuRight] = useState('-100%');

  const toggleMenu = (): void => {
    if (toggleMenuIcon === 'bars') {
      setToggleMenuIcon('times');
      setMenuRight('0%');
    } else {
      setToggleMenuIcon('bars');
      setMenuRight('-100%');
    }
  };

  useEffect(() => {
    if (theme.themeType < 6) {
      setLogoType('dark');
    } else {
      setLogoType('light');
    }
  }, [theme]);

  return (
    <NavBarBox className="with-shadow">
      <Logo to="/">{logoType === 'dark' ? <DarkLogo /> : <LightLogo />}</Logo>
      <Actions style={{ right: menuRight }}>
        <NavBarActionBox to={`/profile/${id}`} onClick={() => toggleMenu()}>
          <PeoplePhoto src={profilePicture.path} />
          <NavBarIconLabel>Perfil</NavBarIconLabel>
        </NavBarActionBox>
        <NavBarAction
          link="/friends"
          icon="fas fa-users"
          label="Amigos"
          clickAction={toggleMenu}
          alertIcon={friendRequests.length > 0}
          alertsNumber={friendRequests.length}
        />
        <NavBarAction
          link="/notifications"
          icon="fas fa-bell"
          label="Notificações"
          clickAction={toggleMenu}
          alertIcon={false}
          alertsNumber={5}
        />
        <NavBarAction
          link="/settings"
          icon="fas fa-cog"
          label="Configurações"
          clickAction={toggleMenu}
          alertIcon={false}
          alertsNumber={1}
        />
        <NavBarAction
          link="/"
          icon="fas fa-sign-out-alt"
          label="Sair"
          clickAction={logout}
          alertIcon={false}
          alertsNumber={1}
        />
      </Actions>
      <ToggleMenuButton
        onClick={() => {
          toggleMenu();
        }}
      >
        <ToggleMenuIcon className={`fas fa-${toggleMenuIcon}`} />
      </ToggleMenuButton>
    </NavBarBox>
  );
};

export default NavBar;
