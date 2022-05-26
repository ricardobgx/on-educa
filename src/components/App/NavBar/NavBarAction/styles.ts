import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { paragraph } from '../../../../global/styles/components/textComponents';

export const NavBarActionBox = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  position: relative;
  height: 40px;
  width: 40px;

  border-radius: 10px;

  &.profile {
    margin-right: 5px;
  }

  span {
    text-align: center;

    @media (max-width: 600px) {
      width: 35px;
      margin: 0 10px;
    }
  }

  &:hover {
    background: ${({ theme }) => theme.colors.hoverColor};
  }

  @media (max-width: 600px) {
    padding: 10px 0;
    width: 100%;
    height: 50px;
    justify-content: flex-start;

    &.profile {
      margin: 0;
    }
  }
`;

export const NavBarIconLabel = styled(paragraph)`
  display: none;

  @media (max-width: 600px) {
    display: unset;
  }
`;
