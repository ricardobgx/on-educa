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
export const DoubtsList = styled.div`
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  margin: 20px;
  padding: 15px;
  border-radius: 10px;
`;
export const DoubtsListBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  min-height: calc(100vh - 255px);
  max-height: calc(100vh - 255px);
  overflow: auto;
`;
