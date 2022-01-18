import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const Container = styled.button`
  border: 3px solid transparent;
  background: ${({ theme }) => theme.colors.boxColor};
  color: ${({ theme }) => theme.colors.questionTextColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  padding: 10px 15px;
  margin-bottom: 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s linear;
`;
export const QuestionAlternativeLabel = styled(paragraph)`
  text-align: left;
`;
