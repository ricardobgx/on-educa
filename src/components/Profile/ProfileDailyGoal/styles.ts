import styled from 'styled-components';
import {
  mediumIcon,
  smallIcon,
} from '../../../global/styles/components/iconComponents';
import { paragraph } from '../../../global/styles/components/textComponents';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 20px;
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.boxColor};
`;
export const DailyGoalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const DailyGoalHeaderBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const DailyGoalIcon = styled(mediumIcon)``;
export const DailyGoalLabel = styled(paragraph)`
  font-weight: bold;
`;
export const DailyGoalInfo = styled.div`
  display: flex;
`;
export const DailyGoalValueLabel = styled(paragraph)``;
export const EditDailyGoalValueButton = styled.button`
  background: none;
  border: none;
`;
export const EditDailyGoalValueIcon = styled(smallIcon)`
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.textColor};
`;
export const DailyGoalProgress = styled.div`
  display: flex;
`;
export const DailyGoalProgressLabel = styled(paragraph)`
  margin-left: 5px;
  font-weight: bold;
`;
