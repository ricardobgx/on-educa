import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../../global/styles/components/textComponents';

export const HomeActionBox = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: calc((100vh - 265px) / 2);
  height: calc((100vh - 265px) / 2);
  margin: 20px;
  padding: calc(((100vh - 265px) / 2) / 5);

  color: ${({ theme }) => theme.colors.textColors.secondaryColor};
  background: ${({ theme }) => theme.colors.boxColor};

  border: 3px solid transparent;

  transition: all 0.2s linear;

  &:hover {
    color: ${({ theme }) => theme.colors.textColors.primaryColor};
    transform: translateY(-5px);
  }

  @media (max-width: 600px) {
    padding: calc((100vw - 120px) / 14);
    width: calc((100vw - 125px) / 2);
    height: calc((100vw - 125px) / 2);
  }

  @media (min-width: 600px) and (max-width: 1150px) {
    padding: calc((100vw - 120px) / 24);
    width: calc((100vw - 165px) / 3);
    height: calc((100vw - 165px) / 3);
  }
`;

export const HomeActionIcon = styled.span`
  font-size: calc((100vh - 120px) / 7);
  display: flex;
  justify-content: center;

  @media (min-width: 600px) and (max-width: 1150px) {
    font-size: calc((100vw - 180px) / 7);
  }

  @media (max-width: 600px) {
    font-size: calc((100vw - 120px) / 6);
  }
`;

export const HomeActionLabel = styled(paragraph)`
  font-weight: bold;
  text-align: center;
`;
