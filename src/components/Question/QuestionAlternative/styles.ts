import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const QuestionAlternativeBox = styled.button`
  border: none;
  background: ${({ theme }) => theme.colors.boxColor};
  color: ${({ theme }) => theme.colors.questionTextColor};
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  padding: 10px 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s linear;
`;
export const QuestionAlternativeLabel = styled(paragraph)`
  text-align: left;
`;
