import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin: 20px;
  margin-top: 0px;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

/* Botoes de criacao e ordenacao de unidades */

export const UnitsActionsBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  top: 0;
  z-index: 95;

  @media (max-width: 700px) {
    position: relative;
    flex-wrap: wrap;
    margin-top: 20px;
  }
`;
