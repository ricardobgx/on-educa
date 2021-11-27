import styled from 'styled-components';
import { paragraph } from '../../../components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
`;
export const WeekPerformanceInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const WeekPerformanceInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0;

  &:first-of-type {
    font-weight: bold;
  }

  &:nth-child(2) {
    align-items: center;
  }
`;
export const WeekPerformanceDataLabel = styled(paragraph)``;
export const UserLeague = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.similarColors.warningColor};
`;
export const UserLeagueIcon = styled.i`
  font-size: 35px;
  margin-bottom: 5px;
`;
export const UserLeagueLabel = styled(paragraph)`
  font-weight: bold;
`;
export const SeeChartsButton = styled.button`
  color: ${({ theme }) => theme.colors.boxColor};
  background: ${({ theme }) => theme.colors.textColor};
  box-shadow: 0px 0px 0px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  border: none;
  min-height: 40px;
  margin-top: 10px;
`;
export const SeeChartsButtonLabel = styled(paragraph)``;
