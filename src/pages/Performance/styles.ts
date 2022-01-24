import styled from 'styled-components';

export const PageBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  margin: 20px;

  @media (max-width: 1150px) {
    flex-wrap: wrap;
  }
`;

export const Ranking = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1150px) {
    width: 100%;
  }
`;

// Estudantes no ranking

export const UsersList = styled.div`
  background: ${({ theme }) => theme.colors.boxColor};
  padding: 15px;
  margin: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
`;
export const UsersListBox = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  min-height: calc(100vh - 255px);
  max-height: calc(100vh - 255px);
  padding: 5px;

  @media (max-width: 1150px) {
    min-height: calc((85px + 20px) * 4 + 20px);
    max-height: calc((85px + 20px) * 4 + 20px);
  }
`;
