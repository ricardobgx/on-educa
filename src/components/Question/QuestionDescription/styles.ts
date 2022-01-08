import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const QuestionDescriptionBox = styled.div`
  padding: 20px 10px;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 40px;
`;
export const QuestionDescriptionParagraphs = styled.div`
  color: ${({ theme }) => theme.colors.questionTextColor};
  max-height: 250px;
  padding: 0 10px;
  overflow: auto;
`;
export const QuestionDescriptionParagraph = styled(paragraph)`
  min-height: 20px;
  text-align: justify;
`;
