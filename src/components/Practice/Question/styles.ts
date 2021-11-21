import styled from 'styled-components';
import { paragraph } from '../../../components';

export const Container = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const QuestionDescriptionBox = styled.div`
  padding: 20px 10px;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 40px;
`;
export const QuestionDescription = styled.div`
  color: ${({ theme }) => theme.colors.questionTextColor};
  max-height: 250px;
  padding: 0 10px;
  overflow: auto;
`;
export const QuestionDescriptionParagraph = styled(paragraph)`
  min-height: 20px;
  text-align: justify;
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
  font-weight: bold;
  color: ${({ theme }) => theme.colors.boxColor};
  background: ${({ theme }) => theme.colors.textColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  cursor: pointer;
`;
export const AnswerButtonLabel = styled(paragraph)``;
export const SkipButton = styled.button`
  min-height: 40px;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  cursor: pointer;
`;
export const SkipButtonLabel = styled(paragraph)``;
