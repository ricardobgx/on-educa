import styled from 'styled-components';
import { paragraph } from '../../../components';

export const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
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
  width: 100%;
`;
export const PracticeProgressBar = styled.div`
  height: 100%;
  padding: 2px;
  margin-right: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  background: #dee2e6;
`;
export const QuestionsProgressBar = styled.div`
  height: 15px;
  background: ${({ theme }) => theme.colors.textColor};
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
