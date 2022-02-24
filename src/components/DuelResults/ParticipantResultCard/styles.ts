import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const ParticipantCardBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;

  &:last-of-type {
    margin-bottom: 0;
  }

  & > div {
    box-shadow: none;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

/* Duel Performance */

export const ParticipantDuelPerformance = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  margin-top: 0;
`;
export const QuestionAnswered = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;

  &:nth-child(1) {
    color: ${({ theme }) => theme.similarColors.rightQuestion};
  }

  &:nth-child(2) {
    color: ${({ theme }) => theme.similarColors.wrongQuestion};
  }

  &:nth-child(3) {
    color: ${({ theme }) => theme.colors.textColor};
  }
`;
export const QuestionAnsweredLabel = styled(paragraph)``;
export const QuestionAnsweredData = styled(paragraph)``;
