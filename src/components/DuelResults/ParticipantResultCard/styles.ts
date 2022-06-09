import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const ParticipantCardBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;

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
  justify-content: space-between;
  gap: 10px;
  margin: 5px 0;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
export const QuestionAnswered = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  color: ${({ theme }) => theme.colors.textColors.primaryColor};

  @media (max-width: 500px) {
    width: 100%;
  }

  &:nth-child(1) {
    background: ${({ theme }) => theme.flagColors.greenColor};
  }

  &:nth-child(2) {
    background: ${({ theme }) => theme.flagColors.redColor};
  }
`;
export const QuestionAnsweredHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  color: ${({ theme }) => theme.colors.buttonColors.mainButtonTextColor};
`;
export const QuestionAnsweredLabel = styled(paragraph)``;
export const QuestionAnsweredData = styled(paragraph)`
  color: ${({ theme }) => theme.colors.buttonColors.mainButtonTextColor};
`;

export const ParticipantXP = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  height: 40px;
  padding: 0 10px;
  margin: 5px 0;
  color: ${({ theme }) => theme.colors.buttonColors.mainButtonTextColor};
  background: ${({ theme }) => theme.colors.mainColor};
`;
export const ParticipantXPLabel = styled(paragraph)``;
export const ParticipantXPData = styled(paragraph)``;
