import styled from 'styled-components';
import {
  mediumIcon,
  smallIcon,
} from '../../../global/styles/components/iconComponents';
import { paragraph } from '../../../global/styles/components/textComponents';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
  padding: 20px;
  margin: 0px 20px;
  color: ${({ theme }) => theme.colors.textColor};
`;
export const DailyGoalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const DailyGoalHeaderBox = styled.div`
  display: flex;
  align-items: center;
`;
export const DailyGoalIcon = styled(mediumIcon)`
  margin-right: 10px;
`;
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
