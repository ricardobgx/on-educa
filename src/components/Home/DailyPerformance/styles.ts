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
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
`;
export const PerformancesBox = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
export const PerformancesDivisor = styled.div`
  width: 1px;
  height: 2rem;
  background: ${({ theme }) => theme.colors.textColor};
`;
export const PerformancesTypeBox = styled.div`
  width: calc(50% - 10px);
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const PerformanceTypeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;

  color: ${({ theme }) => theme.colors.textColor};
`;
export const PerformanceTypeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const XPBox = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
`;
export const PerformanceLabelBox = styled.div`
  display: flex;
  align-items: center;

  & span {
    margin-right: 5px;
  }
`;
export const PerformanceLabel = styled(paragraph)`
  color: currentColor;
  font-weight: bold;
`;
export const PerformanceDataLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
`;
export const XPProgressBar = styled.div`
  background: ${({ theme }) => theme.colors.progressBarColor};

  width: 100%;
  height: 11px;
  margin-top: 10px;

  border-radius: 10px;
`;
export const XPInnerProgressBar = styled.div`
  height: 100%;
  width: 0%;

  border-radius: 10px;

  background: ${({ theme }) => theme.colors.mainButtonBgColor};

  transition: all 0.2s linear;
`;
export const WeekPerformanceButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 40px;
`;
export const WeekPerformanceButtonLabel = styled(paragraph)`
  text-align: center;
  transition: all 0.2s linear;
`;
