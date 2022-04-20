import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

// Posições dos estudantes no ranking

export const RankingPosition = styled(paragraph)`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.boxColor};
  min-height: 85px;
  padding: 0px 10px;
  margin-right: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};

  @media (max-width: 1150px) {
    min-height: unset;
    height: 80px;
    padding: 10px;
  }
`;

// Estudante e sua posição

export const RankingCardBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 85px;
  margin-bottom: 20px;

  &:last-of-type {
    margin: 0;
  }
`;
