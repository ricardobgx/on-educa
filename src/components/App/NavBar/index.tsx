import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearPeopleVariables } from '../../../functions/people';
import { ActionCreators, State } from '../../../store';
import NavBarAction from './NavBarAction';
import {
  NavBarActionBox,
  NavBarIcon,
  NavBarIconLabel,
} from './NavBarAction/styles';

import {
  NavBarBox,
  Logo,
  LogoBall,
  Title,
  Actions,
  PeoplePhoto,
  ToggleMenuButton,
  ToggleMenuIcon,
} from './styles';

const NavBar = (): JSX.Element => {
  /* Global State */

  const { people, friendRequests } = useSelector((store: State) => store);
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
