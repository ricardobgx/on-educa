import styled from 'styled-components';

// Desempenho dos dias da semana

export const ChartTypesBox = styled.div`
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
