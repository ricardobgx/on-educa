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
  margin: 15px;
`;
export const DoubtsListBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  min-height: calc(100vh - 210px);
  max-height: calc(100vh - 210px);
  overflow: auto;
`;
