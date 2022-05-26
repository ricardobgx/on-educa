import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const DailyGoalBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  background: ${({ theme }) => theme.colors.boxColor};
  padding: 20px;
  height: 100%;

  transition: all 0.2s linear;
`;
export const DailyGoalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const DailyGoalHeaderSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  font-weight: bold;

  color: ${({ theme }) => theme.colors.textColors.primaryColor};

  &:last-of-type {
    gap: 5px;
    font-weight: normal;
  }
`;
export const DailyGoalHeaderLabel = styled(paragraph)``;
export const DailyGoalHeaderButton = styled.button`
  color: currentColor;
  background: none;

  border: none;

  cursor: pointer;
`;
