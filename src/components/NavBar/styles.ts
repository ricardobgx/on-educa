import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBarBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem;
  align-items: center;
  background: var(--primary-color);
  position: fixed;
  top: 0;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, .5);
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

  @media (max-width: 600px) {
    position: fixed;
    top: 0;
    right: 0;
    width: 15rem;
    height: 100vh;
    padding: .5rem;
    padding-top: calc(50px + .5rem);
    background: var(--primary-color);
    box-shadow: 0px 0px 8px rgba(0, 0, 0, .5);
    flex-direction: column;
    align-items: flex-start;
    transition: all .4s linear;
  }
`;

export const UserLabel = styled.p`
  margin: 0 .5rem;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const UserPhoto = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: var(--secondary-color);
  border: 2px solid var(--secondary-color);
`;

export const UserName = styled.p`
  display: none;
  
  @media (max-width: 600px) {
    display: unset;
  }
`;

export const Action = styled(Link)`
  margin: 0 .5rem;
  display: flex;
  align-items: center;
  color: var(--secondary-color);

  @media (max-width: 600px) {
    padding: .5rem 0;
    width: 100%;
    height: 3rem;
    margin: .25rem 0;
    border-radius: .5rem;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
`;

export const NavBarIcon = styled.i`
  font-size: 1.2rem;
  color: var(--secondary-color);
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1.5rem;
    width: 2rem;
    margin: 0 .5rem;
  }
`;

export const IconLabel = styled.p`
  display: none;
  color: var(--secondary-color);
  font-size: 1rem;

  @media (max-width: 600px) {
    display: unset;
  }
`;

export const ToggleMenuButton = styled.label`
  background: none;
  border: none;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  border-radius: .25rem;
  position: fixed;
  right: 0;
  margin-right: 1.5rem;
  display: none;
  justify-content: center;
  align-items: center;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 600px) {
    display: flex;
  }
`;

export const ToggleMenuIcon = styled.i`
  font-size: 1.2rem;
  color: var(--secondary-color);
  text-align: center;
`;

export const ToggleMenuCheck = styled.input`
  display: none;
`;