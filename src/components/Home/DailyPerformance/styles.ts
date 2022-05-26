import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../../global/styles/components/textComponents';

export const DailyPerformanceBox = styled.div`
  margin: 20px;
  background: ${({ theme }) => theme.colors.boxColor};
  padding: 20px;
  height: calc((100vh - 265px) / 2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1150px) {
    height: 100%;
  }
`;
export const DayLabel = styled(paragraph)`
  text-align: center;
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  font-weight: bold;
`;
export const PerformancesBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  height: 100%;
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
export const PerformancesDivisor = styled.div`
  width: 1px;
  height: 2rem;
  background: ${({ theme }) => theme.colors.textColors.primaryColor};
`;
export const PerformancesTypeBox = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 900px) {
    gap: 10px;
    width: 100%;
  }
`;
export const PerformanceTypeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;

  height: 100%;

  color: ${({ theme }) => theme.colors.textColors.primaryColor};
`;
export const SeeWeeklyPerformanceButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 40px;
`;
export const SeeWeeklyPerformanceButtonLabel = styled(paragraph)``;
