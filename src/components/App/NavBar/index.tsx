/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearPeopleVariables } from '../../../functions/people';
import {
  DEFAULT_STUDENT,
  DEFAULT_TEACHER,
} from '../../../static/defaultEntitiesValues';
import { ActionCreators, RootState } from '../../../store';
import LogoIcon from '../../../svgs/LogoIcon';
import { MediumMaterialIconOutlined } from '../Icons/MaterialIcons/MaterialIconsOutlined';
import NavBarAction from './NavBarAction';
import { NavBarActionBox, NavBarIconLabel } from './NavBarAction/styles';

import {
  NavBarBox,
  Logo,
  Actions,
  PeoplePhoto,
  ToggleMenuButton,
} from './styles';

const NavBar = (): JSX.Element => {
  /* GlobalRootState */

  const { people, friendRequests } = useSelector((store: RootState) => store);
  const { id, profilePicture } = people;

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

  const [toggleMenuIcon, setToggleMenuIcon] = useState('menu');
  const [menuRight, setMenuRight] = useState('-100%');

  const toggleMenu = (): void => {
    if (toggleMenuIcon === 'menu') {
      setToggleMenuIcon('close');
      setMenuRight('0%');
    } else {
      setToggleMenuIcon('menu');
      setMenuRight('-100%');
    }
  };

  return (
    <NavBarBox className="with-shadow">
      <Logo to="/">
        <LogoIcon />
      </Logo>
      <Actions style={{ right: menuRight }}>
        <NavBarActionBox
          className="profile"
          to={`/profile/${id}`}
          onClick={() => toggleMenu()}
        >
          <PeoplePhoto src={profilePicture.path} />
          <NavBarIconLabel>Perfil</NavBarIconLabel>
        </NavBarActionBox>
        <NavBarAction
          link="/friends"
          icon="group"
          label="Amigos"
          clickAction={toggleMenu}
          alertIcon={friendRequests.length > 0}
          alertsNumber={friendRequests.length}
        />
        <NavBarAction
          link="/notifications"
          icon="notifications"
          label="Notificações"
          clickAction={toggleMenu}
          alertIcon={false}
          alertsNumber={5}
        />
        <NavBarAction
          link="/settings"
          icon="settings"
          label="Configurações"
          clickAction={toggleMenu}
          alertIcon={false}
          alertsNumber={1}
        />
        <NavBarAction
          link="/"
          icon="logout"
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
        <MediumMaterialIconOutlined icon={toggleMenuIcon} color="" />
      </ToggleMenuButton>
    </NavBarBox>
  );
};

export default NavBar;
