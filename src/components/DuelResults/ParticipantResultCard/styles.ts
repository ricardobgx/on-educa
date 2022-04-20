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
export const QuestionsAnswered = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const QuestionAnswered = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  width: calc(50% - 5px);
  height: 40px;
  padding: 0 10px;
  margin: 5px 0;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.whiteColor};

  @media (max-width: 500px) {
    width: 100%;
  }

  &:nth-child(1) {
    background: ${({ theme }) => theme.similarColors.rightQuestion};
  }

  &:nth-child(2) {
    background: ${({ theme }) => theme.similarColors.wrongQuestion};
  }
`;
export const QuestionAnsweredLabel = styled(paragraph)``;
export const QuestionAnsweredData = styled(paragraph)``;

export const ParticipantXP = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  height: 40px;
  padding: 0 10px;
  margin: 5px 0;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.boxColor};
  background: ${({ theme }) => theme.colors.textColor};
`;
export const ParticipantXPLabel = styled(paragraph)``;
export const ParticipantXPData = styled(paragraph)``;
