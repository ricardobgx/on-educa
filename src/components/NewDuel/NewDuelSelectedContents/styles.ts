import styled from 'styled-components';

export const NewDuelSelectedContentsBox = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.boxColor};
  padding: 15px;
  margin-top: 20px;
`;
export const NewDuelSelectedContentsList = styled.div`
  min-height: 150px;
  max-height: 150px;
  overflow: auto;
  padding: 5px;

  @media (max-width: 1150px) {
    min-height: 200px;
    max-height: 300px;
  }
`;
