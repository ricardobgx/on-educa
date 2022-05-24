import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../global/styles/components/textComponents';
import { mediumIcon } from '../../global/styles/components/iconComponents';

export const PageBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  margin: 20px;

  @media (max-width: 1150px) {
    flex-wrap: wrap;
  }
`;

export const HomeActionsBox = styled.div`
  display: flex;
  flex-direction: column;
  /* width: calc(3 * 12rem + 3 * 40px); */

  @media (max-width: 1150px) {
    width: 100%;
  }
`;

export const HomeActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-width: calc(((100vh - 265px) / 2 + 40px) * 3);

  @media (max-width: 1150px) {
    min-width: unset;
  }
`;
export const PerformanceBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 1150px) {
    width: 100%;
  }
`;

export const AchievementsBox = styled(Link)`
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  background: ${({ theme }) => theme.colors.boxColor};
  padding: 20px;
  margin: 20px;
  height: calc(((100vh - 265px) / 4) - 20px);
  display: flex;
  align-items: center;
  gap: 7px;
  transition: all 0.2s linear;
`;
export const AchievementsLabel = styled(paragraph)`
  font-weight: bold;
`;
export const DailyGoal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  background: ${({ theme }) => theme.colors.boxColor};
  padding: 20px;
  margin: 20px;
  height: calc(((100vh - 265px) / 4) - 20px);
`;
export const DailyGoalBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const DailyGoalIcon = styled(mediumIcon)`
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
`;
export const DailyGoalDataBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const DailyGoalLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  font-weight: bold;
`;
export const DailyGoalEditButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
export const DailyGoalEditIcon = styled(mediumIcon)`
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
`;
