import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const WeekPerformanceBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 95px);
  max-height: calc(100vh - 95px);

  @media (max-width: 900px) {
    min-height: unset;
    max-height: unset;
  }
`;
export const PerformanceChart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  margin: 20px;
  padding: 20px;
  max-height: 100%;
  padding-bottom: 0px;
  border-radius: 5px;
  width: calc(100% - 40px);

  @media (max-width: 1150px) {
    width: unset;
    min-height: unset;
    max-height: unset;
  }
`;

export const PerformanceChartBox = styled.div`
  width: 100%;
  overflow: auto;
  padding-bottom: 10px;
`;

export const PerformanceCharts = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;

  @media (max-width: 1150px) {
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

// Desempenho dos dias da semana

export const ChartTypes = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 10px;

  @media (max-width: 900px) {
    flex-direction: column;
    width: calc(100vw - 125px);
    margin: 10px 20px;
    padding: 10px 0;
  }
`;

// Botão para acessar dia da semana

export const ChartTypeButton = styled.button`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.boxColor};
  border: none;
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  min-width: 150px;
  height: 40px;
  border-radius: 5px;
  margin: 10px;
  margin-left: 0;

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 900px) {
    min-width: unset;
    width: 100%;
    margin: 0;
    margin-bottom: 20px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;
export const ChartTypeLabel = styled(paragraph)``;
