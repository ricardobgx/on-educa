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
  gap: 10px;
`;
export const QuitPracticeButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const PracticeStatusBox = styled.div`
  display: flex;
  width: 100%;
`;
export const PracticeProgress = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
`;
export const PracticeProgressLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  font-weight: bold;
  min-width: max-content;
`;
