import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mediumIcon } from '../../../../global/styles/components/iconComponents';
import { paragraph } from '../../../../global/styles/components/textComponents';

export const NavBarActionBox = styled(Link)`
  margin: 0 10px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textColor};
  position: relative;

  @media (max-width: 600px) {
    padding: 10px 0;
    width: 100%;
    height: 50px;
    margin: 5px 0;
    border-radius: 5px;

    &:hover {
      background: ${({ theme }) => theme.colors.hoverColor};
    }
  }
`;

export const NavBarIcon = styled(mediumIcon)`
  color: ${({ theme }) => theme.colors.textColor};
  text-align: center;

  @media (max-width: 600px) {
    width: 35px;
    margin: 0 10px;
  }
`;

export const NavBarIconLabel = styled(paragraph)`
  display: none;
  color: ${({ theme }) => theme.colors.textColor};

  @media (max-width: 600px) {
    display: unset;
  }
`;
