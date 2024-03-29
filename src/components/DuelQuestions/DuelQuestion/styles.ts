import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const DuelQuestionDescriptionBox = styled.div`
  padding: 20px 10px;
  background: ${({ theme }) => theme.colors.boxColor};
  margin: 40px 0;
`;
export const DuelQuestionDescription = styled.div`
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  max-height: 250px;
  padding: 0 5px;
  overflow: auto;
`;
export const DuelQuestionDescriptionParagraph = styled(paragraph)`
  min-height: 20px;
  text-align: justify;
`;
export const DuelQuestionAlternatives = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DuelQuestionActions = styled.div`
  display: flex;
  flex-direction: column;
`;
export const AnswerButton = styled.button`
  min-height: 40px;
  border: none;
  /* font-weight: bold; */
  color: ${({ theme }) => theme.colors.boxColor};
  background: ${({ theme }) => theme.colors.textColors.primaryColor};
  cursor: pointer;
`;
export const AnswerButtonLabel = styled(paragraph)``;
export const SkipButton = styled.button`
  min-height: 40px;
  border: none;
  /* font-weight: bold; */
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  background: ${({ theme }) => theme.colors.boxColor};
  cursor: pointer;
`;
export const SkipButtonLabel = styled(paragraph)``;
