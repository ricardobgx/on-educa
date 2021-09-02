import styled from 'styled-components';

export const NavBarBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0 3rem;
  align-items: center;
  background: var(--primary-color);
  position: fixed;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoBall = styled.div`
  height: 11px;
  width: 11px;
  border-radius: 50%;
  background: var(--secondary-color);
  margin-right: .5rem;
`;

export const Title = styled.h1`
  font-size: 1rem;
  text-transform: uppercase;
  color: var(--secondary-color);
`;

export const Actions = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  color: var(--secondary-color);
`;

export const UserLabel = styled.p`
  margin: 0 .5rem;
`;

export const UserPhoto = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 0 .5rem;
`;

export const UserFriends = styled.a`
  margin: 0 .5rem;
`;

export const UserNotifications = styled.button`
  margin: 0 .5rem;
  background: none;
  border: none;
  color: var(--secondary-color);
`;

export const UserConfigurations = styled.a`
  margin: 0 .5rem;
`;

export const Logout = styled.a``;

export const NavBarIcon = styled.i`
  font-size: 1.2rem;
`;