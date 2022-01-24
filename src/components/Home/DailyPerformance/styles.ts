import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../../global/styles/components/textComponents';

export const DailyPerformanceBox = styled.div`
  margin: 20px;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
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
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
`;
export const PerformancesBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const PerformancesDivisor = styled.div`
  width: 1px;
  height: 2rem;
  background: ${({ theme }) => theme.colors.textColor};
`;
export const PerformancesTypeBox = styled.div`
  width: 40%;
`;
export const PerformanceTypeBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.25rem 0;
`;
export const PerformanceLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
`;
export const PerformanceDataLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  /* font-weight: bold; */
`;
export const WeekPerformanceButton = styled(Link)`
  background: ${({ theme }) => theme.colors.textColor};
  padding: 0.5rem;
  border-radius: 5px;
  box-shadow: 0px 0px 0px ${({ theme }) => theme.colors.boxShadowColor};
  transition: all 0.2s linear;

  &:hover {
    box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  }
`;
export const WeekPerformanceButtonLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.boxColor};
  text-align: center;
`;
