import styled from 'styled-components';

/*
 * Container padrao para paginas que ocupa a altura total da tela e tem a margem
 * padrao de 20 pixels
 */

export const Page = styled.div`
  min-height: 100vh;
  padding-top: 55px;
  animation: 0.2s linear fadeIn;
  animation-fill-mode: forwards;
`;

export const PageBoxRow = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  margin: 20px;

  @media (max-width: 1150px) {
    flex-wrap: wrap;
  }
`;

export const PageBoxColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin: 20px;
`;
