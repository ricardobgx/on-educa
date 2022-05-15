import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const Container = styled.div`
  border: none;
  background: ${({ theme }) => theme.colors.boxColor};
  color: ${({ theme }) => theme.colors.questionTextColor};
  padding: 10px 15px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: all 0.2s linear;

  opacity: 0.7;
`;
export const QuestionAlternativeLabel = styled(paragraph)`
  text-align: left;
`;
