import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../../components';

export const HomeActionBox = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 12rem;
  height: 12rem;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  margin: 20px;
  padding: 1.5rem;
  border-radius: 10px;
  border: 3px solid transparent;
  transition: all 0.2s linear;

  &:hover {
    border-color: ${({ theme }) => theme.colors.textColor};
    /* box-shadow: 0px 0px 8px ${({ theme }) => theme.colors.boxShadowColor}; */
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

export const HomeActionIcon = styled.i`
  font-size: 4rem;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textColor};
  margin-top: 1rem;

  @media (max-width: 600px) {
    margin-top: calc((100vw - 120px) / 24);
    font-size: calc((100vw - 120px) / 6);
  }

  @media (min-width: 600px) and (max-width: 1150px) {
    margin-top: calc((100vw - 120px) / 45);
    font-size: calc((100vw - 180px) / 9);
  }
`;

export const HomeActionLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
  text-align: center;
`;
