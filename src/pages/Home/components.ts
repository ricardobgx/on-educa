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
  width: 100%;

  @media (max-width: 1150px) {
    width: 100%;
  }
`;

export const AchievementsBox = styled(Link)`
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  height: calc(((100vh - 265px) / 4) - 20px);
  display: flex;
  align-items: center;
  border: 3px solid transparent;
  transition: all 0.2s linear;

  &:hover {
    /* border-color: ${({ theme }) => theme.colors.textColor}; */
    box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  }
`;
export const AchievementsIcon = styled(mediumIcon)`
  margin-right: 20px;
  color: ${({ theme }) => theme.colors.textColor};
`;
export const AchievementsLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
`;

export const DailyGoalBox = styled.div`
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  height: calc(((100vh - 265px) / 4) - 20px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px solid transparent;
`;
export const DailyGoalIcon = styled(mediumIcon)`
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
export const DailyGoalEditIcon = styled(mediumIcon)`
  color: ${({ theme }) => theme.colors.textColor};
  margin-left: 20px;
`;
