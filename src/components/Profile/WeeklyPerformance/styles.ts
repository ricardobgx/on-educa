import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../../global/styles/components/textComponents';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.boxColor};
  padding: 20px;
  margin-top: 20px;
  max-height: calc(100vh - 340px);
`;
export const WeeklyPerformancesList = styled.div`
  margin-top: 15px;
  padding: 5px;
  min-height: calc(100vh - 480px);
  max-height: 100%;
  overflow: auto;

  @media (max-width: 1150px) {
    max-height: unset;
  }
`;
export const WeeklyPerformanceInfoLabel = styled(paragraph)``;
export const WeeklyPerformanceInfoValue = styled(paragraph)``;
export const WeeklyPerformanceInfo = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  padding: 10px 20px;
  border-radius: 20px;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;
export const SeeChartsButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  min-height: 40px;
  margin-top: 15px;
  animation: 0.2s bottomSlideFadeIn linear;
`;
export const SeeChartsButtonLabel = styled(paragraph)``;
export const WeeklylyPerformanceChart = styled.div`
  margin: 20px 0;
  overflow-x: auto;
  max-width: 100%;
`;
