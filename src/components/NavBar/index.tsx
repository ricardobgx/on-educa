import {
  NavBarBox,
  Logo,
  LogoBall,
  Title,
  Actions,
  UserLabel,
  UserPhoto,
  UserFriends,
  UserNotifications,
  UserConfigurations,
  Logout,
  NavBarIcon
} from './styles';

const NavBar = () => {
  return (
    <NavBarBox>
      <Logo>
        <LogoBall></LogoBall>
        <Title>Educa</Title>
      </Logo>
      <Actions>
        <UserLabel>Olá, xxxxxxxxxxxxx</UserLabel>
        <UserPhoto src="https://stickerly.pstatic.net/sticker_pack/QJQPtMdUccpIu3EbYZn6HA/NFOEYK/4/0b7d59f9-4d26-4ac7-b15e-0d9710768b81.png"></UserPhoto>
        <UserFriends>
          <NavBarIcon className={'fas fa-users'}></NavBarIcon>
        </UserFriends>
        <UserNotifications>
          <NavBarIcon className={'fas fa-cog'}></NavBarIcon>
        </UserNotifications>
        <UserConfigurations>
          <NavBarIcon className={'fas fa-sign-out-alt'}></NavBarIcon>
        </UserConfigurations>
        <Logout>
          <NavBarIcon></NavBarIcon>
        </Logout>
      </Actions>
    </NavBarBox>
  );
}

export default NavBar;