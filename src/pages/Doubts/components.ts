import styled from 'styled-components';

export const PageBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 20px;

  @media (max-width: 1150px) {
    flex-wrap: wrap;
  }
`;
export const DoubtsBox = styled.div`
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
  min-height: calc(100vh - 225px);
  max-height: calc(100vh - 225px);
  overflow: auto;
`;
