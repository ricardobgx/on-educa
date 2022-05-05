import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

// Posições dos estudantes no ranking

export const RankingPosition = styled(paragraph)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textColor};
  min-height: 85px;
  max-width: 40px;
  margin-left: 15px;

  @media (max-width: 1150px) {
    min-height: unset;
    height: 80px;
    padding: 10px;

    margin-left: 5px;
    margin-right: -10px;
  }
`;

// Estudante e sua posição

export const RankingCardBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 85px;
  margin-bottom: 20px;
  background: ${({ theme }) => theme.colors.boxColor};

  &:last-of-type {
    margin: 0;
  }
`;
