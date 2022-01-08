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
