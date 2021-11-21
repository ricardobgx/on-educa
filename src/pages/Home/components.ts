import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../components';

export const PageBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100%;
  margin: 20px;
`;

export const HomeActionsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(3 * 12rem + 3 * 40px);

  @media (max-width: 1150px) {
    width: 100%;
  }
`;

export const HomeActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const SectionLabelBox = styled.div`
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
  padding: 1rem;
  margin: 20px;
  display: flex;
  justify-content: center;
  width: calc(100% - 40px);
`;

export const SectionLabelText = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
`;

export const PerformanceBox = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - (3 * 12rem + 3 * 40px));

  @media (max-width: 1150px) {
    width: 100%;
  }
`;

export const AchievementsBox = styled(Link)`
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  height: calc(6rem - 20px);
  display: flex;
  align-items: center;
  border: 3px solid transparent;
  transition: all 0.2s linear;

  &:hover {
    border-color: ${({ theme }) => theme.colors.textColor};
  }
`;
export const AchievementsIcon = styled.i`
  font-size: 1.05rem;
  margin-right: 20px;
  color: ${({ theme }) => theme.colors.textColor};
`;
export const AchievementsLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
`;

export const DailyGoalBox = styled.div`
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  height: calc(6rem - 20px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px solid transparent;
`;
export const DailyGoalIcon = styled.i`
  font-size: 1.05rem;
  margin-right: 20px;
  color: ${({ theme }) => theme.colors.textColor};
`;
export const DailyGoalDataBox = styled.div`
  display: flex;
  align-items: center;
`;
export const DailyGoalLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
`;
export const DailyGoalEditButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
export const DailyGoalEditIcon = styled.i`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 1rem;
  margin-left: 20px;
`;
