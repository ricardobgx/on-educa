import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../../global/styles/components/textComponents';

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

  svg {
    height: 35px;
    width: 35px;
  }
`;

export const LogoBall = styled.div`
  height: 9px;
  width: 9px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.textColors.primaryColor};
  margin-right: 10px;
`;

export const Title = styled(paragraph)`
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  width: max-content;

  color: ${({ theme }) => theme.colors.textColors.primaryColor};

  @media (max-width: 600px) {
    gap: 10px;
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
  background: ${({ theme }) => theme.colors.textColors.primaryColor};
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
  color: ${({ theme }) => theme.colors.textColors.secondaryColor};

  &:hover {
    background: ${({ theme }) => theme.colors.hoverColor};
  }

  @media (max-width: 600px) {
    display: flex;
  }
`;

export const ToggleMenuCheck = styled.input`
  display: none;
`;

export const NavBarActionAlert = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 5%;
  right: -2px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.boxColor};
  background: ${({ theme }) => theme.colors.textColors.primaryColor};
  animation: fadeIn 0.2s linear;

  @media (max-width: 600px) {
    top: 10%;
    left: 35px;
    right: unset;
  }
`;
export const NavBarActionAlertNumber = styled(paragraph)`
  font-size: 9px;
  font-weight: bold;
`;
