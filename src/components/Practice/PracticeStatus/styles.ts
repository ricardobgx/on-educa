import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.boxColor};
  min-height: 45px;
  padding: 0 20px;
  margin: 20px;
  display: flex;
  align-items: center;
`;
export const QuitPracticeButton = styled.button`
  margin-right: 20px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textColor};
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const QuitPracticeIcon = styled.i``;
export const PracticeStatusBox = styled.div`
  display: flex;
  width: 100%;
`;
export const PracticeProgress = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const PracticeProgressBar = styled.div`
  height: 13px;
  margin-right: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.progressBarColor};
`;
export const QuestionsProgressBar = styled.div`
  height: 13px;
  background: ${({ theme }) => theme.colors.mainButtonBgColor};
  transition: 0.2s linear;

  &:first-of-type {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  &:last-of-type {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
export const PracticeProgressLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
  min-width: max-content;
`;
