import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const PerformanceChartBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;
export const ChartBoxLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
`;
export const ChartBox = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const ChartHeight = styled.div`
  display: flex;
  justify-content: center;
  height: 200px;
  position: relative;
  margin-right: 10px;
  margin-top: 25px;
`;
export const ChartHeightBar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const ChartHeightBarBox = styled.div`
  width: 3px;
  height: calc(100% - 10px);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.colors.textColor};
`;
export const ChartHeightPoints = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 10px);
  width: 100%;
`;
export const ChartHeightPoint = styled.div`
  width: 15px;
  height: 3px;
  background: ${({ theme }) => theme.colors.textColor};
`;
export const ChartHeightLabels = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  margin-right: 5px;
`;
export const ChartHeightLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
`;

// Gráficos

export const Charts = styled.div`
  display: flex;
  align-items: flex-end;
  height: 245px;
  margin: 5px 0 0 0;
`;

// Gráfico

export const Chart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  margin: 0 10px;
`;

// Barra do gráfico

export const ChartBarValue = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  height: 25px;
`;
export const ChartBar = styled.div`
  width: 35px;
  height: calc((200px / 100) * 100);
  background: ${({ theme }) => theme.colors.textColor};
`;
export const ChartLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
  margin-top: 10px;
`;
