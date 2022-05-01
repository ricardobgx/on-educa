import styled from 'styled-components';

export const WeeklyPerformanceBox = styled.div`
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
