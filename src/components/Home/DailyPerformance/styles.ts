import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  paragraph,
  smallParagraph,
} from '../../../global/styles/components/textComponents';

export const DailyPerformanceBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;

  padding: 15px;

  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  background: ${({ theme }) => theme.colors.boxColor};

  @media (max-width: 1150px) {
    height: 100%;
  }
`;
export const DailyPerformanceHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const DailyPerformanceHeaderBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const DailyPerformanceHeaderTitle = styled(paragraph)`
  font-weight: bold;
`;
export const DayLabel = styled(paragraph)`
  text-align: center;
  font-weight: bold;
`;
export const PerformancesBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  height: 100%;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
export const PerformanceTypes = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;

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
  gap: 5px;

  color: currentColor;
`;
export const SeeWeeklyPerformanceButtonLabel = styled(smallParagraph)``;
