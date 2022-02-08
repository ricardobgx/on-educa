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
export const WeekPerformancesList = styled.div`
  margin: 15px 0;
  padding: 5px;
  min-height: calc(100vh - 480px);
  max-height: 100%;
  overflow: auto;

  @media (max-width: 1150px) {
    max-height: unset;
  }
`;
export const WeekPerformanceInfoLabel = styled(paragraph)``;
export const WeekPerformanceInfoValue = styled(paragraph)``;
export const WeekPerformanceInfo = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  padding: 10px 20px;
  border-radius: 5px;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;
export const SeeChartsButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.boxColor};
  background: ${({ theme }) => theme.colors.textColor};
  box-shadow: 0px 0px 0px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  border: none;
  min-height: 40px;
  margin-top: 10px;
`;
export const SeeChartsButtonLabel = styled(paragraph)``;
