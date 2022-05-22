import styled from 'styled-components';

export const PieChartWithPaddingAngleBox = styled.div`
  & span,
  & tspan {
    font-size: 14px;
  }
  & .recharts-default-legend {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (min-width: 600px) {
      margin-left: 50px !important;
    }

    @media (min-width: 600px) and (max-width: 900px) {
      margin-right: 50px !important;
    }

    @media (max-width: 600px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;
