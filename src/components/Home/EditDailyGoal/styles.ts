import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const ShadowBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.boxShadowColor};
  display: flex;
  justify-content: center;
  align-items: center;
  animation: 0.2s fadeIn linear;
`;
export const EditDailyGoalBox = styled.div`
  background: ${({ theme }) => theme.colors.boxColor};
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const EditDailyGoalLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
`;
export const GoalInputBox = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  border: 3px solid ${({ theme }) => theme.colors.textColor};
  border-radius: 5px;
  padding: 10px;
`;
export const GoalInput = styled.input`
  color: ${({ theme }) => theme.colors.textColor};
  border: none;
  background: none;
`;
export const ExperienceLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
`;
export const EditDailyGoalButton = styled.button`
  background: ${({ theme }) => theme.colors.textColor};
  border: none;
  height: 40px;
  width: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const EditDailyGoalButtonLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.boxColor};
  font-weight: bold;
`;
