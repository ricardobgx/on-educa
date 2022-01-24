import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const Container = styled.div`
  margin: 20px;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const QuestionAlternatives = styled.div`
  display: flex;
  flex-direction: column;
`;
export const QuestionActions = styled.div`
  display: flex;
  flex-direction: column;
`;
export const AnswerButton = styled.button`
  margin-bottom: 20px;
  min-height: 40px;
  border: none;
  /* font-weight: bold; */
  color: ${({ theme }) => theme.colors.boxColor};
  background: ${({ theme }) => theme.colors.textColor};
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  cursor: pointer;
`;
export const AnswerButtonLabel = styled(paragraph)``;
export const SkipButton = styled.button`
  min-height: 40px;
  border: none;
  /* font-weight: bold; */
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  cursor: pointer;
`;
export const SkipButtonLabel = styled(paragraph)``;
