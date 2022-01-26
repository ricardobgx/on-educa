import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const Container = styled.div`
  border: none;
  background: ${({ theme }) => theme.colors.boxColor};
  color: ${({ theme }) => theme.colors.questionTextColor};
  padding: 15px 20px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: all 0.2s linear;
`;
export const QuestionAlternativeLabel = styled(paragraph)`
  text-align: left;
`;
