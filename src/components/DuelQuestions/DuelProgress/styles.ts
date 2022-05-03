import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.boxColor};
  min-height: 50px;
  padding: 0 20px;

  @media (max-width: 1150px) {
    padding: 20px;
  }
`;
export const DuelProgressBar = styled.div`
  height: 15px;
  padding: 2px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.progressBarColor};
`;
export const QuestionsProgressBar = styled.div`
  height: 15px;
  background: ${({ theme }) => theme.colors.mainButtonBgColor};
  transition: 0.2s linear;
  border-radius: 10px;
`;
export const DuelProgressLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
  min-width: max-content;
`;
