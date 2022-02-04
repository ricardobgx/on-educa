import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearPeopleVariables } from '../../../functions/people';
import { ActionCreators, State } from '../../../store';

import {
  NavBarBox,
  Logo,
  LogoBall,
  Title,
  Actions,
  PeoplePhoto,
  Action,
  NavBarIcon,
  IconLabel,
  ToggleMenuButton,
  ToggleMenuIcon,
} from './styles';

const NavBar = (): JSX.Element => {
  /* Global State */

  const { people } = useSelector((store: State) => store);
  const { id, profilePicture } = people;

  const dispatch = useDispatch();
  const { logoutPeople, loadToken } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  const logout = (): void => {
    clearPeopleVariables();
    logoutPeople();
    loadToken('');
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

  return (
    <NavBarBox>
      <Logo to="/">
        <LogoBall />
        <Title>Educa</Title>
      </Logo>
      <Actions style={{ right: menuRight }}>
        <Action to={`/profile/${id}`}>
          <PeoplePhoto src={profilePicture.path} />
          <IconLabel>Perfil</IconLabel>
        </Action>
        <Action to="/friends">
          <NavBarIcon className="fas fa-users" />
          <IconLabel>Amigos</IconLabel>
        </Action>
        <Action to="/notifications">
          <NavBarIcon className="fas fa-bell" />
          <IconLabel>Notificações</IconLabel>
        </Action>
        <Action to="/settings">
          <NavBarIcon className="fas fa-cog" />
          <IconLabel>Configurações</IconLabel>
        </Action>
        <Action
          onClick={() => {
            logout();
          }}
          to="/"
        >
          <NavBarIcon className="fas fa-sign-out-alt" />
          <IconLabel>Sair</IconLabel>
        </Action>
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
