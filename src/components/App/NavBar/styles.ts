import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../../components';

export const NavBarBox = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  align-items: center;
  background: ${({ theme }) => theme.colors.boxColor};
  position: fixed;
  top: 0;
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  z-index: 98;
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
`;

export const LogoBall = styled.div`
  height: 11px;
  width: 11px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.textColor};
  margin-right: 0.5rem;
`;

export const Title = styled(paragraph)`
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const Actions = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textColor};

  @media (max-width: 600px) {
    position: fixed;
    top: 0;
    right: 0;
    width: 15rem;
    height: 100vh;
    padding: 0.5rem;
    padding-top: calc(50px + 0.5rem);
    background: ${({ theme }) => theme.colors.boxColor};
    box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
    flex-direction: column;
    align-items: flex-start;
    transition: all 0.4s linear;
  }
`;

export const UserLabel = styled(paragraph)`
  margin: 0 0.5rem;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const UserPhoto = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.textColor};
  border: 2px solid ${({ theme }) => theme.colors.textColor};

  @media (max-width: 600px) {
    margin: 0 0.5rem;
  }
`;

export const UserName = styled(paragraph)`
  display: none;

  @media (max-width: 600px) {
    display: unset;
  }
`;

export const Action = styled(Link)`
  margin: 0 0.5rem;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textColor};

  @media (max-width: 600px) {
    padding: 0.5rem 0;
    width: 100%;
    height: 3rem;
    margin: 0.25rem 0;
    border-radius: 0.5rem;

    &:hover {
      background: ${({ theme }) => theme.colors.hoverColor};
    }
  }
`;

export const NavBarIcon = styled.i`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textColor};
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1.5rem;
    width: 2rem;
    margin: 0 0.5rem;
  }
`;

export const IconLabel = styled(paragraph)`
  display: none;
  color: ${({ theme }) => theme.colors.textColor};
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
  border-radius: 0.25rem;
  position: fixed;
  right: 0;
  margin-right: 40px;
  display: none;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${({ theme }) => theme.colors.hoverColor};
  }

  @media (max-width: 600px) {
    display: flex;
  }
`;

export const ToggleMenuIcon = styled.i`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textColor};
  text-align: center;
`;

export const ToggleMenuCheck = styled.input`
  display: none;
`;
