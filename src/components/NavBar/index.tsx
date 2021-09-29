import { useState } from 'react';
import { INavBarProps } from './interfaces';

import {
  NavBarBox,
  Logo,
  LogoBall,
  Title,
  Actions,
  UserLabel,
  UserPhoto,
  Action,
  NavBarIcon,
  IconLabel,
  UserName,
  ToggleMenuButton,
  ToggleMenuIcon
} from './styles';

import user from '../../assets/icons/user.png';

const NavBar: React.FunctionComponent<INavBarProps> = props => {

  const logout = () => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('email');
    window.localStorage.removeItem('userType');
    window.location.reload();
  }

  const [toggleMenuIcon, setToggleMenuIcon] = useState('bars');
  const [menuRight, setMenuRight] = useState('-100%');

  const toggleMenu = () => {
    if (toggleMenuIcon === 'bars') {
      setToggleMenuIcon('times');
      setMenuRight('0%');
    } else {
      setToggleMenuIcon('bars');
      setMenuRight('-100%')
    }
  }

  return (
    <NavBarBox>
      <Logo>
        <LogoBall></LogoBall>
        <Title>Educa</Title>
      </Logo>
      <Actions style={{ right: menuRight }}>
        <Action to='/profile'>
          <UserLabel>Olá, {props.name}</UserLabel>
          <UserPhoto src={user}></UserPhoto>
          <UserName>{props.name}</UserName>
        </Action>
        <Action to='/friends'>
          <NavBarIcon className={'fas fa-users'}></NavBarIcon>
          <IconLabel>Amigos</IconLabel>
        </Action>
        <Action to='/notifications'>
          <NavBarIcon className={'fas fa-bell'}></NavBarIcon>
          <IconLabel>Notificações</IconLabel>
        </Action>
        <Action to='/config'>
          <NavBarIcon className={'fas fa-cog'}></NavBarIcon>
          <IconLabel>Configurações</IconLabel>
        </Action>
        <Action onClick={() => {
          logout();
        }} to="/">
          <NavBarIcon className={'fas fa-sign-out-alt'}></NavBarIcon>
          <IconLabel>Sair</IconLabel>
        </Action>
      </Actions>
      <ToggleMenuButton onClick={() => {
        toggleMenu();
      }}>
        <ToggleMenuIcon className={'fas fa-' + toggleMenuIcon}></ToggleMenuIcon>
      </ToggleMenuButton>
    </NavBarBox>
  );
}

export default NavBar;