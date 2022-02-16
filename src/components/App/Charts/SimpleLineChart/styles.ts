import styled from 'styled-components';

export const SimpleLineChartBox = styled.div`
  & span,
  & tspan {
    font-size: 16px;
  }
  & .recharts-default-legend {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: 40px !important;
  }
`;
