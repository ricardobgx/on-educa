import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../../global/styles/components/textComponents';
import { mediumIcon } from '../../../global/styles/components/iconComponents';

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
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  z-index: 95;
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
  margin-right: 10px;
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
    width: 75vw;
    height: 100vh;
    padding: 10px;
    padding-top: calc(50px + 0.5rem);
    background: ${({ theme }) => theme.colors.boxColor};
    box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
    flex-direction: column;
    align-items: flex-start;
    transition: all 0.4s linear;
  }
`;

export const PeoplePhoto = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  /* border: 2px solid ${({ theme }) => theme.colors.hoverColor}; */
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  margin: 5px;

  @media (max-width: 600px) {
    margin: 5px 10px;
  }
`;

export const PeopleName = styled(paragraph)`
  display: none;

  @media (max-width: 600px) {
    display: unset;
  }
`;

export const ToggleMenuButton = styled.label`
  background: none;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
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

export const ToggleMenuIcon = styled(mediumIcon)`
  color: ${({ theme }) => theme.colors.textColor};
  text-align: center;
`;

export const ToggleMenuCheck = styled.input`
  display: none;
`;
