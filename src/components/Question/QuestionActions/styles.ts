import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const QuestionActionsBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const AnswerQuestionButton = styled.button`
  margin-bottom: 20px;
  min-height: 40px;
  border: none;
  /* font-weight: bold; */
  color: ${({ theme }) => theme.colors.boxColor};
  background: ${({ theme }) => theme.colors.textColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  cursor: pointer;
`;
export const AnswerQuestionButtonLabel = styled(paragraph)``;
export const SkipQuestionButton = styled.button`
  min-height: 40px;
  border: none;
  /* font-weight: bold; */
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  cursor: pointer;
`;
export const SkipQuestionButtonLabel = styled(paragraph)``;
