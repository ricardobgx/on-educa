import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  min-height: 50px;
  padding: 0 20px;
  margin: 20px;
  border-radius: 5px;
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
  height: 19px;
  padding: 2px;
  margin-right: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.textColor};
`;
export const QuestionsProgressBar = styled.div`
  height: 15px;
  background: ${({ theme }) => theme.colors.boxColor};
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
